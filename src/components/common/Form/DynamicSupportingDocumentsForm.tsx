"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { X, FileText } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DocumentTypeT, SupportingDocumentsFormProps } from "@/types";
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from "@/lib/state";
import UploadIcon from "@/components/icons/UploadIcon";
import { formatFileSize } from "@/lib/upload";
import { useComplaintStore, useSharedStore } from "@/hooks/use-complaint-store";
import ActionButton from "../ActionButton";
import { toast } from "sonner";

// This will be dynamically generated based on the documents array
const createFormSchema = (documents: DocumentTypeT[]) => {
  const schemaFields: Record<string, any> = {};

  documents.forEach((doc) => {
    schemaFields[doc.id] = doc.required
      ? z.object({
          name: z.string().min(1, "This document is required"),
          size: z
            .number()
            .max(MAX_FILE_SIZE, "File size must be less than 5MB"),
          type: z
            .string()
            .refine(
              (type) => ACCEPTED_FILE_TYPES.includes(type),
              "File type not accepted. Upload JPG, PNG, PDF, DOC, or DOCX files"
            ),
          file: z.any(),
        })
      : z
          .object({
            name: z.string().optional(),
            size: z
              .number()
              .max(MAX_FILE_SIZE, "File size must be less than 5MB")
              .optional(),
            type: z
              .string()
              .refine(
                (type) => ACCEPTED_FILE_TYPES.includes(type),
                "File type not accepted. Upload JPG, PNG, PDF, DOC, or DOCX files"
              )
              .optional(),
            file: z.any().optional(),
          })
          .optional();
  });

  return z.object({
    ...schemaFields,
  });
};

const DynamicSupportingDocumentsForm = ({
  documents,
  onNextStep,
  onPrevStep,
}: SupportingDocumentsFormProps) => {
  const { caseType } = useSharedStore();
  const { data, setData } = useComplaintStore();
  // Track uploaded files for each document type
  const [uploadedFiles, setUploadedFiles] = useState<
    Record<string, File | null>
  >({});

  // Create the schema based on the documents array
  const formSchema = createFormSchema(documents);

  // Create default values based on documents
  const defaultValues: Record<string, any> = {};
  documents.forEach((doc) => {
    defaultValues[doc.id] = undefined;
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: data?.supportingDocuments
      ? {
          ...data.supportingDocuments,
        }
      : defaultValues,
  });

  console.log("default documents", data.supportingDocuments);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setData("supportingDocuments", values);
    onNextStep();
  };

  const handleFileChange = (
    docId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Check if this file already exists in any doc
      const isDuplicate = Object.values(uploadedFiles).some(
        (uploadedFile) =>
          uploadedFile?.name === file.name && uploadedFile?.size === file.size
      );

      if (isDuplicate) {
        toast.error(
          "This file has already been uploaded for another document."
        );
        return;
      }

      // Update the state
      setUploadedFiles((prev) => ({
        ...prev,
        [docId]: file,
      }));

      // Update the form
      form.setValue(
        docId,
        {
          name: file.name,
          size: file.size,
          type: file.type,
          file: file,
        },
        { shouldValidate: true }
      );
    }
  };

  const removeFile = (docId: string) => {
    // Update the state
    setUploadedFiles((prev) => ({
      ...prev,
      [docId]: null,
    }));

    // Update the form
    form.setValue(docId, undefined, { shouldValidate: true });
  };

  useEffect(() => {
    if (data?.supportingDocuments) {
      form.reset(data.supportingDocuments);
    }
  }, [data?.supportingDocuments, form]);

  return (
    <div className="bg-white rounded-[28px] shadow-sm  p-6">
      <div className="bg-primaryLight text-white p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold">Supporting Documents</h2>
        <p className="text-sm mt-2">
          Upload any documents or evidence related to your complaint.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div
            className={`grid grid-cols-1 ${
              caseType ? "md:grid-cols-1" : "md:grid-cols-2"
            } gap-6`}
          >
            {documents?.map((doc) => (
              <FormField
                key={doc.id}
                control={form.control}
                name={doc.id}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">
                      {doc.label}{" "}
                      {doc.required && <span className="text-red-500">*</span>}
                    </FormLabel>
                    <FormControl>
                      <div
                        className={cn(
                          "border-2 border-dashed rounded-lg p-6 text-center transition-colors h-[100px] flex flex-col items-center justify-center bg-customCard",
                          uploadedFiles[doc.id]
                            ? "border-purple-300 bg-purple-50"
                            : "border-primaryLight hover:bg-gray-50"
                        )}
                      >
                        {!uploadedFiles[doc.id] ? (
                          <label className="cursor-pointer w-full flex items-center justify-center">
                            <input
                              type="file"
                              className="hidden"
                              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                              onChange={(e) => handleFileChange(doc.id, e)}
                            />
                            <UploadIcon />
                            <p className="mt-1 text-sm text-gray-600">
                              Upload File
                            </p>
                          </label>
                        ) : (
                          <div className="w-full">
                            <div className="flex items-center justify-between mb-2">
                              <FileText
                                className={cn(
                                  "h-8 w-8",
                                  uploadedFiles[doc.id]?.type.includes("image")
                                    ? "text-blue-500"
                                    : uploadedFiles[doc.id]?.type.includes(
                                        "pdf"
                                      )
                                    ? "text-red-500"
                                    : "text-gray-500"
                                )}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(doc.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="text-left">
                              <p className="text-sm font-medium truncate">
                                {uploadedFiles[doc.id]?.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {uploadedFiles[doc.id] &&
                                  formatFileSize(uploadedFiles[doc.id]!.size)}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onPrevStep}
              className="rounded-full"
            >
              Back
            </Button>
            <ActionButton
              text="Continue"
              type="submit"
              className="bg-[#59285F] text-white font-medium py-2 px-4 rounded-full"
            />
            {/* <Button type="submit" className="hover:bg-primaryLight/90">
              Continue
            </Button> */}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DynamicSupportingDocumentsForm;
