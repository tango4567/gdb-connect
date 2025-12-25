import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import type { Firestore } from "firebase/firestore";
import type { FirestoreDocument } from "../types";

export async function getAllDocuments<T>(
  db: Firestore,
  collectionName: string
): Promise<FirestoreDocument<T>[]> {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as T),
  }));
}

export async function getDocument<T>(
  db: Firestore,
  collectionName: string,
  docId: string
): Promise<T | null> {
  const snapshot = await getDoc(doc(db, collectionName, docId));
  return snapshot.exists() ? (snapshot.data() as T) : null;
}
