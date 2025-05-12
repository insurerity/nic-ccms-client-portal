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
      reader.onerror = (error) => reject(error);
    }
  );
};
