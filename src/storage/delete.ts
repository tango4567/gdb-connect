import { ref, deleteObject } from "firebase/storage";

export async function deleteImage(storage: any, path: string) {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
}
