import sgMail from "@sendgrid/mail";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, standard, city, source } = body;

    if (!email || !standard) {
      throw new Error("Missing required fields");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const location = city ? `${city}` : "Not specified";
    const pageSource = source || "Not provided";

    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: `Certification inquiry — ISO ${standard}`,
      text: `
        Email: ${email}
        Standard: ISO ${standard}
        City: ${location}
        Source page: ${pageSource}
      `,
      html: `
        <h2>Certification Body Inquiry</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Standard:</strong> ISO ${standard}</p>
        <p><strong>City:</strong> ${location}</p>
        <p><strong>Source page:</strong> ${pageSource}</p>
      `,
    };

    await sgMail.send(msg);

    return {
      status: 200,
      message: "Inquiry submitted successfully",
    };
  } catch (error) {
    console.error("Error sending certification inquiry:", error);
    return {
      status: 500,
      message: error.message || "Failed to submit inquiry",
    };
  }
});
