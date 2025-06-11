import { FileMap } from "@/hooks/use-upload-documents";

export const convertFileToBase64 = (file: File) => {
  return new Promise<{ base64: string; name: string; mime: string }>(
    (resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve({
          base64: (reader.result as string)?.split(",")[1], // Remove the Data URL prefix
          name: file.name,
          mime: file.type,
        });
      };
      reader.onerror = (error) => {
        console.log("error converting to base 64", error);
        reject(error);
      };
    }
  );
};

export function transformToFileMap(input: Record<string, any>): FileMap {
  const fileMap: FileMap = {};

  Object.entries(input).forEach(([key, value]) => {
    if (!value) return;

    if ((key === "deathDoc2" || key === "injuryDoc2") && Array.isArray(value)) {
      value.forEach((item, index) => {
        fileMap[`${key}_${index}`] = {
          name: item.name,
          size: item.size,
          type: item.type,
          file: item.file, // assumed to be a File object
        };
      });
    } else if (value.file instanceof File) {
      fileMap[key] = {
        name: value.name,
        size: value.size,
        type: value.type,
        file: value.file,
      };
    }
  });

  return fileMap;
}
