import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Web3Forms API as in original
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c454060b-3787-49a7-9169-991c170aadbf',
          ...formData,
          redirect: 'https://dharmagat.com.np'
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" data-aos="fade-up">
      <div className="section-heading">
        <h2 className="section-heading-article" tabIndex="0" aria-label="Contact me heading">
          ContactMe
        </h2>
      </div>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          
          <div className="form-group">
            <input
              type="text"
              id="yourname"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="letsTalkBtn" disabled={isSubmitting}>
            <p className="letsTalkBtn-text">
              {isSubmitting ? 'Sending...' : "Let's Talk!"}
            </p>
            <span className="letsTalkBtn-BG"></span>
          </button>

          <div className="social-links">
            <a href="https://github.com/dharmub376" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/images/github.png" alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/dharmub376/" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/images/insta.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/dharmub376" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/images/fb.png" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/dharmub376/" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/images/ln.png" alt="LinkedIn" />
            </a>
            <a href="https://x.com/dharmub376" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/images/x.png" alt="X" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;