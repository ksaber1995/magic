import { FormControl } from "@angular/forms";

export function getFileNameFromUrl(url: string): string {
  return url.split('/').pop() || '';
}

export async function setFileBinaryFromURL(url: string): Promise<File | null> {
  try {
    const filename = getFileNameFromUrl(url);
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], filename, { type: blob.type });
  } catch (error) {
    console.error(`Error fetching file from ${url}:`, error);
    return null; // Return null if fetching fails
  }
}

export async function updateFilesFromUrls(files: string[], control: FormControl) {
  const filePromises = files.map(url => setFileBinaryFromURL(url));

  // Wait for all files to be fetched
  const fileObjects = (await Promise.all(filePromises)).filter(file => file !== null);

  // Update form control in one go (better than multiple updates inside a loop)
  control.setValue([...control.value, ...fileObjects]);
}
