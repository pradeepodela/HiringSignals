import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  subscriptionStatus: text('subscription_status').default('free'), // free, pro, enterprise
  subscriptionId: text('subscription_id'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
});

export const leads = sqliteTable('leads', {
  id: text('id').primaryKey(),
  niche: text('niche').notNull(),
  city: text('city').notNull(),
  companyName: text('company_name').notNull(),
  jobTitle: text('job_title'),
  hiringSignal: text('hiring_signal'), // e.g., "Recently raised Series A", "New office in London"
  confidence: real('confidence'),
  source: text('source'), // e.g., "Apify", "LinkedIn"
  data: text('data'), // JSON blob of full lead details
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
});

export const payments = sqliteTable('payments', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => users.id),
  amount: real('amount').notNull(),
  currency: text('currency').default('INR'),
  status: text('status').notNull(), // pending, success, failed
  orderId: text('order_id').notNull(),
  paymentId: text('payment_id'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
});

export const seoPages = sqliteTable('seo_pages', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  description: text('description'),
  content: text('content'),
  category: text('category'),
  city: text('city'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
});
