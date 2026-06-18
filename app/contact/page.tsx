"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Clock, MapPin, ShoppingBag } from "lucide-react";

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: ""
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page-wrapper">

      {/* Cinematic Hero Banner */}
      <section className="trending-hero">
        <img
          src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1600&q=80"
          alt="Contact Us"
          className="trending-hero-img"
        />
        <div className="trending-hero-overlay"></div>
        <div className="trending-hero-content">
          <h1 className="trending-hero-title">Contact Us</h1>
          <p className="trending-hero-subtitle">Premium Co-Branded Solutions &amp; Customized Travel Accessories.</p>
        </div>
      </section>

      {/* Main Split Screen Contact Layout */}
      <section className="contact-split-section">
        <div className="contact-split-container">
          
          {/* Left Column: Image Area */}
          <div className="contact-image-column">
            <img 
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80" 
              alt="Vintage Leather Backpack on Metal Chair" 
              className="contact-lifestyle-img"
            />
          </div>

          {/* Right Column: Contact Content & Info Card Grid */}
          <div className="contact-content-column">
            
            {/* Contact Form Container */}
            <div className="contact-form-wrap">
              <h2 className="contact-form-title">Send a Message</h2>
              <p className="contact-form-subtitle">
                If you have a question that isn&apos;t answered here then please get in touch with our customer service team.
              </p>

              <form onSubmit={handleSubmit} className="contact-actual-form">
                
                <div className="form-group-full">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact-line-input" 
                    required 
                  />
                </div>

                <div className="form-group-split">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email *" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact-line-input" 
                    required 
                  />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="contact-line-input" 
                  />
                </div>

                <div className="form-group-full">
                  <textarea 
                    name="comment" 
                    placeholder="Comment" 
                    rows={4}
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="contact-line-input contact-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">SEND MESSAGE</button>
              </form>
            </div>

            {/* Contact Info Cards Area */}
            <div className="contact-info-wrap">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-subtitle">
                We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be appreciated. Please complete the form below.
              </p>

              {/* Upper row: 3 Cards */}
              <div className="info-cards-row">
                
                <div className="info-small-card">
                  <div className="info-card-icon-part">
                    <Mail size={22} />
                  </div>
                  <div className="info-card-divider"></div>
                  <div className="info-card-text-part">
                    <span className="info-label">Email</span>
                    <a href="mailto:onegobags@gmail.com" className="info-value">onegobags@gmail.com</a>
                  </div>
                </div>

                <div className="info-small-card">
                  <div className="info-card-icon-part">
                    <Phone size={22} />
                  </div>
                  <div className="info-card-divider"></div>
                  <div className="info-card-text-part">
                    <span className="info-label">Call us</span>
                    <a href="tel:+919700869525" className="info-value">+919700869525</a>
                  </div>
                </div>

                <div className="info-small-card">
                  <div className="info-card-icon-part">
                    <Clock size={22} />
                  </div>
                  <div className="info-card-divider"></div>
                  <div className="info-card-text-part">
                    <span className="info-label">Time</span>
                    <span className="info-value">Everyday 9:00-17:00</span>
                  </div>
                </div>

              </div>

              {/* Lower row: Wide Location Card */}
              <div className="info-wide-card">
                <div className="info-card-icon-part">
                  <MapPin size={22} />
                </div>
                <div className="info-card-divider"></div>
                <div className="info-card-text-part">
                  <span className="info-label">Location</span>
                  <span className="info-value-wide">
                    12-2-36/29/11, Zeba Bagh Rd, Asif Nagar, Hyderabad, 500028, Telangana, India
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}