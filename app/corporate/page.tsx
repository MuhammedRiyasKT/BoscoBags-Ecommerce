"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, CheckCircle2, ShoppingBag } from "lucide-react";

export default function CorporatePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="corporate-page-wrapper">

      {/* Cinematic Hero Banner */}
      <section className="trending-hero">
        <img
          src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1600&q=80"
          alt="Corporate Gifting Bags"
          className="trending-hero-img"
        />
        <div className="trending-hero-overlay"></div>
        <div className="trending-hero-content">
          <h1 className="trending-hero-title">Corporate Gifting</h1>
          <p className="trending-hero-subtitle">Premium Co-Branded Solutions &amp; Customized Travel Accessories.</p>
        </div>
      </section>

      {/* Corporate Gifting Info Section */}
      <section className="corporate-gifting-section">
        <div className="corporate-container">
          
          {/* Main Titles */}
          <div className="corporate-intro">
            <h2 className="corporate-main-heading">Corporate Gifting – Customized Luggage &amp; Travel Accessories</h2>
            <p className="corporate-lead-text">
              Enhance your brand visibility with high-quality, co-branded luggage and travel accessories from <strong>BOSCO</strong>.
            </p>
            <p className="corporate-lead-text">
              We specialize in <strong>customized corporate gifting solutions</strong>, offering premium <strong>backpacks, travel bags, and accessories</strong> tailored to your company's needs.
            </p>
          </div>

          {/* Benefits Block (Converted into a modern card grid) */}
          <div className="corporate-block">
            <h3 className="corporate-sub-heading">Why Choose BOSCO for Corporate Gifting?</h3>
            <div className="corporate-benefits-grid">
              
              <div className="benefit-card">
                <div className="benefit-header">
                  <CheckCircle2 className="benefit-icon" size={24} />
                  <h4>Co-Branded Bags</h4>
                </div>
                <p className="benefit-text">
                  Personalize <strong>BOSCO</strong> bags with your company <strong>Logo</strong> alongside our trusted brand name.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-header">
                  <CheckCircle2 className="benefit-icon" size={24} />
                  <h4>Premium Quality</h4>
                </div>
                <p className="benefit-text">
                  We ensure that every bag is crafted using top-grade materials, maintaining the same high standard as the sample provided.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-header">
                  <CheckCircle2 className="benefit-icon" size={24} />
                  <h4>Timely Delivery</h4>
                </div>
                <p className="benefit-text">
                  Unlike unreliable suppliers, we control our production process, ensuring <strong>on-time delivery</strong> without compromising on quality.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-header">
                  <CheckCircle2 className="benefit-icon" size={24} />
                  <h4>Trusted by Leaders</h4>
                </div>
                <p className="benefit-text">
                  We proudly supply to India's top corporate houses for <strong>employee kits, sales teams, festive gifting (Diwali, New Year), and trade schemes.</strong>
                </p>
              </div>

            </div>
          </div>

          {/* Offerings and Why BOSCO Grid */}
          <div className="corporate-grid">
            
            <div className="corporate-grid-col">
              <h3 className="corporate-sub-heading">Our Offerings</h3>
              <ul className="corporate-bullets">
                <li>
                  <strong>Customized Backpacks &amp; Travel Bags</strong> – Perfect for employees, promotional campaigns, and corporate gifting.
                </li>
                <li>
                  <strong>Conference &amp; Seminar Bags</strong> – Professional, high-quality bags for corporate events, seminars, and workshops.
                </li>
                <li>
                  <strong>Exclusive Branding Solutions</strong> – Ensure your brand stands out with premium embroidery or printing on our stylish and durable bags.
                </li>
              </ul>
            </div>

            <div className="corporate-grid-col">
              <h3 className="corporate-sub-heading">Why BOSCO?</h3>
              <p className="corporate-body-text">
                Many suppliers in the market compromise on material quality and fail to meet delivery commitments. At <strong>BOSCO</strong>, we take full responsibility for quality and timely delivery.
              </p>
              <p className="corporate-body-text">
                Your brand's reputation is as important to us as our own, which is why we guarantee <strong>exceptional craftsmanship and on-time execution</strong>.
              </p>
            </div>

          </div>

          {/* Order details & Contact Box (Premium Card Styling) */}
          <div className="corporate-contact-box">
            <h3 className="corporate-contact-heading">Order Details &amp; Contact</h3>
            
            <div className="contact-info-grid">
              
              <div className="contact-details-col">
                <ul className="details-bullets">
                  <li>
                    <span className="bullet-diamond">♦</span>
                    <div>
                      <strong>Minimum Order Quantity (MOQ):</strong>
                      <p>100 pieces with company logo branding.</p>
                    </div>
                  </li>
                  <li>
                    <span className="bullet-diamond">♦</span>
                    <div>
                      <strong>Prototype Sample (Optional):</strong>
                      <p>₹10,000 + 18% GST (Fully adjustable against bulk order).</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="contact-direct-col">
                <p className="contact-instruction">📬 For corporate inquiries &amp; bulk orders, contact us at:</p>
                <div className="contact-links-wrap">
                  <a href="mailto:boscofashion@gmail.com" className="contact-item-link">
                    <Mail size={18} className="contact-item-icon" />
                    <span>Email: <strong>boscofashion@gmail.com</strong></span>
                  </a>
                  <a href="tel:+919700869525" className="contact-item-link">
                    <Phone size={18} className="contact-item-icon" />
                    <span>Call/WhatsApp: <strong>+91 9700869525</strong></span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Featured Clients Logo Section */}
          <div className="featured-clients-wrap">
            <h3 className="featured-clients-title">Our Featured Clients</h3>
            <div className="clients-logo-bar">
              <div className="client-logo">Microsoft</div>
              <div className="client-logo">HONDA</div>
              <div className="client-logo">amazon</div>
              <div className="client-logo logo-colorful">wipro</div>
              <div className="client-logo">IQVIA</div>
              <div className="client-logo logo-colorful">HM CLAUSE</div>
              <div className="client-logo">Atos</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}