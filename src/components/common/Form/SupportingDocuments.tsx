import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { UploadCloud, X, FileText } from "lucide-react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ACCEPTED_FILE_TYPES } from "@/lib/state";
import { useComplaintStore } from "@/hooks/use-complaint-store";

const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15 MB


const formSchema = z.object({
  documents: z
    .array(
      z.object({
        name: z.string(),
        size: z.number().max(MAX_FILE_SIZE, "File size must be less than 15MB"),
        type: z
          .string()
          .refine(
            (type) => ACCEPTED_FILE_TYPES.includes(type),
            "File type not accepted. Upload JPG, PNG, or PDF files"
          ),
        file: z.any(),
      })
    )
    .optional(),
});

interface SupportingDocumentsFormProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const SupportingDocumentsForm = ({
  onNextStep,
  onPrevStep,
}: SupportingDocumentsFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const { data, setData } = useComplaintStore();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documents: [...data.supportingDocuments],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    onNextStep();
  };

 const handleBackClick = () => {
      const currentValues = form.getValues().documents || [];
      setData("supportingDocuments", currentValues as z.infer<typeof formSchema>);
      if (onPrevStep) {
        onPrevStep();
      }
    };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("file upload.............");
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      console.log("uploaded files", files);
      console.log("new File", newFiles);
      setFiles((prev) => [...prev, ...newFiles]);

      // Process files for the form
      const fileObjects = newFiles?.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        file: file,
      }));

      const currentDocs = form.getValues().documents || [];
      form.setValue("documents", [...currentDocs, ...fileObjects]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);

    const currentDocs = form.getValues().documents || [];
    const newDocs = [...currentDocs];
    newDocs.splice(index, 1);
    form.setValue("documents", newDocs);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " bytes";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="bg-primaryLight text-white p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold">Supporting Documents</h2>
        <p className="text-sm mt-2">
          Upload any documents or evidence related to your complaint.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormItem>
            <FormLabel>Upload Documents</FormLabel>
            <FormDescription>
              Upload screenshots, photos, or documents that support your
              complaint. Accepted file types: JPG, PNG, PDF, DOC, DOCX. Maximum
              file size: 5MB.
            </FormDescription>
            <FormControl>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors">
                <label className="block cursor-pointer">
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-1 text-sm text-gray-600">
                    Drag and drop files here or{" "}
                    <span className="text-purple-600 font-medium">browse</span>
                  </p>
                </label>
              </div>
            </FormControl>
            <FormMessage />

            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText
                        className={cn(
                          "h-8 w-8",
                          file.type.includes("image")
                            ? "text-blue-500"
                            : file.type.includes("pdf")
                            ? "text-red-500"
                            : "text-gray-500"
                        )}
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium truncate max-w-[200px]">
                          {file.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatFileSize(file.size)}
                        </span>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </FormItem>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={handleBackClick}>
              Back
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SupportingDocumentsForm;
