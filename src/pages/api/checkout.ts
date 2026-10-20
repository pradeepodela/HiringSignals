import type { APIRoute } from 'astro';
import { createOrder } from '../../lib/cashfree';

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json();
    const { amount, email, orderId } = data;

    try {
        const response = await createOrder(orderId, amount, email);
        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500
        });
    }
};
