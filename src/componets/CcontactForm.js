import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Send "Thank You" email to the user
    const userParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        'service_6rkxqyd',    // YOUR_SERVICE_ID
        'template_if4ku0k',   // template_id
        userParams,           // Pass the user details as parameters    
        'gbHgYxlABI8gRDoDt'   // public key
      )
      .then((response) => {
        console.log('Thank You email sent successfully to the user!', response.status, response.text);

        // Clear the form fields after successful submission
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((err) => console.error('Failed to send Thank You email to the user:', err));

    // 2. Send admin email with user details
    const adminParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        'service_6rkxqyd',    // YOUR_SERVICE_ID
        'template_1i32ju5',   // template_id
        adminParams,          // Pass the user details as parameters
        'gbHgYxlABI8gRDoDt'   // public key
      )
      .then((response) => {
        console.log('Admin email sent successfully!', response.status, response.text);
      })
      .catch((err) => console.error('Failed to send admin email:', err));
  };

  return (
    <>
      <form className='contactform' onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Text Your Message"
          required
        />
        <Button type="submit" variant="success">Submit</Button>
      </form>
    </>
  );
};

export default ContactForm;