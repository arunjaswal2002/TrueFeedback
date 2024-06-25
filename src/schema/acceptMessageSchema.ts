import { z } from "Zod";


export const acceptingMessageSchema = z.object({
    acceptMessages: z.boolean(),
})