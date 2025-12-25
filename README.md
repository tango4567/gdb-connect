# gdb-connect 🔥

A lightweight, UI-agnostic React library for Firebase Firestore and Storage.

## ✨ Features
- Firebase v9+ (modular SDK)
- Firestore read/write/delete
- Firebase Storage image upload
- Headless (bring your own UI)
- TypeScript support
- Works with React, Vite, CRA, Next.js

---

## 📦 Installation

```bash
npm install gdb-connect firebase
```

## 🔧 Firebase Initialization

```bash
import { initFirebase } from "react-firebase-lite";

export const firebase = initFirebase({
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  appId: "..."
});
```

## 🗄️ Firestore Usage

```bash
import { useFirestore } from "react-firebase-lite";

const firestore = useFirestore(firebase.db);

await firestore.add("posts", { title: "Hello Firebase" });
```

## 🖼️ Storage Usage

```bash
import { useStorage } from "react-firebase-lite";

const storage = useStorage(firebase.storage);

const result = await storage.upload("images/photo.jpg", file);
console.log(result.url);
```

## ⚠️ Notes

Client-side only
Requires Firebase v9+
Security handled via Firebase Rules
