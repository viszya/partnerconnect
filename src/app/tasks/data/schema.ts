import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  avatar: z.string(),
  name: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
  industry: z.string(),
  size: z.string(),
  product: z.string(),
})
//src/app/tasks
// name, avatar, progress, industry, partner, tags, contact, social media

export type Task = z.infer<typeof taskSchema>
