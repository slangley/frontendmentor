CREATE TABLE IF NOT EXISTS "t3gallery_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"headline" varchar(256),
	"category" varchar(256),
	"author" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"content" text,
	"image_url" text,
	"tags" text[],
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "headline_idx" ON "t3gallery_post" USING btree ("headline");