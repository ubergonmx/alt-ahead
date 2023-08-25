import { z } from 'zod'

export const envSchema = z.object({
  NODE_ENV: z.string().nonempty(),
  DATABASE_URL: z.string().nonempty(),
  GOOGLE_CLIENT_ID: z.string().nonempty(),
  GOOGLE_CLIENT_SECRET: z.string().nonempty(),
  NEXTAUTH_SECRET: z.string().nonempty(),
})

export const env = envSchema.parse(process.env)
