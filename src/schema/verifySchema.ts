import { z } from 'Zod';


export const verifySchema = z.object({
    code : z.string().length(6,"Verifictaion code must be of length 6")
})