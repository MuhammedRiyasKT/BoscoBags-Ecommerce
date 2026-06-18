"use client";

import React from "react";

import {Eye} from "lucide-react";

export default function BlogDetailsPage() {

    interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  authorName: string;
  authorAvatar: string;
  views: number;
  image: string;
}

const BLOG_DATA: BlogPost[] = [
  {
    id: 1,
    title: "Travel Smart: The Ultimate Guide to Choosing th...",
    excerpt: "Make your travels smooth and stress-free with the perfect luggage and accessories! At OneGo Fashion, we offer a premium range of stylish and durable luggage bags, backpacks, and...",
    date: "Mar 04, 2025",
    authorName: "My Store Admin",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    views: 499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "How to Choose the Best School Backpack for Your...",
    excerpt: "Final Thoughts Choosing the right school backpack involves balancing comfort, durability, organization, and design. A well-selected backpack not only enhances convenience but also supports a child's posture and...",
    date: "Mar 04, 2025",
    authorName: "My Store Admin",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    views: 395,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "How Choosing the Right Backpack Can Prevent Pai...",
    excerpt: "Choosing the right backpack is more than just a style decision—it's essential for your health and comfort. A poorly selected backpack can lead to back pain, poor posture,...",
    date: "Mar 04, 2025",
    authorName: "My Store Admin",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    views: 322,
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=600&q=80"
  }
];
  return (
    <div>
    <article className="bd-wrapper">
      <div className="bd-container">
        
        {/* Blog Header: Title & Meta Info */}
        <header className="bd-header">
          <h1 className="bd-main-title">
            Travel Smart: The Ultimate Guide to Choosing the Perfect Luggage and Accessories
          </h1>
          <div className="bd-meta-row">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
              alt="My Store Admin" 
              className="bd-author-avatar" 
            />
            <div className="bd-meta-text">
              <span className="bd-author-name">My Store Admin</span>
              <span className="bd-date">March 4, 2025</span>
            </div>
          </div>
        </header>

        {/* Featured Image with Decorative Accent Frame */}
        <div className="bd-image-container">
          <div className="bd-image-accent-frame"></div>
          <div className="bd-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=80" 
              alt="Leather backpack and traveler walking" 
              className="bd-featured-image" 
            />
          </div>
        </div>

        {/* Article Body Content */}
        <div className="bd-content">
          <p className="bd-intro-bold">
            The Ultimate Guide to Choosing the Perfect Luggage and Accessories
          </p>
          <p>
            Traveling is an exciting experience, but having the right luggage and accessories can make your journey even more enjoyable and hassle-free. At OneGo Fashion, we offer a premium selection of luggage bags and travel accessories designed to suit all kinds of travelers. Whether you're a frequent flyer or an occasional explorer, selecting the perfect luggage is crucial. Here's everything you need to know before making your next purchase.
          </p>

          <h2 className="bd-section-heading">1. Types of Luggage Bags</h2>
          <p>Understanding the different types of luggage bags will help you make an informed decision:</p>
          <ul className="bd-list">
            <li>
              <strong>Hard-Shell Suitcases:</strong> Durable, lightweight, and resistant to rough handling. Ideal for international and long-haul travel.
            </li>
            <li>
              <strong>Soft-Shell Suitcases:</strong> Flexible, expandable, and easy to fit into tight spaces. Perfect for short trips and weekend getaways.
            </li>
            <li>
              <strong>Backpacks &amp; Duffel Bags:</strong> Versatile and easy to carry, suitable for adventure trips, road travel, or lightweight packing.
            </li>
            <li>
              <strong>Carry-On Luggage:</strong> Compact and airline-approved, ensuring you can avoid baggage fees and keep your essentials within reach.
            </li>
          </ul>

          <h2 className="bd-section-heading">2. Must-Have Travel Accessories</h2>
          <p>Apart from luggage, travel accessories can enhance your journey and provide extra convenience:</p>
          <ul className="bd-list">
            <li>
              <strong>Packing Cubes:</strong> Organize your clothes efficiently and maximize space.
            </li>
            <li>
              <strong>Travel Neck Pillows:</strong> Ensure comfort during long flights or road trips.
            </li>
            <li>
              <strong>Luggage Locks:</strong> Keep your belongings safe and secure.
            </li>
            <li>
              <strong>Toiletry Bags:</strong> Store your essentials in an organized manner.
            </li>
            <li>
              <strong>Electronic Organizers:</strong> Prevent tangled cables and misplaced chargers.
            </li>
            <li>
              <strong>Portable Luggage Scale:</strong> Avoid overweight baggage fees by checking the weight before heading to the airport.
            </li>
          </ul>

          <h2 className="bd-section-heading">3. Tips for Choosing the Right Luggage</h2>
          <p>When selecting luggage, consider these key factors:</p>
          <ul className="bd-list">
            <li>
              <strong>Size &amp; Weight:</strong> Ensure your bag meets airline size restrictions and is lightweight for easy handling.
            </li>
            <li>
              <strong>Material:</strong> Hard-shell cases provide better protection, while soft-shell bags offer flexibility.
            </li>
            <li>
              <strong>Wheels &amp; Handles:</strong> Opt for 360-degree spinner wheels for effortless maneuverability.
            </li>
            <li>
              <strong>Compartments &amp; Storage:</strong> Look for luggage with multiple compartments for organized packing.
            </li>
            <li>
              <strong>Security Features:</strong> Built-in TSA-approved locks enhance security while traveling.
            </li>
          </ul>

          <h2 className="bd-section-heading">4. Why Choose OneGo Fashion for Your Travel Needs?</h2>
          <p>
            At OneGo Fashion, we prioritize quality, style, and functionality in our luggage and travel accessories. Our products are designed to meet the highest standards, ensuring durability and convenience for every traveler. With a wide range of trendy and functional designs, we make traveling effortless and stylish.
          </p>

          <h2 className="bd-section-heading">Conclusion</h2>
          <p>
            Choosing the right luggage and accessories can greatly impact your travel experience. Whether you need a sturdy suitcase, a lightweight carry-on, or essential travel accessories, OneGo Fashion has got you covered. Explore our collection today and travel with confidence!
          </p>
          
          <p className="bd-cta-text">
            Shop now at <a href="https://OneGoFashion.com" target="_blank" rel="noopener noreferrer" className="bd-inline-link">OneGoFashion.com</a> and elevate your travel experience!
          </p>
        </div>

        {/* Footer Navigation Back Link */}
        <footer className="bd-footer">
          <a href="/blog" className="bd-back-btn">
            <svg 
              className="bd-back-arrow" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to blog
          </a>
        </footer>

      </div>
    </article>

     {/* Our Blog Section */}
<section className="blog-section">
  <div className="blog-container">

    {/* Header */}
    <div className="blog-header">
      <h2 className="blog-main-title">Blog Posts</h2>
    </div>

    {/* Blog Grid */}
    <div className="blog-grid">
      {BLOG_DATA.map((blog) => (
        <a href={`/blog/${blog.id}`} key={blog.id} className="blog-card">
          {/* Image wrap with rounded corners */}
          <div className="blog-img-wrap">
            <img src={blog.image} alt={blog.title} className="blog-img" />
          </div>

          {/* Meta Info: Author details & view count */}
          <div className="blog-meta">
            <div className="blog-author-info">
              <img src={blog.authorAvatar} alt={blog.authorName} className="blog-avatar" />
              <div className="blog-author-details">
                <span className="blog-author-name">{blog.authorName}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
            </div>
            <div className="blog-views">
              <Eye size={18} />
              <span>{blog.views}</span>
            </div>
          </div>

          {/* Content area */}
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-desc">{blog.excerpt}</p>

          {/* Read more link */}
          <span className="blog-readmore">
            Read more <span className="blog-readmore-arrow">▶</span>
          </span>
        </a>
      ))}
    </div>

    {/* View All Button at bottom */}
    <div className="blog-footer">
      <a href="/blog" className="blog-view-all-btn">
        View All
      </a>
    </div>

  </div>
</section>
</div>
    
  );
}