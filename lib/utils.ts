import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {CATEGORIES, CategoryType} from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getSeller = (profile: any): Seller => ({
  id: profile?.id || "",
  name: profile?.name || "",
  rating: profile?.rating || 0,
  location: profile?.location || "",
  contact: profile?.contact || "",
  email: profile?.email || "",
  totalSales: profile?.totalSales || 0,
  image: profile?.image || "",
});

export const capitalize = (str: string | undefined | null): string => {
  if (!str) return "N/A"; // Handle empty/null values

  return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
};

export const getCategoryLabel = (value: CategoryType): string => {
  const category = CATEGORIES.find((cat) => cat.value === value);
  return category?.label ?? "Unknown Category";
};

export const countProductsByStatus = (products: any, status: Status) => {
  return products?.filter((product: any) => product.status?.toLowerCase() === status.toLowerCase())?.length ?? 0
}