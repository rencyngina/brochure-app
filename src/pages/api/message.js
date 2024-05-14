"use_server"
import { ServerClient } from 'postmark';

export default async function messageRequest(req, res) {
  console.log('Received POST request to /api/message');
  const { name, phone, email, date } = req.body;
  console.log('Received data:', { name, email, phone, date});

  if (req.method === 'POST') {
    try {
      const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN);

      const messageBody = `
        You have a new request for Meeting from.
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Date: ${date}
      `;

      const response = await client.sendEmail({
        From: 'info@acuitus-duo.co.ke',
        // process.env.SEND_FROM_EMAIL,
        To: 'erickadikah2030@gmail.com',
        // process.env.SEND_TO_EMAIL,
        Subject: 'New Message from Sovreign Wealth Management Website',
        TextBody: messageBody,
      });

      if (response.Message) {
        return res.status(200).json({ message: 'Message sent successfully' });
      } else {
        return res.status(400).json({ error: 'Failed to send message' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}