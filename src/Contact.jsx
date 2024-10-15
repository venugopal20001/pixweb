import React, { useState } from 'react';
import './Contact.css';  // Importing the CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    projectDetails: '',
    services: {
      website: false,
      digitalMarketing: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        services: {
          ...formData.services,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedServices = Object.entries(formData.services)
      .filter(([key, value]) => value)
      .map(([key]) => key)
      .join(', ');

    alert(`Thank you ${formData.name}, we will get back to you soon!\nSelected Services: ${selectedServices}`);
  };

  return (
    <div className='Container' id='Contact'>
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
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
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="businessName"
              placeholder="Your Business Name"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Checkbox for Service Type */}
          <div className="form-group service-checkbox">
            <label>Service Type:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="website"
                  checked={formData.services.website}
                  onChange={handleChange}
                />
                Website
              </label>
              <label>
                <input
                  type="checkbox"
                  name="digitalMarketing"
                  checked={formData.services.digitalMarketing}
                  onChange={handleChange}
                />
                Digital Marketing
              </label>
            </div>
          </div>

          <div className="form-group">
            <textarea
              name="projectDetails"
              placeholder="Tell us about your project"
              value={formData.projectDetails}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
