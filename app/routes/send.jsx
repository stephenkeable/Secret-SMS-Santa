import twilio from 'twilio';
import { json } from "@remix-run/node";

export const action = async ({
  request,
}) => {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, 405);
  }

  const payload = await request.json();

  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_TOKEN;
  const fromNumber = process.env.TWILIO_FROM;

  const client = twilio(accountSid, authToken);
  
  try {
    const message = await client.messages
      .create({
          body: payload.message,
          from: fromNumber,
          to: payload.to
      })
    return json({ success: true, messageSid: message.sid }, 200);
  } catch (error) {
    return json({ success: false, error }, 200);
  }
};
