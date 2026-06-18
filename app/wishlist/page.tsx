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
  X,
} from "lucide-react";

// Mock Wishlist Items matching the image
const INITIAL_WISHLIST = [
  {
    id: 1,
    name: "Minimalist Korean Backpack for ...",
    price: 899,
    originalPrice: 1499,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    badge: "Sold out",
    badgeType: "dark",
  },
  {
    id: 2,
    name: "ONEGO Formal Briefcase & Mess...",
    price: 599,
    originalPrice: 1699,
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    badge: "Sale",
    badgeType: "orange",
  },
  {
    id: 3,
    name: "ONEGO College Backpack, Wat...",
    price: 399,
    originalPrice: 1699,
    img: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=600&q=80",
    badge: "Sale",
    badgeType: "orange",
  },
];

export default function WishlistPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistItems, setWishlistItems] = useState(INITIAL_WISHLIST);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Remove item from wishlist
  const handleRemoveItem = (id: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>

      {/* Wishlist Main Section */}
      <section className="wishlist-section">
        <div className="wishlist-container">
          
          <h1 className="wishlist-main-title">Wishlist</h1>

          {wishlistItems.length === 0 ? (
            <div className="wishlist-empty-state">
              <Heart size={48} className="empty-heart-icon" />
              <p>Your wishlist is currently empty.</p>
              <a href="/categories" className="wishlist-shop-btn">Continue Shopping</a>
            </div>
          ) : (
            <div className="wishlist-grid">
              {wishlistItems.map((product) => (
                <div key={product.id} className="wishlist-card">
                  
                  {/* Remove Button (X) */}
                  <button 
                    className="wishlist-remove-btn" 
                    onClick={() => handleRemoveItem(product.id)}
                    aria-label="Remove item"
                  >
                    <X size={18} />
                  </button>

                  {/* Discount / Sold Out Badge */}
                  <div className={`wishlist-card-badge ${product.badgeType}`}>
                    {product.badge}
                  </div>

                  {/* Product Image Wrapper */}
                  <div className="wishlist-card-img-wrap">
                    <img src={product.img} alt={product.name} className="wishlist-card-img" />
                  </div>

                  {/* Product Info Panel */}
                  <div className="wishlist-card-info">
                    <h3 className="wishlist-card-name">{product.name}</h3>

                    <div className="wishlist-card-bottom">
                      <div className="wishlist-card-pricing">
                        <span className="wishlist-card-price">₹{product.price.toLocaleString()}.00</span>
                        <span className="wishlist-card-slash">/</span>
                        <span className="wishlist-card-original">₹{product.originalPrice.toLocaleString()}.00</span>
                      </div>
                      <button
                        className="wishlist-card-cart-btn"
                        onClick={() => setCartCount(cartCount + 1)}
                        aria-label="Add to cart"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z" />
                          <path d="M3 6h18" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                          <path d="M12 15v4M10 17h4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}