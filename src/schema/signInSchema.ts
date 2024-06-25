import { z } from "Zod";


export const verifySchema = z.object({
    username: z.string(),
    password: z.string()
})