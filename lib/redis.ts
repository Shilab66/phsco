import { Redis } from "@upstash/redis"

// Create a Redis client using environment variables
// These are automatically added by the Upstash integration
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})
