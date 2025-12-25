import { useMemo } from "react";
import { addDocument, getAllDocuments } from "../firestore";

export function useFirestore(db: any) {
  return useMemo(() => ({
    add: (collection: string, data: any) =>
      addDocument(db, collection, data),
    getAll: (collection: string) =>
      getAllDocuments(db, collection),
  }), [db]);
}
