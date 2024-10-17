// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `t3gallery_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    headline: varchar("headline", { length: 256 }),
    category: varchar("category", { length: 256 }),
    author: varchar("author", { length: 256 }),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    content: text("content"),
    imageUrl: text("image_url"),
    tags: text("tags").array(),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    headlineIndex: index("headline_idx").on(example.headline),
  })
);


export type Post = typeof posts.$inferSelect;

