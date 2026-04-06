import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const { name, email, company, phone, automation_type } = body;

    // Email to company
    await resend.emails.send({
      from: "PixoraNest <onboarding@resend.dev>",
      to: ["pixoranest@gmail.com"],
      subject: "New Lead Received 🚀",
      html: `
        <h2>New Lead Submitted</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${automation_type}</p>
      `,
    });

    // Email to customer
    await resend.emails.send({
      from: "PixoraNest <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for contacting PixoraNest",
      html: `
        <h2>Hi ${name} 👋</h2>
        <p>Thank you for contacting PixoraNest.</p>
        <p>Our team will contact you within 24 hours.</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}