import { useFileUploadActionMutation } from "@/graphql/generated";
import { convertFileToBase64 } from "@/lib/file";

export type FileMap = Record<
  string,
  {
    name: string;
    size: number;
    type: string;
    file: File;
  }
>;

type UploadResult = { documentId: string };

export function useUploadSupportingDocuments() {
  const [uploadFiles, { loading: uploadLoading, error, data }] =
    useFileUploadActionMutation();

  const uploadSupportingDocuments = async (
    documents: FileMap
  ): Promise<UploadResult[]> => {
    const filesToUpload: { base64: string; name: string; mime: string }[] = [];

    const validDocuments = Object.values(documents).filter((f) => !!f);
    console.log("valid documents", validDocuments);

    for (const wrapper of validDocuments) {
      console.log("file from doc", wrapper);

      const file = wrapper.file;
      try {
        const convertedFile = await convertFileToBase64(file);
        console.log("converted file", convertedFile);
        filesToUpload.push(convertedFile);
      } catch (e) {
        console.error("uploading file failed", e);
      }
    }

    console.log("converted files", filesToUpload);

    const uploadedFiles = await Promise.all(
      filesToUpload.map(({ base64, name, mime }) =>
        uploadFiles({
          variables: { base64, name, mime },
          onError(error, clientOptions) {
            console.log("error uploading file", error);
          },
        })
      )
    );

    console.log("uploaded files", uploadFiles);

    const filesToBeSentToDB: UploadResult[] = uploadedFiles
      .filter((v) => !!v)
      .map(({ data }) => ({
        documentId: data?._upload?.id!,
      }));

    return filesToBeSentToDB;
  };

  return { uploadSupportingDocuments, uploadLoading };
}
