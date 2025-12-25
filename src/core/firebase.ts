import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import type { FirebaseInstance } from "../types";

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  appId: string;
}

export function initFirebase(config: FirebaseConfig): FirebaseInstance {
  const app =
    getApps().length === 0 ? initializeApp(config) : getApps()[0];

  return {
    db: getFirestore(app),
    storage: getStorage(app),
  };
}
