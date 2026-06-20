"use client";

import React, { useState, useRef } from "react";

// Mock Product Gallery Data (Supporting Images & Video)
const GALLERY_ITEMS = [
  { type: "image", url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80" },
  { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=150&q=80" },
  { type: "image", url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80" },
  { type: "image", url: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80" },
  { type: "image", url: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80" },
  { type: "image", url: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=800&q=80" }
];

// Related Products
const RELATED_PRODUCTS = [
  { id: 101, name: "BOSCO Premium Pack", price: 599, original: 1699, discount: 65, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80", bg: "#fce8d5" },
  { id: 102, name: "BOSCO Waterproof Pack", price: 499, original: 1699, discount: 71, img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=400&q=80", bg: "#dcf5f5" },
  { id: 103, name: "Laptop Backpack Premium", price: 599, original: 1699, discount: 65, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=80", bg: "#f5eedc" },
  { id: 104, name: "BOSCO Laptop Daily Pack", price: 599, original: 1699, discount: 65, img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=400&q=80", bg: "#dce8f5" }
];

export default function ProductDetailsPage() {
  const [activeItem, setActiveItem] = useState(GALLERY_ITEMS[0]);
  const [quantity, setQuantity] = useState(1);
  const [fbt1, setFbt1] = useState(true);
  const [fbt2, setFbt2] = useState(true);

  // Accordions open/close status
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isReturnOpen, setIsReturnOpen] = useState(false);

  // Interactive Reviews state variables
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [formRating, setFormRating] = useState(5);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeSort, setActiveSort] = useState("Highest Rating");

  const SORT_OPTIONS = [
    "Most Recent",
    "Highest Rating",
    "Lowest Rating",
    "Only Pictures",
    "Pictures First",
    "Videos First",
    "Most Helpful"
  ];

  // Ref for vertical thumbnails column scrolling
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const handleThumbnailsScroll = (direction: "up" | "down") => {
    if (thumbnailsRef.current) {
      const scrollAmount = direction === "up" ? -120 : 120;
      thumbnailsRef.current.scrollBy({
        top: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // മെയിൻ ഇമേജ് നാവിഗേഷൻ കൺട്രോളർ (മൊബൈൽ ആരോകളിൽ ക്ലിക്ക് ചെയ്യുമ്പോൾ വർക്ക് ചെയ്യുന്നത്)
  const handleMainImageNav = (direction: "prev" | "next") => {
    const currentIndex = GALLERY_ITEMS.findIndex(item => item.url === activeItem.url);
    let nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    
    if (nextIndex >= GALLERY_ITEMS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = GALLERY_ITEMS.length - 1;
    
    setActiveItem(GALLERY_ITEMS[nextIndex]);
  };

  // FBT Calculations
  const itemPrice = 599;
  const fbtTotalOriginal = (fbt1 ? 1699 : 0) + (fbt2 ? 1699 : 0);
  const fbtTotalDiscounted = (fbt1 ? itemPrice : 0) + (fbt2 ? itemPrice : 0);

  return (
    <div className="pdp-wrapper">
      <div className="pdp-container">
        
        {/* മെയിൻ ഗ്രിഡ് ക്ലാസ്സ് */}
        <main className="pdp-main-layout-grid">
          
          {/* Left Column: Image Gallery Column */}
          <div className="pdp-gallery-col">
            
            {/* Vertical thumbnails row with Up & Down Arrow controls */}
            <div className="pdp-thumbnail-outer-wrap">
              <button 
                className="pdp-thumb-arrow-btn pdp-thumb-arrow-btn--up" 
                onClick={() => handleThumbnailsScroll("up")}
                aria-label="Scroll thumbnails up"
              >
                ▲
              </button>
              
              <div className="pdp-thumbnail-vertical-row" ref={thumbnailsRef}>
                {GALLERY_ITEMS.map((item, idx) => (
                  <button
                    key={idx}
                    className={`pdp-thumbnail-btn ${activeItem.url === item.url ? "active" : ""}`}
                    onClick={() => setActiveItem(item)}
                  >
                    <img 
                      src={item.type === "video" ? item.thumb : item.url} 
                      alt={`Product view thumbnail ${idx + 1}`} 
                    />
                    {item.type === "video" && (
                      <div className="pdp-video-indicator-overlay">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <button 
                className="pdp-thumb-arrow-btn pdp-thumb-arrow-btn--down" 
                onClick={() => handleThumbnailsScroll("down")}
                aria-label="Scroll thumbnails down"
              >
                ▼
              </button>
            </div>

            {/* Featured Main Display (Supports image or real video element) */}
            <div className="pdp-featured-image-box">
              {/* മൊബൈൽ വ്യൂവിലുള്ള മെയിൻ ഇമേജ് ആരോ ബട്ടണുകൾ */}
              <button className="pdp-main-nav-arrow pdp-main-nav-arrow--left" onClick={() => handleMainImageNav("prev")}>
                ‹
              </button>

              {activeItem.type === "video" ? (
                <video src={activeItem.url} controls className="pdp-main-video" autoPlay />
              ) : (
                <img src={activeItem.url} alt="BOSCO Laptop Backpack Featured View" className="pdp-main-image" />
              )}

              <button className="pdp-main-nav-arrow pdp-main-nav-arrow--right" onClick={() => handleMainImageNav("next")}>
                ›
              </button>

              <button className="pdp-wishlist-toggle-btn" aria-label="Add to wishlist">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </button>
            </div>

          </div>

          {/* Right Column: Purchasing Details & Nested Widgets (FBT, Accordions) */}
          <div className="pdp-purchase-col">
            <h1 className="pdp-product-title">
              BOSCO Laptop Backpack, Water-Resistant Business &amp; College Backpack for Men &amp; Women (Blue)
            </h1>

            {/* Ratings Summary Row */}
            <div className="pdp-rating-row">
              <div className="stars-wrapper">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx} className="star-gold">★</span>
                ))}
              </div>
              <span className="pdp-rating-text">1 review</span>
            </div>

            {/* Price Row */}
            <div className="pdp-price-row">
              <span className="pdp-current-price">₹599.00</span>
              <span className="pdp-price-divider">/</span>
              <span className="pdp-original-price">₹1,699.00</span>
              <span className="pdp-discount-badge">65% Off</span>
            </div>

            {/* Coupons & Offers Box */}
            <div className="pdp-coupons-box">
              <span className="pdp-coupons-title">Coupons &amp; Offers</span>
              <div className="coupon-item">
                <div className="coupon-left">
                  <span className="coupon-dot">●</span>
                  <span>Buy 1 Product &amp; get 5% Off</span>
                </div>
                <button className="coupon-code-btn">SAVE5</button>
              </div>
              <div className="coupon-item">
                <div className="coupon-left">
                  <span className="coupon-dot">●</span>
                  <span>Buy 2 Product &amp; get 10% Off</span>
                </div>
                <button className="coupon-code-btn">SAVE10</button>
              </div>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="pdp-cart-actions">
              <div className="pdp-qty-counter">
                <button className="qty-action-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="qty-value-label">{quantity}</span>
                <button className="qty-action-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="pdp-add-cart-btn">ADD TO CART</button>
            </div>

            {/* Buy It Now Action Button */}
            <button className="pdp-buy-now-btn">BUY IT NOW</button>

            {/* Delivery Logistics Estimator */}
            <div className="pdp-shipping-info">
              <div className="logistics-row">
                <span className="logistics-flag">🇮🇳</span>
                <span>Free shipping to <strong>India</strong></span>
              </div>
              <div className="logistics-row">
                <span className="logistics-clock">🕒</span>
                <span>Receive your order: <strong>Sun 21 - Thu 25</strong>.</span>
              </div>
            </div>

            {/* Frequently Bought Together */}
            <div className="pdp-fbt-nested-box">
              <h3 className="pdp-nested-title">Frequently Bought Together</h3>
              
              <div className="pdp-fbt-vertical-list">
                
                <div className="fbt-vertical-item">
                  <label className="fbt-checkbox-label">
                    <input type="checkbox" checked={fbt1} onChange={(e) => setFbt1(e.target.checked)} />
                    <span className="custom-fbt-check"></span>
                  </label>
                  <div className="fbt-p-preview">
                    <img src={GALLERY_ITEMS[0].url} alt="FBT Item 1 preview" className="fbt-preview-img" />
                    <div className="fbt-preview-info">
                      <p className="fbt-preview-name">BOSCO Laptop Backpack (Grey)</p>
                      <span className="fbt-preview-price">₹599.00 <del>₹1,699.00</del></span>
                    </div>
                  </div>
                </div>

                {/* പ്ലസ് ഡിവൈഡർ */}
                <div className="fbt-plus-divider">+</div>

                <div className="fbt-vertical-item">
                  <label className="fbt-checkbox-label">
                    <input type="checkbox" checked={fbt2} onChange={(e) => setFbt2(e.target.checked)} />
                    <span className="custom-fbt-check"></span>
                  </label>
                  <div className="fbt-p-preview">
                    <img src={GALLERY_ITEMS[2].url} alt="FBT Item 2 preview" className="fbt-preview-img" />
                    <div className="fbt-preview-info">
                      <p className="fbt-preview-name">BOSCO Business Backpack (Black)</p>
                      <span className="fbt-preview-price">₹599.00 <del>₹1,699.00</del></span>
                    </div>
                  </div>
                </div>

              </div>

              {/* FBT Price Summary and checkout button */}
              <div className="pdp-fbt-summary-box">
                <div className="fbt-summary-row">
                  <span className="fbt-summary-label">Total price:</span>
                  <span className="fbt-total-price">₹{fbtTotalDiscounted.toLocaleString()}.00</span>
                  {fbtTotalOriginal > 0 && (
                    <span className="fbt-total-original">/ ₹{fbtTotalOriginal.toLocaleString()}.00</span>
                  )}
                </div>
                <button className="fbt-submit-btn" disabled={!fbt1 && !fbt2}>
                  Add selected to cart
                </button>
              </div>
            </div>

            {/* Collapsible Product Specifications */}
            <div className="pdp-accordions-section">
              
              <div className="pdp-accordion-item">
                <h4 className="pdp-accordion-title">DESCRIPTION</h4>
                <div className="pdp-accordion-panel pdp-accordion-panel--open">
                  <p className="desc-body-p">
                    The BOSCO Laptop Backpack is perfect for both business professionals and college students. Its water-resistant design ensures that your belongings stay safe and dry during your daily commute or travels. With its sleek blue color, this backpack is both stylish and functional. Stay organized and prepared with the BOSCO Laptop Backpack.
                  </p>
                </div>
              </div>

              <div className="pdp-accordion-item">
                <button className="pdp-accordion-trigger" onClick={() => setIsShippingOpen(!isShippingOpen)}>
                  <span>SHIPPING AND DELIVERY</span>
                  <span className={`pdp-acc-icon ${isShippingOpen ? "rotated" : ""}`}>+</span>
                </button>
                <div className={`pdp-accordion-panel ${isShippingOpen ? "open" : ""}`}>
                  <p className="desc-body-p">
                    We offer free standard shipping on all orders to India. Orders are typically processed and shipped within 1-2 business days. Estimated delivery time ranges between 3 to 5 business days.
                  </p>
                </div>
              </div>

              <div className="pdp-accordion-item">
                <button className="pdp-accordion-trigger" onClick={() => setIsReturnOpen(!isReturnOpen)}>
                  <span>RETURN &amp; EXCHANGE</span>
                  <span className={`pdp-acc-icon ${isReturnOpen ? "rotated" : ""}`}>+</span>
                </button>
                <div className={`pdp-accordion-panel ${isReturnOpen ? "open" : ""}`}>
                  <p className="desc-body-p">
                    We accept returns and exchanges within 14 days of purchase. Items must be returned in their original packaging, unused, and with all tags attached.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </main>

        {/* ── Customer Reviews Section (Bottom Full Width) ── */}
        <section className="pdp-reviews-section">
          <h3 className="pdp-reviews-heading">Customer Reviews</h3>
          
          <div className="pdp-reviews-summary-dashboard">
            <div className="review-dashboard-stars-col">
              <div className="summary-average-rating">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx} className="dashboard-star">★</span>
                ))}
              </div>
              <span className="summary-text-score">5.00 out of 5</span>
              <span className="summary-total-reviews">Based on 1 review</span>
            </div>

            <div className="review-dashboard-distribution-col">
              <div className="star-dist-row">
                <span className="star-dist-label">5 star</span>
                <div className="star-dist-bar-bg"><div className="star-dist-bar-fill" style={{width: "100%"}}></div></div>
                <span className="star-dist-count">1</span>
              </div>
              <div className="star-dist-row">
                <span className="star-dist-label">4 star</span>
                <div className="star-dist-bar-bg"><div className="star-dist-bar-fill" style={{width: "0%"}}></div></div>
                <span className="star-dist-count">0</span>
              </div>
              <div className="star-dist-row">
                <span className="star-dist-label">3 star</span>
                <div className="star-dist-bar-bg"><div className="star-dist-bar-fill" style={{width: "0%"}}></div></div>
                <span className="star-dist-count">0</span>
              </div>
              <div className="star-dist-row">
                <span className="star-dist-label">2 star</span>
                <div className="star-dist-bar-bg"><div className="star-dist-bar-fill" style={{width: "0%"}}></div></div>
                <span className="star-dist-count">0</span>
              </div>
              <div className="star-dist-row">
                <span className="star-dist-label">1 star</span>
                <div className="star-dist-bar-bg"><div className="star-dist-bar-fill" style={{width: "0%"}}></div></div>
                <span className="star-dist-count">0</span>
              </div>
            </div>

            <div className="review-dashboard-actions-col">
              <button 
                className="write-review-toggle-btn"
                onClick={() => setIsReviewFormOpen(!isReviewFormOpen)}
              >
                Write a review
              </button>
            </div>
          </div>

          {/* Interactive Form Drawer */}
          {isReviewFormOpen && (
            <div className="pdp-review-form-drawer">
              <h4 className="review-drawer-title">Write a review</h4>
              <form className="pdp-review-actual-form" onSubmit={(e) => { e.preventDefault(); setIsReviewFormOpen(false); }}>
                <div className="form-stars-group">
                  <span className="form-stars-label">Rating</span>
                  <div className="form-stars-input">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        type="button"
                        key={starVal}
                        className={`star-select-btn ${formRating >= starVal ? "active" : ""}`}
                        onClick={() => setFormRating(starVal)}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group-block">
                  <label>Review Title (100)</label>
                  <input type="text" placeholder="Give your review a title" required />
                </div>

                <div className="form-group-block">
                  <label>Review</label>
                  <textarea placeholder="Write your comments here" rows={5} required></textarea>
                </div>

                <div className="form-group-block">
                  <label>Picture/Video (optional)</label>
                  <div className="form-file-upload-box">
                    <svg className="upload-svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                  </div>
                </div>

                <div className="form-group-block">
                  <label>Name (displayed publicly)</label>
                  <input type="text" placeholder="Enter your name (public)" required />
                </div>

                <div className="form-group-block">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email (private)" required />
                </div>

                <div className="form-actions-buttons-row">
                  <button type="button" className="form-btn-cancel" onClick={() => setIsReviewFormOpen(false)}>Cancel review</button>
                  <button type="submit" className="form-btn-submit">Submit Review</button>
                </div>
              </form>
            </div>
          )}

          {/* Custom sorting filter dropdown row */}
          <div className="reviews-list-filter-row">
            <div className="reviews-custom-dropdown-container">
              <button className="reviews-custom-dropdown-btn" onClick={() => setIsSortOpen(!isSortOpen)}>
                <span>{activeSort}</span>
                <svg className={`chevron-svg ${isSortOpen ? "rotated" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>

              {isSortOpen && (
                <div className="reviews-custom-dropdown-menu">
                  {SORT_OPTIONS.map((option, idx) => (
                    <button
                      key={idx}
                      className={`dropdown-option ${activeSort === option ? "active" : ""}`}
                      onClick={() => {
                        setActiveSort(option);
                        setIsSortOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Customer Reviews Listings */}
          <div className="pdp-reviews-listings">
            <div className="single-review-card">
              <div className="review-card-stars">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx} className="listing-star">★</span>
                ))}
              </div>
              <div className="review-card-meta">
                <span className="reviewer-name">Rohan Mehta</span>
                <span className="reviewer-date">04/18/2025</span>
              </div>
              <h4 className="review-card-title">Office Pro! 💼 💻</h4>
              <p className="review-card-body">
                Sturdy, sleek, fits my laptop + charger. Great for daily commute! ★★★★★
              </p>
              <div className="review-tag-badge">Review collected from a store visitor</div>
            </div>
          </div>

        </section>

        {/* You may also like recommendations carousel */}
        <section className="pdp-related-section">
          <h3 className="pdp-related-heading">You may also like</h3>
          <div className="pdp-related-grid">
            {RELATED_PRODUCTS.map((prod) => (
              <div key={prod.id} className="pdp-related-card">
                <div className="r-badge">{prod.discount}% Off</div>
                <div className="r-img-wrap" style={{backgroundColor: prod.bg}}>
                  <img src={prod.img} alt={prod.name} className="r-img" />
                </div>
                <div className="r-footer">
                  <div className="r-info">
                    <p className="r-name">{prod.name}</p>
                    <div className="r-pricing">
                      <span className="r-price">₹{prod.price}.00</span>
                      <span className="r-slash">/</span>
                      <span className="r-original">₹{prod.original}.00</span>
                    </div>
                  </div>
                  <button className="r-cart-btn" aria-label="Add to cart">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Features/Benefits Bar */}
        <footer className="pdp-features-bar">
          <div className="features-bar-inner">
            <div className="features-bar-item">
              <div className="features-bar-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <div className="features-bar-text">
                <h4>Safe Payment</h4>
                <p>We ensure secure payment with PEV</p>
              </div>
            </div>
            <div className="features-bar-item">
              <div className="features-bar-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <div className="features-bar-text">
                <h4>Fast Delivery</h4>
                <p>Free shipping on all orders</p>
              </div>
            </div>
            <div className="features-bar-item">
              <div className="features-bar-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="features-bar-text">
                <h4>24/7 Online Support</h4>
                <p>24 hours a day, 7 days a week</p>
              </div>
            </div>
            <div className="features-bar-item">
              <div className="features-bar-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
              </div>
              <div className="features-bar-text">
                <h4>Easy Returns</h4>
                <p>Simply return it within 2 days</p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}