import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { cookies } from "next/headers"
import { Database } from "./supabase.types"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}