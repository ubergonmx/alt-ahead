import { z } from 'zod'

export const envSchema = z.object({
  NODE_ENV: z.string().nonempty(),
  DATABASE_URL: z.string().nonempty(),
  GOOGLE_CLIENT_ID: z.string().nonempty(),
  GOOGLE_CLIENT_SECRET: z.string().nonempty(),
  NEXTAUTH_SECRET: z.string().nonempty(),
})

export const env = (() => {
  try {
    return envSchema.parse(process.env)
  } catch (error) {
    console.error(error)
    return process.env
  }
})()
