import 'dotenv/config';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from '~/services/db';

await migrate(db, { migrationsFolder: './drizzle' });
