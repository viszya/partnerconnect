import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { generateComponents } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function twp() {
  return { 
    wrapper: "mx-auto w-full max-w-screen-xl px-2.5 md:px-20"
  }
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}
 
// export const { UploadButton, UploadDropzone, Uploader } = generateComponents<OurFileRouter>();