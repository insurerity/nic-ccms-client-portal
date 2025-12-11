
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
 

 

  const convertFilesToBase64 = async (
    documents: FileMap
  ): Promise<any[]> => {
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

    return filesToUpload


  

   
  };

  return {  convertFilesToBase64 };
}
