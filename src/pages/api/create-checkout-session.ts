import type { APIRoute } from 'astro';
import { createOrder } from '../../lib/cashfree';
import { db } from '../../db';
import { payments } from '../../db/schema';
import { nanoid } from 'nanoid';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { tier, email } = await request.json();
    
    let amount = 750; // Starter
    if (tier === 'pro') amount = 3999;
    if (tier === 'enterprise') amount = 15000;

    const orderId = `order_${nanoid()}`;
    
    // Create order in Cashfree
    const cfOrder = await createOrder(orderId, amount, email);

    // Store pending payment in DB
    await db.insert(payments).values({
      id: nanoid(),
      amount: amount,
      currency: 'INR',
      status: 'pending',
      orderId: orderId,
    });

    return new Response(JSON.stringify({ 
      payment_session_id: cfOrder.payment_session_id 
    }), {
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
