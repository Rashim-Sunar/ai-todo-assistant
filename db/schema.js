import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  todo: text("todo").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
