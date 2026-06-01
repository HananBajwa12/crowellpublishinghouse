require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });
const fetch = require('node-fetch');

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const mode = process.env.PAYPAL_MODE || 'sandbox';
const baseUrl = mode === 'live' ? process.env.PAYPAL_LIVE_BASE_URL : process.env.PAYPAL_SANDBOX_BASE_URL;

if (!clientId || !clientSecret || !baseUrl) {
  console.error('Missing PayPal environment variables.');
  process.exit(1);
}

(async () => {
  try {
    const tokenResponse = await fetch(`${baseUrl}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });
    const data = await tokenResponse.json();
    if (!tokenResponse.ok) {
      console.error('PayPal token error:', tokenResponse.status, tokenResponse.statusText, data);
    } else {
      console.log('PayPal access token retrieved successfully:', data.access_token);
    }
  } catch (err) {
    console.error('Error fetching token:', err);
  }
})();
