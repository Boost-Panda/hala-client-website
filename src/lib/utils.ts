import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string) {
  // Remove +1 if present
  const cleanedPhone = phone.startsWith('+1') ? phone.slice(2) : phone;
  return cleanedPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}