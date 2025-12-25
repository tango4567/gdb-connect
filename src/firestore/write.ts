import {
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import type { Firestore } from "firebase/firestore";
import type { FirestoreData } from "../types";

export async function addDocument(
  db: Firestore,
  collectionName: string,
  data: FirestoreData
): Promise<string> {
  const ref = await addDoc(collection(db, collectionName), data);
  return ref.id;
}

export async function setDocument(
  db: Firestore,
  collectionName: string,
  docId: string,
  data: FirestoreData
): Promise<void> {
  await setDoc(doc(db, collectionName, docId), data, { merge: true });
}
