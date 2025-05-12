import { useFileUploadActionMutation } from "@/graphql/generated";
import { convertFileToBase64 } from "@/lib/file";

type FileMap = Record<string, File | undefined>;
type UploadResult = { documentId: string };

export function useUploadSupportingDocuments() {
  const [uploadFiles, { loading: uploadLoading }] =
    useFileUploadActionMutation();

  const uploadSupportingDocuments = async (
    documents: FileMap
  ): Promise<UploadResult[]> => {
    const filesToUpload: { base64: string; name: string; mime: string }[] = [];

    for (const file of Object.values(documents)) {
      if (file instanceof File) {
        const convertedFile = await convertFileToBase64(file);
        filesToUpload.push({
          ...convertedFile,
        });
      }
    }

    const uploadedFiles = await Promise.all(
      filesToUpload.map(({ base64, name, mime }) =>
        uploadFiles({ variables: { base64, name, mime } })
      )
    );

    const filesToBeSentToDB: UploadResult[] = uploadedFiles.map(({ data }) => ({
      documentId: data?._upload?.id!,
    }));

    return filesToBeSentToDB;
  };

  return { uploadSupportingDocuments, uploadLoading };
}
