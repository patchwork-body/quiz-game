import { sqliteTable, AnySQLiteColumn, foreignKey, numeric, blob, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const keys = sqliteTable("keys", {
	id: numeric("id").primaryKey().notNull(),
	userId: numeric("user_id").notNull().references(() => oldPushUsers.id),
	hashedPassword: numeric("hashed_password"),
});

export const sessions = sqliteTable("sessions", {
	id: numeric("id").primaryKey().notNull(),
	userId: numeric("user_id").notNull().references(() => oldPushUsers.id),
	activeExpires: blob("active_expires").notNull(),
	idleExpires: blob("idle_expires").notNull(),
});

export const users = sqliteTable("users", {
	id: numeric("id").primaryKey().notNull(),
});

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
	id: numeric("id").primaryKey(),
	hash: text("hash").notNull(),
	createdAt: numeric("created_at"),
});