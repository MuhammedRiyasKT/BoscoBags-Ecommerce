"use client";

import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

// Deal Products Data
const DEAL_PRODUCTS = [
  {
    id: 1,
    name: "60L Camping Tactical Large Rucksack",
    price: 999,
    originalPrice: 1050,
    discount: 5,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    badge: "Best Deal",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Attractive Light Weight Waterproof Duffel",
    price: 599,
    originalPrice: 650,
    discount: 8,
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    badge: "Hot",
    rating: 4.3,
    reviews: 95,
  },
  {
    id: 3,
    name: "Premium Leather Messenger Bag",
    price: 1299,
    originalPrice: 1550,
    discount: 16,
    img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=600&q=80",
    badge: "Sale",
    rating: 4.7,
    reviews: 212,
  },
  {
    id: 4,
    name: "Stylish Corporate Laptop Bag",
    price: 799,
    originalPrice: 950,
    discount: 16,
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
    badge: "Top Pick",
    rating: 4.6,
    reviews: 176,
  },
  {
    id: 5,
    name: "Compact Sling Bag for Travel",
    price: 349,
    originalPrice: 450,
    discount: 22,
    img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=600&q=80",
    badge: "New",
    rating: 4.2,
    reviews: 67,
  },
  {
    id: 6,
    name: "Waterproof Sports Travel Duffel",
    price: 699,
    originalPrice: 850,
    discount: 18,
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    badge: "Limited",
    rating: 4.4,
    reviews: 143,
  },
];

export default function DealsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [floatingAlerts, setFloatingAlerts] = useState<{ id: number; text: string }[]>([]);
  const [wishlistedIds, setWishlistedIds] = useState<number[]>([]);

  // Countdown timer — ends at midnight
  const getTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 999);
    const diff = midnight.getTime() - now.getTime();
    return {
      hours: Math.max(0, Math.floor(diff / (1000 * 60 * 60))),
      minutes: Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: Math.max(0, Math.floor((diff % (1000 * 60)) / 1000)),
    };
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerAlert = (text: string) => {
    const id = Date.now();
    setFloatingAlerts((prev) => [...prev, { id, text }]);
    setTimeout(() => {
      setFloatingAlerts((prev) => prev.filter((a) => a.id !== id));
    }, 2500);
  };

  const handleAddToCart = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    setCartCount((prev) => prev + 1);
    triggerAlert(`"${name.substring(0, 25)}..." added to cart!`);
  };

  const handleWishlist = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setWishlistedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // States for filter values
  const [availability, setAvailability] = useState({ inStock: true, outOfStock: false });
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  // States for sorting options
  const [activeSort, setActiveSort] = useState("Best selling");

  // Sort Options
  const SORT_OPTIONS = [
    "Most Relevant",
    "Best selling",
    "Alphabetically A-Z",
    "Alphabetically Z-A",
    "Price low to high",
    "Price high to low",
    "Date old to new",
    "Date new to old"
  ];

  return (
    <div className="deals-page-wrapper">

      {/* Hero Banner */}
      <section className="deals-hero">
        <img
          src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1600&q=80"
          alt="Deals Of The Day"
          className="deals-hero-img"
        />
        <div className="deals-hero-overlay"></div>
        <div className="deals-hero-content">
          <h1 className="deals-hero-title">Deals Of The Day</h1>
          <p className="deals-hero-subtitle">EXPLORE OUR BAGS, MADE TO HIGHLIGHT YOUR UNIQUE PROFILE.</p>
        </div>
      </section>

      {/* Countdown Timer Strip */}
      <div className="deals-timer-strip">
        <div className="deals-timer-inner">
          <span className="deals-timer-label">⚡ Today&apos;s Deals End In:</span>
          <div className="deals-timer-blocks">
            <div className="deals-timer-block">
              <span className="deals-timer-num">{pad(timeLeft.hours)}</span>
              <span className="deals-timer-unit">HRS</span>
            </div>
            <span className="deals-timer-sep">:</span>
            <div className="deals-timer-block">
              <span className="deals-timer-num">{pad(timeLeft.minutes)}</span>
              <span className="deals-timer-unit">MIN</span>
            </div>
            <span className="deals-timer-sep">:</span>
            <div className="deals-timer-block">
              <span className="deals-timer-num">{pad(timeLeft.seconds)}</span>
              <span className="deals-timer-unit">SEC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Deals of the Day Grid Section */}
      <section className="deals-products-section">
        <div className="deals-products-container">
          
          {/* Backdrop for closing dropdowns when clicking outside */}
          {isSortOpen && (
            <div 
              className="deals-dropdown-backdrop" 
              onClick={() => setIsSortOpen(false)} 
            />
          )}

          {/* Header with Title and Filter/Sort Controls */}
          <div className="deals-header-row">
            <h2 className="deals-products-title">
              <span className="title-highlight">11 Deals of the Day</span> Collection
            </h2>
            
            <div className="deals-filter-controls">
              
              {/* Desktop-Only: Filter Sidebar Toggle Button */}
              <button 
                className={`filter-dropdown-btn desktop-only-btn ${isSidebarOpen ? "active" : ""}`}
                onClick={() => setIsSidebarOpen(true)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
                Filter
              </button>

              {/* Desktop-Only: Sort Dropdown Button (Featured) */}
              <div className="deals-dropdown-wrapper desktop-only-btn">
                <button 
                  className={`filter-dropdown-btn ${isSortOpen ? "active" : ""}`}
                  onClick={() => setIsSortOpen(!isSortOpen)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                  {activeSort}
                  <svg className="chevron-down" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>

                {/* Sort Dropdown Menu */}
                {isSortOpen && (
                  <div className="deals-sort-menu">
                    {SORT_OPTIONS.map((option, index) => (
                      <button
                        key={index}
                        className={`sort-option-btn ${activeSort === option ? "active" : ""}`}
                        onClick={() => {
                          setActiveSort(option);
                          setIsSortOpen(false);
                        }}
                      >
                        {option}
                        {activeSort === option && (
                          <svg className="sort-active-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile-Only: Unified Combined Filter & Sort Button */}
              <button 
                className="unified-mobile-filter-btn"
                onClick={() => setIsSidebarOpen(true)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
                Filter &amp; Sort
              </button>

            </div>
          </div>

          {/* Products Grid */}
          <div className="deals-products-grid">
            {DEAL_PRODUCTS.map((product) => (
              <div key={product.id} className="deals-card">
                {/* Discount Badge */}
                <div className="deals-card-discount">{product.discount}% Off</div>

                {/* Product Image */}
                <div className="deals-card-img-wrap">
                  <img src={product.img} alt={product.name} className="deals-card-img" />
                </div>

                {/* Product Info Panel */}
                <div className="deals-card-info">
                  <h3 className="deals-card-name">{product.name}</h3>

                  <div className="deals-card-bottom">
                    <div className="deals-card-pricing">
                      <span className="deals-card-price">₹{product.price.toLocaleString()}.00</span>
                      <span className="deals-card-slash">/</span>
                      <span className="deals-card-original">₹{product.originalPrice.toLocaleString()}.00</span>
                    </div>
                    <button
                      className="deals-card-cart-btn"
                      onClick={(e) => handleAddToCart(e, product.name)}
                      aria-label="Add to cart"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

        </div>

        {/* Responsive Slide-Out Sidebar Drawer */}
        <div className={`deals-sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="deals-sidebar-header">
            <h3>Filter &amp; Sort</h3>
            <button className="deals-sidebar-close" onClick={() => setIsSidebarOpen(false)} aria-label="Close sidebar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="deals-sidebar-body">
            
            {/* Mobile-Only Section: Integrated Sorting Options */}
            <div className="sidebar-group mobile-only-group">
              <h4 className="sidebar-group-title">Sort By</h4>
              <div className="sidebar-sort-options">
                {SORT_OPTIONS.map((option, index) => (
                  <label key={index} className="sidebar-radio-label">
                    <input 
                      type="radio" 
                      name="mobileSort" 
                      checked={activeSort === option}
                      onChange={() => setActiveSort(option)}
                    />
                    <span className="radio-custom-label">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability Filter Block */}
            <div className="sidebar-group">
              <h4 className="sidebar-group-title">Availability</h4>
              <label className="sidebar-checkbox-label">
                <input 
                  type="checkbox" 
                  checked={availability.inStock} 
                  onChange={(e) => setAvailability({ ...availability, inStock: e.target.checked })}
                />
                <span>In Stock</span>
              </label>
              <label className="sidebar-checkbox-label">
                <input 
                  type="checkbox" 
                  checked={availability.outOfStock} 
                  onChange={(e) => setAvailability({ ...availability, outOfStock: e.target.checked })}
                />
                <span>Out of Stock</span>
              </label>
            </div>

            {/* Price Filter Block */}
            <div className="sidebar-group">
              <h4 className="sidebar-group-title">Price Range (₹)</h4>
              <div className="sidebar-price-inputs">
                <input 
                  type="number" 
                  placeholder="From" 
                  value={priceFrom} 
                  onChange={(e) => setPriceFrom(e.target.value)}
                  className="sidebar-price-field"
                />
                <span className="price-range-to">to</span>
                <input 
                  type="number" 
                  placeholder="To" 
                  value={priceTo} 
                  onChange={(e) => setPriceTo(e.target.value)}
                  className="sidebar-price-field"
                />
              </div>
            </div>

          </div>

          {/* Sidebar Bottom Action Buttons */}
          <div className="deals-sidebar-footer">
            <button 
              className="sidebar-clear-btn" 
              onClick={() => {
                setAvailability({ inStock: true, outOfStock: false });
                setPriceFrom("");
                setPriceTo("");
                setActiveSort("Best selling");
              }}
            >
              Clear All
            </button>
            <button 
              className="sidebar-apply-btn" 
              onClick={() => setIsSidebarOpen(false)}
            >
              Apply
            </button>
          </div>
        </div>

        {/* Sidebar Dark Backdrop */}
        {isSidebarOpen && (
          <div className="deals-sidebar-backdrop" onClick={() => setIsSidebarOpen(false)} />
        )}
      </section>

      {/* Floating Alerts */}
      <div className="floating-alerts-wrap">
        {floatingAlerts.map((alert) => (
          <div key={alert.id} className="floating-alert">
            <ShoppingBag size={16} />
            <span>{alert.text}</span>
          </div>
        ))}
      </div>
    </div >
  );
}