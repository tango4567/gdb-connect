import { useMemo } from "react";
import { uploadImage } from "../storage/upload";

export function useStorage(storage: any) {
    return useMemo(() => ({
        upload: (path: string, file: File) =>
            uploadImage(storage, path, file),
    }), [storage]);
}
