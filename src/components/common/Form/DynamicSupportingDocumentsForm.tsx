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
import {
  useComplaintStore,
  useFaqsDialogStore,
  useSharedStore,
} from "@/hooks/use-complaint-store";
import ActionButton from "../ActionButton";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";
import { logInfo } from "@/lib/logger";

const createFormSchema = (documents: DocumentTypeT[]) => {
  const schemaFields: Record<string, any> = {};

  documents.forEach((doc) => {
    if (doc.id === "Other Documents") {
      schemaFields[doc.id] = z
        .array(
          z.object({
            name: z.string(),
            size: z.number().max(MAX_FILE_SIZE),
            type: z
              .string()
              .refine(
                (type) => ACCEPTED_FILE_TYPES.includes(type),
                "File type not accepted."
              ),
            file: z.any(),
          })
        )
        .optional();
    } else {
      schemaFields[doc.id] = doc.required
        ? z.object({
            name: z.string().min(1, "This document is required"),
            size: z
              .number()
              .max(MAX_FILE_SIZE, "File size must be less than 15MB"),
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
                .max(MAX_FILE_SIZE, "File size must be less than 15MB")
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
    }
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
  const [uploadedFiles, setUploadedFiles] = useState<
    Record<string, File | null>
  >({});
  const isMobile = useIsMobile();
  const { showDialog } = useFaqsDialogStore();
  const pathName = usePathname();
  const isMFUND = pathName.includes("compensation");

  const formSchema = createFormSchema(documents);

  const defaultValues: Record<string, any> = {};
  documents.forEach((doc) => {
    defaultValues[doc.id] = undefined;
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: data?.supportingDocuments ?? defaultValues,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setData("supportingDocuments", values);
    onNextStep();
  };

  const handleBackClick = () => {
    const currentFormValues = form.getValues();
    setData("supportingDocuments", currentFormValues);
    if (onPrevStep) onPrevStep();
  };

  const handleFileChange = (
    docId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      return toast.error(
        "File type not accepted. Upload JPG, PNG, PDF, DOC, or DOCX files"
      );
    }

    const isDuplicate = Object.values(uploadedFiles).some(
      (uploadedFile) =>
        uploadedFile?.name === file.name && uploadedFile?.size === file.size
    );
    if (isDuplicate)
      return toast.error(
        "This file has already been uploaded for another document."
      );

    if (isMFUND) {
      const reqDocId = documents[0]?.id;
      if (!uploadedFiles[reqDocId] && docId !== reqDocId) {
        return toast.error("Please upload the required document first");
      }
    }

    setUploadedFiles((prev) => ({ ...prev, [docId]: file }));
    form.setValue(
      docId,
      {
        name: file.name,
        size: file.size,
        type: file.type,
        file,
      },
      { shouldValidate: true }
    );
  };

  const handleOtherDocumentsChange = (
    docId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.length) return;
    const files = Array.from(e.target.files);

    const existing = form.getValues()[docId] ?? [];
    const uniqueFiles = files.filter(
      (f) =>
        !existing.some((ex: any) => ex.name === f.name && ex.size === f.size)
    );

    if (uniqueFiles.length < files.length) {
      toast.warning(
        "Some files were skipped because they were already uploaded."
      );
    }
    if (uniqueFiles.length === 0) {
      toast.error("All selected files have already been uploaded.");
      return;
    }

    const newEntries = uniqueFiles.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      file,
    }));

    const updated = [...existing, ...newEntries];
    form.setValue(docId, updated, { shouldValidate: true });
  };

  const removeOtherDoc = (docId: string, index: number) => {
    const current = form.getValues()[docId] || [];
    const updated = current.filter((_: any, i: number) => i !== index);
    form.setValue(docId, updated, { shouldValidate: true });
  };

  const removeFile = (docId: string) => {
    setUploadedFiles((prev) => ({ ...prev, [docId]: null }));
    form.setValue(docId, undefined, { shouldValidate: true });
  };

  // reset the form when store data changes
  useEffect(() => {
    if (
      data.supportingDocuments &&
      Object.keys(data.supportingDocuments).length > 0
    ) {
      form.reset(data.supportingDocuments);
    } else {
      // If store is empty, reset form to initial default values
      const initialDefaultValues: Record<string, any> = {};
      documents.forEach((doc) => {
        initialDefaultValues[doc.id] = undefined;
      });
      form.reset(initialDefaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.supportingDocuments, documents]);

  useEffect(() => {
    if (data.supportingDocuments) {
      form.reset(data.supportingDocuments);
      const newUiFiles: Record<string, File | null> = {};
      documents.forEach((doc) => {
        const value = data.supportingDocuments[doc.id];
        if (Array.isArray(value)) return;
        newUiFiles[doc.id] = value?.file instanceof File ? value.file : null;
      });
      setUploadedFiles(newUiFiles);
    }
  }, [data.supportingDocuments, documents, form]);

  useEffect(() => {
    logInfo("Page View", {
      component: "BusinessInformationForm",
      path: pathName,
    });
  }, [pathName]);

  return (
    <div className="bg-white lg:rounded-[28px] shadow-sm p-6">
      <div className="bg-primaryLight text-white p-4 lg:p-6 rounded-xl mb-6 flex">
        <div>
          <h2 className="text-sm lg:text-xl font-bold">Supporting Documents</h2>
          <p className="text-sm mt-2">
            Upload any documents or evidence related to your complaint.
          </p>
        </div>
        {isMobile && (
          <Button
            variant="default"
            className="border rounded-2xl"
            onClick={showDialog}
          >
            Learn More
          </Button>
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div
            className={`grid grid-cols-1 ${
              caseType ? "md:grid-cols-1" : "md:grid-cols-2"
            } gap-6`}
          >
            {documents.map((doc) => (
              <FormField
                key={doc.id}
                control={form.control}
                name={doc.id}
                render={() => (
                  <FormItem>
                    <FormLabel className="text-sm">
                      {doc.label}{" "}
                      {doc.required && <span className="text-red-500">*</span>}
                    </FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed rounded-lg p-4 bg-customCard">
                        <label className="cursor-pointer flex flex-col items-center justify-center">
                          <input
                            type="file"
                            className="hidden"
                            multiple={doc.id === "Other Documents"}
                            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                            onChange={(e) =>
                              doc.id === "Other Documents"
                                ? handleOtherDocumentsChange(doc.id, e)
                                : handleFileChange(doc.id, e)
                            }
                          />
                          <UploadIcon />
                          <p className="mt-1 text-sm text-gray-600">
                            Upload{" "}
                            {doc.id === "Other Documents" ? "Files" : "File"}{" "}
                            <br />
                            (Max size - 15MB)
                          </p>
                        </label>
                        {doc.id === "Other Documents" ? (
                          <div className="mt-4 space-y-2 text-left">
                            {(form.watch(doc.id) || []).map(
                              (file: any, index: number) => (
                                <div
                                  key={index}
                                  className="flex justify-between items-center p-2 bg-white rounded border"
                                >
                                  <div className="flex items-center gap-2">
                                    <FileText className="text-gray-500 h-5 w-5" />
                                    <div>
                                      <p className="text-sm font-medium">
                                        {file.name}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {formatFileSize(file.size)}
                                      </p>
                                    </div>
                                  </div>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                      removeOtherDoc(doc.id, index)
                                    }
                                  >
                                    <X className="h-4 w-4 text-red-500" />
                                  </Button>
                                </div>
                              )
                            )}
                          </div>
                        ) : uploadedFiles[doc.id] ? (
                          <div className="mt-4 text-left">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <FileText className="text-gray-500 h-5 w-5" />
                                <div>
                                  <p className="text-sm font-medium">
                                    {uploadedFiles[doc.id]?.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {formatFileSize(
                                      uploadedFiles[doc.id]!.size
                                    )}
                                  </p>
                                </div>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFile(doc.id)}
                              >
                                <X className="h-4 w-4 text-red-500" />
                              </Button>
                            </div>
                          </div>
                        ) : null}
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
              onClick={handleBackClick}
              className="rounded-full"
            >
              Back
            </Button>
            <ActionButton
              text="Continue"
              type="submit"
              className="bg-[#59285F] text-white font-medium py-2 px-4 rounded-full"
              actionFrom="Dynamic Support Documents Form"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DynamicSupportingDocumentsForm;
