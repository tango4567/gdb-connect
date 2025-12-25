import { doc, deleteDoc } from "firebase/firestore";
import type { Firestore } from "firebase/firestore";

/**
 * Delete a document from Firestore
 */
export async function deleteDocument(
    db: Firestore,
    collectionName: string,
    docId: string
): Promise<void> {
    await deleteDoc(doc(db, collectionName, docId));
}
