const Contact = require("../models/Contact");
const resend = require("../config/resend");

exports.addContact = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 1. Save message to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // 2. Send email to YOU
    await resend.emails.send({
      from: "Surendra_Portfolio <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Portfolio Message: ${subject}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 25px;
          border: 1px solid #ddd;
          border-radius: 10px;
        ">

          <h2>New Portfolio Contact Message</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <hr>

          <h3>Message</h3>

          <p>
            ${message}
          </p>

        </div>
      `,
    });

    // 3. Automatic reply to VISITOR
    await resend.emails.send({
      from: "Surendra Singh <onboarding@resend.dev>",
      to: email,

      subject: "Thanks for contacting me!",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 30px;
          background: #f8fafc;
          border-radius: 12px;
        ">

          <h1 style="color: #111827;">
            Thanks for contacting me, ${name}! 👋
          </h1>

          <p style="
            font-size: 16px;
            line-height: 1.6;
          ">
            Thank you for reaching out through my portfolio website.
          </p>

          <p style="
            font-size: 16px;
            line-height: 1.6;
          ">
            I have received your message and will get back to you
            as soon as possible.
          </p>

          <hr>

          <h3>Your Message</h3>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <p>
            ${message}
          </p>

          <br>

          <p>
            Best Regards,<br>
            <strong>Surendra Singh</strong><br>
            Full Stack Developer
          </p>

        </div>
      `,
    });

    // Response to React
    return res.status(201).json({
      success: true,
      message:
        "Message sent successfully. A confirmation email has been sent to you.",
      contact,
    });

  } catch (error) {
    console.error("Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send message.",
      error: error.message,
    });
  }
};