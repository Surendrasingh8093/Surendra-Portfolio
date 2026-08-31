
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await axios.post(
        `${API_URL}/contact`,
        formData
      );

      setSuccess(
        response.data.message ||
          "Message sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE - MY INFORMATION */}

        <div className="contact-info">

          <div className="topline">
          <h2>Contact Me</h2>
          </div>

          <p className="contact-description">
            I'm always interested in hearing about
            new projects, opportunities and ideas.
            Feel free to contact me.
          </p>


          {/* NAME */}

          <div className="info-item">

            <div className="info-icon">
              👤
            </div>

            <div>
              <h3>Name</h3>
              <p>Surendra Singh</p>
            </div>

          </div>


          {/* PROFESSION */}

          <div className="info-item">

            <div className="info-icon">
              💻
            </div>

            <div>
              <h3>Profession</h3>
              <p>Full Stack Developer</p>
            </div>

          </div>


          {/* EMAIL */}

          <div className="info-item">

            <div className="info-icon">
              📧
            </div>

            <div>
              <h3>Email</h3>

              <a href="mailto:your-email@gmail.com">
                surendras11884@gmail.com
              </a>

            </div>

          </div>


          {/* PHONE */}

          <div className="info-item">

            <div className="info-icon">
              📱
            </div>

            <div>
              <h3>Phone</h3>

              <a href="tel:+91XXXXXXXXXX">
                +91 XXXXXXXXXX
              </a>

            </div>

          </div>


          {/* LOCATION */}

          <div className="info-item">

            <div className="info-icon">
              📍
            </div>

            <div>
              <h3>Location</h3>
              <p>India</p>
            </div>

          </div>


          {/* SOCIAL LINKS */}

          <div className="contact-social">

            <h3>Connect With Me</h3>

            <div className="social-buttons">

              <a
                href="https://github.com/Surendrasingh8093"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/surendra-singh-75b38630b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE - CONTACT FORM */}

        <div className="contact-form-container">

          <h2>
            Send Me a Message
          </h2>

          <p>
            Fill out the form below and I'll get
            back to you as soon as possible.
          </p>


          {success && (
            <div className="success-message">
              {success}
            </div>
          )}


          {error && (
            <div className="error-message">
              {error}
            </div>
          )}


          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >

            <div className="form-group">

              <label>Your Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

            </div>


            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>


            <div className="form-group">

              <label>Subject</label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />

            </div>


            <div className="form-group">

              <label>Message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                required
              />

            </div>


            <button
              type="submit"
              disabled={loading}
              className="send-button"
            >

              {loading
                ? "Sending..."
                : "Send Message →"}

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;