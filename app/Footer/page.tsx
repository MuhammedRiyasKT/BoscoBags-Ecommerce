"use client";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";
import { useState } from "react";

export default function FooterPage() {
const [floatingAlerts, setFloatingAlerts] = useState<{ id: number; text: string }[]>([]);

  return (
    <>
      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <a href="/" className="footer-logo">
              <Image src="/assets/logo.svg" alt="BOSCO Logo" width={150} height={48} className="footer-logo-img" />
            </a>
            <ul className="contact-details">
              <li><Clock className="contact-icon" size={18} /><span>9:30 AM - 10:30 PM</span></li>
              <li><Mail className="contact-icon" size={18} /><a href="mailto:info@boscobags.com">info@boscobags.com</a></li>
              <li><Phone className="contact-icon" size={18} /><a href="tel:+919700869525">+91 9700869525</a></li>
              <li><MapPin className="contact-icon" size={18} /><span>BOSCO Manufacturing Unit,<br />Industrial Area Phase-2,<br />Kochi, Kerala 682030</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="col-title">Information</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Track Your Order</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="col-title">Useful links</h4>
            <ul className="footer-links">
              <li><a href="#">Refund &amp; Return Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Shipping policy</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-col newsletter-col">
            <h4 className="col-title">Newsletter Signup</h4>
            <p className="newsletter-desc">Subscribe to our newsletter and get 10% off your first purchase</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email *" className="newsletter-input" required />
              <button type="submit" className="btn btn-secondary newsletter-submit">SUBSCRIBE</button>
            </form>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="social-icon" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p className="copyright-text">All Rights Reserved &copy; 2026, BOSCO FASHION</p>
            <div className="bottom-links">
              <a href="#">Privacy policy</a>
              <span className="dot-separator">&bull;</span>
              <a href="#">Terms of service</a>
            </div>
          </div>
        </div>
      </footer>

       {/* Floating Success Alerts (React-driven notifications) */}
      {floatingAlerts.map((alert) => (
        <div key={alert.id} className="floating-success-alert" style={{
          position: "fixed",
          bottom: "100px",
          right: "40px",
          backgroundColor: "var(--primary-navy)",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "var(--border-radius-md)",
          boxShadow: "var(--shadow-lg)",
          zIndex: 999
        }}>
          {alert.text}
        </div>
      ))}

      {/* Floating WhatsApp Integration Button */}
      <a href="https://wa.me/919700869525" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.63 2.013 14.192 1.01 11.95 1.01c-5.442 0-9.866 4.372-9.87 9.802 0 1.714.475 3.387 1.376 4.842l-.994 3.63 3.738-.98h.004-.002zm12.39-7.834c-.337-.168-1.99-.982-2.298-1.096-.308-.114-.533-.169-.757.17-.224.337-.87 1.096-1.066 1.32-.197.225-.393.247-.73.08-1.564-.78-2.613-1.3-3.663-3.1-.277-.476.277-.442.793-1.472.086-.17.042-.317-.021-.443-.064-.127-.533-1.285-.73-1.761-.192-.463-.387-.4-.533-.408-.137-.007-.294-.009-.451-.009-.157 0-.414.059-.63.296-.217.237-.827.809-.827 1.97 0 1.161.843 2.286.96 2.443.117.157 1.659 2.535 4.02 3.553.562.242 1.002.387 1.344.496.565.178 1.08.153 1.487.093.454-.067 1.99-.813 2.271-1.599.282-.786.282-1.46.197-1.599-.086-.14-.308-.225-.645-.392z" />
        </svg>
      </a>
    </>
  );
}