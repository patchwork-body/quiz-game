-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `keys` (
	`id` numeric PRIMARY KEY NOT NULL,
	`user_id` numeric NOT NULL,
	`hashed_password` numeric,
	FOREIGN KEY (`user_id`) REFERENCES `__old_push_users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` numeric PRIMARY KEY NOT NULL,
	`user_id` numeric NOT NULL,
	`active_expires` blob NOT NULL,
	`idle_expires` blob NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `__old_push_users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` numeric PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `__drizzle_migrations` (
	`id` numeric PRIMARY KEY,
	`hash` text NOT NULL,
	`created_at` numeric
);

*/