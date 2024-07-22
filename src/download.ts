export const download = (
  filename: string,
  text: string
): void => {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const location = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = location;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(location);
};
