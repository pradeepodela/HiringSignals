import type { APIRoute } from 'astro';
import { db } from '../../db';
import { payments } from '../../db/schema';
import { eq } from 'drizzle-orm';

export const POST: APIRoute = async ({ request }) => {
    // In a real app, verify Cashfree signature here
    try {
        const data = await request.json();
        const order_id = data.order_id;
        const status = data.order_status;

        if (status === 'PAID') {
            await db.update(payments)
                .set({ status: 'success' })
                .where(eq(payments.orderId, order_id));
            
            // Trigger lead unlocking or fulfillment logic here
        }

        return new Response(JSON.stringify({ received: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
