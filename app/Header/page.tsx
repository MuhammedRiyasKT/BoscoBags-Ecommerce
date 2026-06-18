"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function HeaderPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Example cart items count
  const [wishlistCount, setWishlistCount] = useState(1); // Example wishlist count
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar with outer horizontal padding */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span>TODAY DEAL SALE OFF 70% ENDS IN. HURRY UP</span>
          <ArrowRight className="arrow-icon" size={16} />
        </div>
      </div>

      {/* Navigation Header */}
      <header className={`main-header ${isScrolled ? "scrolled" : ""}`} id="mainHeader">
        <div className="header-container">
          
          {/* Mobile Left Group: Menu & Search */}
          <div className="header-mobile-left">
            <button 
              className="mobile-toggle-btn" 
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
            <button 
              className="action-btn mobile-search-btn" 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={22} />
            </button>
          </div>

          {/* Center Brand Logo */}
          <a href="/" className="brand-logo">
            <Image
              src="/assets/logo.png"
              alt="BOSCO Logo"
              width={220}
              height={80}
              priority
            />
          </a>

          {/* Desktop Navigation Link Menu */}
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item"><a href="/categories" className="nav-link">Shop by Category</a></li>
              <li className="nav-item"><a href="/deals" className="nav-link">Deal of the Day</a></li>
              <li className="nav-item"><a href="/trending" className="nav-link">Top Trending</a></li>
              <li className="nav-item"><a href="/selling" className="nav-link">Best Seller</a></li>
              <li className="nav-item"><a href="/newarrival" className="nav-link">New Arrival</a></li>
              <li className="nav-item"><a href="/corporate" className="nav-link">Corporate</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
              <li className="nav-item"><a href="/track" className="nav-link">Track</a></li>
            </ul>
          </nav>

          {/* Desktop & Mobile Utility Actions */}
          <div className="action-utils">
            {/* Desktop Search Button */}
            <button className="action-btn desktop-search-btn" onClick={() => setIsSearchOpen(true)} aria-label="Search">
              <Search size={22} />
            </button>
            
            {/* Wishlist Button */}
            <a href="/wishlist" className="action-btn wishlist-icon" aria-label="Wishlist">
              <Heart size={22} />
              <span className="badge">{wishlistCount}</span>
            </a>
            
            {/* Cart Button */}
            <a href="/cart" className="action-btn cart-icon" aria-label="Cart">
              <ShoppingBag size={22} />
              <span className="badge">{cartCount}</span>
            </a>
            
            {/* User Account Button (Hidden on Mobile) */}
            <a href="/login" className="action-btn user-icon desktop-user-btn" aria-label="Account">
              <User size={22} />
            </a>
          </div>

        </div>
      </header>

      {/* Fullscreen Search Panel Overlay */}
      <div className={`search-panel ${isSearchOpen ? "active" : ""}`}>
        <div className="search-container">
          <button 
            className="close-search" 
            onClick={() => setIsSearchOpen(false)}
            aria-label="Close search"
          >
            <X size={36} />
          </button>
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Search products..." 
              className="search-input"
              autoFocus={isSearchOpen}
            />
            <button type="submit" className="search-btn" aria-label="Submit search">
              <Search size={24} />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Navigation Drawer Menu */}
      <div className={`mobile-drawer ${isDrawerOpen ? "active" : ""}`}>
        <div className="drawer-header">
          <span className="drawer-title">Menu</span>
          <button 
            className="close-drawer" 
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mobile-drawer-nav">
          <ul className="mobile-nav-list">
            <li><a href="/categories" onClick={() => setIsDrawerOpen(false)} className="mobile-nav-link">Shop by Category</a></li>
            <li><a href="/deals" onClick={() => setIsDrawerOpen(false)} className="mobile-nav-link">Deal of the Day</a></li>
            <li><a href="/trending" onClick={() => setIsDrawerOpen(false)} className="mobile-nav-link">Top Trending</a></li>
            <li><a href="/selling" onClick={() => setIsDrawerOpen(false)} className="mobile-nav-link">Best Seller</a></li>
            <li><a href="/newarrival" onClick={() => setIsDrawerOpen(false)} className="mobile-nav-link">New Arrival</a></li>
            <li><a href="/corporate" onClick={() => setIsDrawerOpen(false)} className="mobile-nav-link">Corporate</a></li>
            <li><a href="/contact" onClick={() => setIsDrawerOpen(false)} className="mobile-nav-link">Contact Us</a></li>
            <li><a href="/track" onClick={() => setIsDrawerOpen(false)} className="mobile-nav-link">Track</a></li>
            <li><a href="/login" onClick={() => setIsDrawerOpen(false)} className="mobile-nav-link">My Account</a></li>
          </ul>
        </nav>
      </div>

      {/* Dark Backdrop Overlay when Drawer is Open */}
      <div 
        className={`drawer-overlay ${isDrawerOpen ? "active" : ""}`} 
        onClick={() => setIsDrawerOpen(false)}
      ></div>
    </>
  );
}