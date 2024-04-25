import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  avatar: z.string(),
  name: z.string(),
  industry: z.string(),
  tags: z.array(z.string()),
  status: z.string(),
  partner: z.string(),
  size: z.string(),
  product: z.string(),
})

export type Task = z.infer<typeof taskSchema>
