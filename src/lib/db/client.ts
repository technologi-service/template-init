import { attachDatabasePool } from "@vercel/functions";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { databaseConfig } from "./config";
import * as schema from "../auth/schema";

const pool = new Pool({
  connectionString: databaseConfig.server.url,
});

attachDatabasePool(pool);

const db = drizzle(pool, { schema });

export { db };
