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
  Trash2,
  Tag,
  Plus,
  Minus,
} from "lucide-react";

export default function CartPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Dynamic Cart States
  const [quantity, setQuantity] = useState(2);
  const [cartEmpty, setCartEmpty] = useState(false);
  const [instructions, setInstructions] = useState("");

  const originalPricePerUnit = 499.0;
  const pricePerUnit = 449.1;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers for Quantity Change
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleRemoveItem = () => {
    setCartEmpty(true);
  };

  // Math calculations
  const totalOriginal = originalPricePerUnit * quantity;
  const totalDiscounted = pricePerUnit * quantity;

  return (
    <>

      {/* Cart Content Section */}
      <section className="cart-main-section">
        <div className="cart-main-container">
          
          {/* Header Row */}
          <div className="cart-header-row">
            <h1 className="cart-main-title">Your cart</h1>
            <a href="/categories" className="cart-continue-link">Continue shopping</a>
          </div>

          {cartEmpty ? (
            <div className="cart-empty-state">
              <ShoppingBag size={56} className="empty-cart-icon" />
              <p>Your cart is empty.</p>
              <a href="/categories" className="cart-shop-now-btn">Start Shopping</a>
            </div>
          ) : (
            <>
              {/* Table Column Titles */}
              <div className="cart-table-header">
                <span className="col-label-product">PRODUCT</span>
                <span className="col-label-qty">QUANTITY</span>
                <span className="col-label-total">TOTAL</span>
              </div>

              {/* Cart Item Row */}
              <div className="cart-item-row">
                
                {/* Product Detail Cell */}
                <div className="cart-product-cell">
                  <div className="cart-product-img-wrap">
                    <img 
                      src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=300&q=80" 
                      alt="ONEGO Waterproof Backpack" 
                      className="cart-product-img"
                    />
                  </div>
                  <div className="cart-product-details">
                    <h3 className="cart-product-name">
                      ONEGO Waterproof Casual Unisex Laptop Backpack for College Office Tuition...
                    </h3>
                    <div className="cart-product-prices">
                      <span className="price-original">₹{originalPricePerUnit.toFixed(2)}</span>
                      <span className="price-special">₹{pricePerUnit.toFixed(2)}</span>
                    </div>
                    <div className="cart-offer-tag">
                      <Tag size={14} className="tag-icon" />
                      <span>Buy 2 products &amp; get 10% Off</span>
                    </div>
                  </div>
                </div>

                {/* Quantity Controls Cell */}
                <div className="cart-qty-cell">
                  <div className="qty-picker-wrap">
                    <button className="qty-btn" onClick={decrementQuantity} aria-label="Decrease quantity">
                      <Minus size={16} />
                    </button>
                    <span className="qty-value">{quantity}</span>
                    <button className="qty-btn" onClick={incrementQuantity} aria-label="Increase quantity">
                      <Plus size={16} />
                    </button>
                  </div>
                  <button className="cart-delete-btn" onClick={handleRemoveItem} aria-label="Remove item">
                    <Trash2 size={20} />
                  </button>
                </div>

                {/* Subtotal Cell */}
                <div className="cart-total-cell">
                  <span className="total-original">₹{totalOriginal.toFixed(2)}</span>
                  <span className="total-special">₹{totalDiscounted.toFixed(2)}</span>
                </div>

              </div>

              {/* Bottom Section Layout */}
              <div className="cart-footer-block">
                
                {/* Special Instructions (Left) */}
                <div className="cart-instructions-side">
                  <label htmlFor="specialInstructions" className="instructions-label">
                    Order special instructions
                  </label>
                  <textarea 
                    id="specialInstructions" 
                    placeholder="" 
                    rows={5}
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    className="instructions-textarea"
                  ></textarea>
                </div>

                {/* Checkout pricing details (Right) */}
                <div className="cart-checkout-side">
                  <div className="estimated-total-row">
                    <span className="estimated-label">Estimated total</span>
                    <span className="estimated-value">₹{totalDiscounted.toFixed(2)}</span>
                  </div>
                  <p className="checkout-notice-text">
                    Taxes included. Discounts and <a href="#" className="shipping-underlined">shipping</a> calculated at checkout.
                  </p>
                  <button className="place-order-submit-btn">PLACE ORDER</button>
                </div>

              </div>
            </>
          )}

        </div>
      </section>
    </>
  );
}