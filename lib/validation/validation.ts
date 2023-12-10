import { z } from "zod"

export const reTry = z.object({
  name: z.string().min(5).max(30),
  group: z.string().min(1),
  round: z.string().min(1),
})
