import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import type { FirebaseStorage } from "firebase/storage";
import type { UploadResult } from "../types";

export async function uploadImage(
  storage: FirebaseStorage,
  path: string,
  file: File
): Promise<UploadResult> {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);

  return { url, path };
}
