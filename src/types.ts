import type { Firestore } from "firebase/firestore";
import type { FirebaseStorage } from "firebase/storage";

/**
 * Firebase instances returned by initFirebase
 */
export interface FirebaseInstance {
    db: Firestore;
    storage: FirebaseStorage;
}

/**
 * Generic Firestore document type
 */
export type FirestoreDocument<T = Record<string, any>> = {
    id: string;
} & T;

/**
 * Firestore write payload
 */
export type FirestoreData = Record<string, any>;

/**
 * Upload result from Firebase Storage
 */
export interface UploadResult {
    url: string;
    path: string;
}
