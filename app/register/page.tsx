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

export default function RegisterPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Form States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Creating account with:", { firstName, lastName, email, password });
  };

  return (
    <>

      {/* Create Account Form Section */}
      <section className="register-section">
        <div className="register-form-container">
          
          <h1 className="register-title">Create account</h1>

          <form onSubmit={handleRegisterSubmit} className="register-form">
            
            <div className="register-input-group">
              <input 
                type="text" 
                placeholder="First name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="register-capsule-input"
                required 
              />
            </div>

            <div className="register-input-group">
              <input 
                type="text" 
                placeholder="Last name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="register-capsule-input"
                required 
              />
            </div>

            <div className="register-input-group">
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="register-capsule-input"
                required 
              />
            </div>

            <div className="register-input-group">
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="register-capsule-input"
                required 
              />
            </div>

            <div className="register-submit-wrap">
              <button type="submit" className="register-submit-btn">CREATE</button>
            </div>

          </form>

        </div>
      </section>
    </>
  );
}