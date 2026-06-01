import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "ILS"): string {
  return new Intl.NumberFormat("he-IL", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppLink(
  phone: string,
  message: string,
  source = "אתר"
): string {
  const fullMessage = `${message} הגעתי דרך: ${source}`;
  const encoded = encodeURIComponent(fullMessage).replace(/%20/g, "+");
  return `https://wa.me/${phone}?text=${encoded}`;
}
