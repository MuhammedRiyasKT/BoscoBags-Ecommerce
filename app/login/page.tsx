"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";

export default function LoginPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login submission logic here
    console.log("Logging in with:", { email, password });
  };

  return (
    <>

      {/* Main Login Form Section */}
      <section className="login-section">
        <div className="login-form-container">
          
          <h1 className="login-title">Login</h1>

          <form onSubmit={handleLoginSubmit} className="login-form">
            
            <div className="login-input-group">
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-capsule-input"
                required 
              />
            </div>

            <div className="login-input-group">
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-capsule-input"
                required 
              />
            </div>

            <div className="login-forgot-password-wrap">
              <a href="#" className="login-forgot-link">Forgot your password?</a>
            </div>

            <div className="login-submit-wrap">
              <button type="submit" className="login-submit-btn">SIGN IN</button>
            </div>

            <div className="login-create-account-wrap">
              <a href="#" className="login-create-link">Create account</a>
            </div>

          </form>

        </div>
      </section>
    </>
  );
}