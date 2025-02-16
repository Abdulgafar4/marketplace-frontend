import { z } from "zod";
import { CategoryType, Condition, PaymentType, Status } from "./constants";

export const productSchema = z.object({
  $id: z.string().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  price: z.number().min(0.01, { message: "Price must be greater than 0" }),
  description: z.string().min(40, { message: "Description is required and it's minimum of 40 characters" }),
  category: z.enum(Object.values(CategoryType) as [string, ...string[]], {
    message: "Please select a category for your product.",
  }),
  condition: z.enum(Object.values(Condition) as [string, ...string[]], {
      message: "Please select the condition of your product.",
    }),
  brand: z.string().optional(),
  model: z.string().optional(),
  status: z.union([z.enum(Object.values(Status) as [string, ...string[]]), z.undefined()]),
  paymentOptions: z.enum(Object.values(PaymentType) as [string, ...string[]],{
      message: "Please select the payment method you accept.",
    }),
  shipping_available: z.boolean().optional(),
  pickup_available: z.boolean().optional(),
  images: z
    .array(z.string())
    .min(1, "At least one image is required")
});
