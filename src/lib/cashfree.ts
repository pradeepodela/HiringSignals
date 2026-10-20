import { Cashfree } from 'cashfree-pg';

Cashfree.XClientId = process.env.CASHFREE_CLIENT_ID || 'placeholder';
Cashfree.XClientSecret = process.env.CASHFREE_CLIENT_SECRET || 'placeholder';
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX; // Change to PRODUCTION for real site

export const createOrder = async (orderId: string, amount: number, customerEmail: string) => {
  const request = {
    order_amount: amount,
    order_currency: 'INR',
    order_id: orderId,
    customer_details: {
      customer_id: 'cust_' + Date.now(),
      customer_email: customerEmail,
      customer_phone: '9999999999',
    },
    order_meta: {
      return_url: `${process.env.SITE_URL}/checkout/success?order_id={order_id}`,
    },
  };

  try {
    const response = await Cashfree.PGCreateOrder('2023-08-01', request);
    return response.data;
  } catch (error) {
    console.error('Cashfree error:', error);
    throw error;
  }
};
