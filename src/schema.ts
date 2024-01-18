import { text, sqliteTable, blob } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id', { length: 15 }).notNull().primaryKey(),
  email: text('email', { length: 255 }).notNull().unique(),
});

export const keys = sqliteTable('keys', {
  id: text('id', { length: 255 }).notNull().primaryKey(),
  user_id: text('user_id', { length: 15 })
    .notNull()
    .references(() => users.id),
  hashed_password: text('hashed_password', { length: 255 }),
});

export const sessions = sqliteTable('sessions', {
  id: text('id', { length: 127 }).notNull().primaryKey(),
  user_id: text('user_id', { length: 15 })
    .notNull()
    .references(() => users.id),
  active_expires: blob('active_expires', { mode: 'bigint' }).notNull(),
  idle_expires: blob('idle_expires', { mode: 'bigint' }).notNull(),
});
