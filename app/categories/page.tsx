"use client";

import { useState, useEffect, useRef } from "react";
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
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  RotateCcw
} from "lucide-react";

// Shop by Category Data
const SBC_CATEGORIES = [
  {
    label: "Laptop Bag",
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Messenger Bag",
    img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Back Packs",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Travel Duffel",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Corporate Bag",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Sling Bag",
    img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=500&q=80",
  },
];

export default function CategoriesPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [floatingAlerts, setFloatingAlerts] = useState<{ id: number; text: string }[]>([]);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);
  const featuresScrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

   // Smooth scroll handler for mobile/tablet slider
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scrolls exactly by the width of one card element
      const cardWidth = container.querySelector(".features-bar-item")?.clientWidth || 300;
      const scrollAmount = cardWidth + 16; // Card width + gap

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleReviewScroll = (direction: "left" | "right") => {
    if (reviewsScrollRef.current) {
      const cardWidth =
        reviewsScrollRef.current.querySelector(".reviews-card")?.clientWidth || 380;

      const scrollAmount =
        direction === "left" ? -(cardWidth + 36) : cardWidth + 36;

      reviewsScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleFeatureScroll = (direction: "left" | "right") => {
    if (featuresScrollRef.current) {
      const cardWidth =
        featuresScrollRef.current.querySelector(".features-card")?.clientWidth || 320;

      const scrollAmount =
        direction === "left" ? -(cardWidth + 24) : cardWidth + 24;

      featuresScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger floating alert
  const triggerAlert = (text: string) => {
    const id = Date.now();
    setFloatingAlerts((prev) => [...prev, { id, text }]);
    setTimeout(() => {
      setFloatingAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, 2000);
  };

  // Add item to cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setCartCount((prev) => prev + 1);
    triggerAlert("Bag added to Cart!");
  };

  interface Review {
    id: number;
    text: string;
    authorName: string;
    authorRole: string;
    avatar: string;
  }

  const REVIEWS_DATA: Review[] = [
    {
      id: 1,
      text: "Great quality at an affordable price! The luggage is spacious, easy to carry, and has a strong build. I recently traveled with it, and it handled rough use really well. Very satisfied!",
      authorName: "Rohit Nair",
      authorRole: "Travel Blogger",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      text: "Bosco Fashion offers the perfect blend of style and durability. The luggage I bought is spacious, lightweight, and easy to maneuver. It's been a great travel companion on my trips. Absolutely worth the price!",
      authorName: "Amit Sharma",
      authorRole: "IT Professional",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  interface FeatureItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }

  const FEATURES_DATA: FeatureItem[] = [
    {
      id: 1,
      title: "Safe Payment",
      description: "We ensure secure payment with PEV",
      icon: <ShieldCheck size={42} strokeWidth={1.5} />
    },
    {
      id: 2,
      title: "Fast Delivery",
      description: "Free shipping on all orders",
      icon: <Truck size={42} strokeWidth={1.5} />
    },
    {
      id: 3,
      title: "24/7 Online Support",
      description: "24 hours a day, 7 days a week",
      icon: <Clock size={42} strokeWidth={1.5} />
    },
    {
      id: 4,
      title: "Easy Returns",
      description: "Simply return it within 2 days",
      icon: <RotateCcw size={42} strokeWidth={1.5} />
    }
  ];

  return (
    <>

      {/* Hero Banner: Bosco Collection */}
      <section className="category-hero">
        <div className="category-hero-content">
          <h1 className="category-hero-title">
            Bosco <span className="category-hero-highlight">Collection</span>
          </h1>
          <p className="category-hero-subtitle">
            EXPLORE OUR BAGS, MADE TO HIGHLIGHT YOUR UNIQUE PROFILE.
          </p>
        </div>
        <div className="category-hero-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1542226601-bc82e276ae0a?auto=format&fit=crop&w=1200&q=80"
            alt="Bosco Collection Models"
            className="category-hero-img"
          />
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="category-page-section">
        <div className="category-page-container">
          <div className="category-page-grid">
            {SBC_CATEGORIES.map((cat, idx) => (
              <a href="#" key={idx} className="category-page-card">
                <div className="category-page-img-wrap">
                  <img src={cat.img} alt={cat.label} className="category-page-img" />
                </div>
                <div className="category-page-info">
                  <h3 className="category-page-name">{cat.label}</h3>
                  <div className="category-page-arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* End Of Sale Banner Section */}
       <section className="eos-banner-section">
      <div className="eos-banner-container">
        {/* Absolute positioning wrapper to lock the button beneath "ACKS" */}
        <div className="eos-offer">
          <a href="/" className="eos-offer-btn">SHOP NOW</a>
        </div>
      </div>
    </section>

      {/* Features Bar Section */}
       <section className="features-bar">
      <div className="features-bar-slider-wrap">

        {/* Left Arrow Button */}
        <button
          className="features-bar-nav-btn features-bar-nav-btn--left"
          aria-label="Previous feature"
          onClick={() => handleScroll("left")}
        >
          <svg className="features-bar-nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div className="features-bar-container" ref={scrollContainerRef}>

          {/* Card 1: Free Shipping */}
          <div className="features-bar-item">
            <div className="features-bar-icon">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="14" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M32 18H40L44 23V32H32V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="36" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 36H32" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 36H8" stroke="currentColor" strokeWidth="2"/>
                <rect x="8" y="19" width="16" height="8" rx="1" fill="currentColor" fillOpacity="0.15"/>
                <text x="10" y="25" fill="currentColor" fontSize="6" fontWeight="bold" fontFamily="sans-serif">FREE</text>
              </svg>
            </div>
            <div className="features-bar-text">
              <h4>Free Shipping</h4>
              <p>Free shipping on all orders</p>
            </div>
          </div>

          <div className="features-bar-divider"></div>

          {/* Card 2: Safe Payment */}
          <div className="features-bar-item">
            <div className="features-bar-icon">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="14" width="34" height="22" rx="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 20H38" stroke="currentColor" strokeWidth="2"/>
                <rect x="8" y="26" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                {/* Fixed internal fill to match card background (#f8fafd) */}
                <path d="M33 24C33 24 37 25.5 41 24V30C41 35 37 38 37 38C37 38 33 35 33 30V24Z" fill="#f8fafd" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M35.5 31L37 32.5L39 29.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="features-bar-text">
              <h4>Safe Payment</h4>
              <p>Free shipping on all orders</p>
            </div>
          </div>

          <div className="features-bar-divider"></div>

          {/* Card 3: 24/7 Support */}
          <div className="features-bar-item">
            <div className="features-bar-icon">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="22" r="16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                <path d="M24 12V22L30 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="22" r="1.5" fill="currentColor"/>
                {/* Fixed internal fill to match card background (#f8fafd) */}
                <rect x="14" y="32" width="20" height="9" rx="2" fill="#f8fafd" stroke="currentColor" strokeWidth="2"/>
                <text x="16.5" y="38.5" fill="currentColor" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">24/7</text>
              </svg>
            </div>
            <div className="features-bar-text">
              <h4>24/7 Online Support</h4>
              <p>Free shipping on all orders</p>
            </div>
          </div>

          <div className="features-bar-divider"></div>

          {/* Card 4: Free Returns */}
          <div className="features-bar-item">
            <div className="features-bar-icon">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 14H34V38H6V14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M15 14V19H25V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Fixed internal fill to match card background (#f8fafd) */}
                <circle cx="34" cy="32" r="8" fill="#f8fafd" stroke="currentColor" strokeWidth="2"/>
                <path d="M34 28A4 4 0 1 1 30.5 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M32 28.5H34.2V30.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="features-bar-text">
              <h4>Free Returns</h4>
              <p>Free shipping on all orders</p>
            </div>
          </div>

        </div>

        {/* Right Arrow Button */}
        <button
          className="features-bar-nav-btn features-bar-nav-btn--right"
          aria-label="Next feature"
          onClick={() => handleScroll("right")}
        >
          <svg className="features-bar-nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

      </div>
    </section>


      {/* Carry Style Section */}

      <section className="carry-style-section">
        <div className="carry-style-container">
          {/* Left Side: Image */}
          <div className="carry-style-card">
            <div className="carry-style-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80"
                alt="Carry Style And Functionality"
                className="carry-style-image"
              />
            </div>
          </div>

          {/* Right Side: Peach Info Panel with Diagonal Slant */}
          <div className="carry-style-info-panel">
            <div className="carry-style-info-content">
              <h2 className="carry-style-title">
                Carry Style And Functionality With Our Premium Bags
              </h2>
              <a href="#" className="carry-style-btn" onClick={handleAddToCart}>
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Products from Top Categories */}
      <section className="top-categories-section">
        <div className="top-categories-container">
          <h2 className="top-categories-title">Shop Products from Top Categories</h2>

          <div className="top-categories-grid">

            {/* Card 1 */}
            <div className="top-cat-card">
              <div className="top-cat-badge">Sold out</div>
              <div className="top-cat-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
                  alt="60L Camping Tactical Large Rucksack"
                  className="top-cat-img top-cat-img--primary"
                />
                <img
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80"
                  alt="60L Camping Tactical Large Rucksack detail view"
                  className="top-cat-img top-cat-img--hover"
                />
              </div>
              <div className="top-cat-info">
                <div className="top-cat-details">
                  <p className="top-cat-name">60L Camping Tactical Large Ruc...</p>
                  <div className="top-cat-pricing">
                    <span className="top-cat-price">₹999.00</span>
                    <span className="top-cat-slash">/</span>
                    <span className="top-cat-original">₹1,050.00</span>
                  </div>
                </div>
                <button
                  className="top-cat-cart-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddToCart(e);
                  }}
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

            {/* Card 2 */}
            <div className="top-cat-card">
              <div className="top-cat-badge">Sold out</div>
              <div className="top-cat-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80"
                  alt="Attractive Light Weight & Waterproof Duffel"
                  className="top-cat-img top-cat-img--primary"
                />
                <img
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80"
                  alt="Attractive Light Weight & Waterproof Duffel alternate view"
                  className="top-cat-img top-cat-img--hover"
                />
              </div>
              <div className="top-cat-info">
                <div className="top-cat-details">
                  <p className="top-cat-name">Attractive Light Weight &amp; Water...</p>
                  <div className="top-cat-pricing">
                    <span className="top-cat-price">₹599.00</span>
                    <span className="top-cat-slash">/</span>
                    <span className="top-cat-original">₹650.00</span>
                  </div>
                </div>
                <button
                  className="top-cat-cart-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddToCart(e);
                  }}
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

            {/* Card 3 */}
            <div className="top-cat-card">
              <div className="top-cat-badge">Sold out</div>
              <div className="top-cat-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80"
                  alt="Attractive Light Weight & Waterproof Bag"
                  className="top-cat-img top-cat-img--primary"
                />
                <img
                  src="https://images.unsplash.com/photo-1605733513597-a8f8d410cf3c?auto=format&fit=crop&w=500&q=80"
                  alt="Attractive Light Weight & Waterproof Bag alternate view"
                  className="top-cat-img top-cat-img--hover"
                />
              </div>
              <div className="top-cat-info">
                <div className="top-cat-details">
                  <p className="top-cat-name">Attractive Light Weight &amp; Water...</p>
                  <div className="top-cat-pricing">
                    <span className="top-cat-price">₹499.00</span>
                    <span className="top-cat-slash">/</span>
                    <span className="top-cat-original">₹550.00</span>
                  </div>
                </div>
                <button
                  className="top-cat-cart-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddToCart(e);
                  }}
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

          <div className="top-categories-cta">
            <a href="#" className="top-categories-view-all">VIEW ALL</a>
          </div>
        </div>
      </section>

      {/* Cinematic Banner Section */}
      <section className="cine-banner">
        <div className="cine-banner-accent cine-banner-accent--left"></div>
        <div className="cine-banner-accent cine-banner-accent--right"></div>
        <img
          src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1600&q=80"
          alt="Carry Style And Functionality"
          className="cine-banner-img"
        />
        <div className="cine-banner-overlay"></div>
        <div className="cine-banner-content">
          <h2 className="cine-banner-title">
            Carry Style And Functionality<br />
            With Our <span className="cine-banner-highlight">Premium Bags</span>
          </h2>
          <a href="#" className="cine-banner-btn" onClick={handleAddToCart}>
            SHOP NOW
          </a>
        </div>
      </section>

     {/* Our Client Reviews Section */}
           <section className="reviews-section">
             <div className="reviews-container">
     
               {/* Header */}
               <div className="reviews-header">
                 <h2 className="reviews-main-title">Our Client Reviews</h2>
               </div>
     
               {/* Slider & Navigation Wrapper */}
               <div className="reviews-slider-wrap">
     
                 {/* Left Arrow Button */}
                 <button
                   className="reviews-nav-btn reviews-nav-btn--left"
                   aria-label="Previous review"
                   onClick={() => handleReviewScroll("left")}
                 >
                   <ChevronLeft size={24} strokeWidth={1.5} />
                 </button>
     
                 {/* Grid Layout (Container with scrollRef) */}
                 <div className="reviews-grid" ref={reviewsScrollRef}>
                   {REVIEWS_DATA.map((review) => (
                     <div key={review.id} className="reviews-card">
     
                       {/* SVG Double Quotes */}
                       <svg className="reviews-quote-icon" viewBox="0 0 36 28">
                         <path d="M9.6 28C4.3 28 0 23.7 0 18.4C0 10.6 5.2 2.3 11.5 0L13.8 3.7C9.9 5.8 7.2 10.2 7.2 14.2C7.2 14.8 7.4 15.1 7.9 15.1C8.4 15.1 9.1 14.9 9.8 14.9C13.2 14.9 16 17.7 16 21.4C16 25 13.2 28 9.6 28ZM29.6 28C24.3 28 20 23.7 20 18.4C20 10.6 25.2 2.3 31.5 0L33.8 3.7C29.9 5.8 27.2 10.2 27.2 14.2C27.2 14.8 27.4 15.1 27.9 15.1C28.4 15.1 29.1 14.9 29.8 14.9C33.2 14.9 36 17.7 36 21.4C36 25 33.2 28 29.6 28Z" />
                       </svg>
     
                       {/* Review Text */}
                       <p className="reviews-text">{review.text}</p>
     
                       {/* Author Info */}
                       <div className="reviews-author">
                         <img src={review.avatar} alt={review.authorName} className="reviews-avatar" />
                         <div className="reviews-author-details">
                           <span className="reviews-author-name">{review.authorName}</span>
                           <span className="reviews-author-role">{review.authorRole}</span>
                         </div>
                       </div>
     
                     </div>
                   ))}
                 </div>
     
                 {/* Right Arrow Button */}
                 <button
                   className="reviews-nav-btn reviews-nav-btn--right"
                   aria-label="Next review"
                   onClick={() => handleReviewScroll("right")}
                 >
                   <ChevronRight size={24} strokeWidth={1.5} />
                 </button>
     
               </div>
     
             </div>
           </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">

          {/* Slider & Navigation Wrapper */}
          <div className="features-slider-wrap">

            {/* Left Arrow Button (Visible only on mobile) */}
            <button
              className="features-nav-btn features-nav-btn--left"
              aria-label="Previous feature"
              onClick={() => handleFeatureScroll("left")}
            >
              <svg className="features-nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Features Grid */}
            <div className="features-grid" ref={featuresScrollRef}>
              {FEATURES_DATA.map((feature) => (
                <div key={feature.id} className="features-card">

                  {/* Icon Container with Blob Background */}
                  <div className="features-icon-wrap">
                    <div className="features-icon-blob"></div>
                    <div className="features-icon">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="features-title">{feature.title}</h3>
                  <p className="features-desc">{feature.description}</p>

                </div>
              ))}
            </div>

            {/* Right Arrow Button (Visible only on mobile) */}
            <button
              className="features-nav-btn features-nav-btn--right"
              aria-label="Next feature"
              onClick={() => handleFeatureScroll("right")}
            >
              <svg className="features-nav-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

          </div>

        </div>
      </section>

    </>
  );
}