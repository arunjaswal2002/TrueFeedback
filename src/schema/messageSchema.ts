import { z } from "Zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "Content must be of atleast 10 characters")
    .max(300, "Content must be not more than 300 characters"),
});
