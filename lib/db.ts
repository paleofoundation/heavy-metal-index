import { Pool } from "pg";

declare global {
  var __hmiPgPool: Pool | undefined;
}

function buildPool(): Pool {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }
  return new Pool({
    connectionString,
    max: 3,
    ssl: { rejectUnauthorized: false },
  });
}

export const pool: Pool = globalThis.__hmiPgPool ?? buildPool();
if (process.env.NODE_ENV !== "production") {
  globalThis.__hmiPgPool = pool;
}
