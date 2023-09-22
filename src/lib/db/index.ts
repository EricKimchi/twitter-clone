import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import Pool from "pg-pool";

const sql = postgres(process.env.DATABASE_CONNECTION_STRING as string, {
  max: 1,
});

export const db = drizzle(sql, {
  schema,
});

export const pool = new Pool({
  database:'postgress',
  connectionString: process.env.DATABASE_CONNECTION_STRING,
  allowExitOnIdle: true
});