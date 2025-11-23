import { client } from "./client";

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function safeFetch(
  query: string,
  params?: Record<string, unknown>,
  attempts = 3,
  delay = 500
) {
  let lastError: unknown = null;
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await client.fetch(query, params);
      return res;
    } catch (err) {
      lastError = err;
      // small backoff before retrying
      await wait(delay * (i + 1));
    }
  }

  // After attempts exhausted, log and return null to allow callers to handle gracefully
  // eslint-disable-next-line no-console
  console.error("safeFetch: all attempts failed", {
    query,
    params,
    error: lastError,
  });
  return null;
}
