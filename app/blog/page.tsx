"use client";

import React from "react";

// Mock dataset exactly matching the posts shown in your reference image
const BLOG_POSTS = [
  {
    id: 1,
    title: "Travel Smart: The Ultimate Guide to Choosing th...",
    excerpt: "Make your travels smooth and stress-free with the perfect luggage and accessories! At Bosco Fashion, we offer a premium range of stylish and durable luggage bags, backpacks, and...",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80",
    authorName: "My Store Admin",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    date: "Mar 04, 2025",
    views: 449
  },
  {
    id: 2,
    title: "How to Choose the Best School Backpack for Your...",
    excerpt: "Final Thoughts Choosing the right school backpack involves balancing comfort, durability, organization, and design. A well-selected backpack not only enhances convenience but also supports a child's posture and...",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    authorName: "My Store Admin",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    date: "Mar 04, 2025",
    views: 236
  },
  {
    id: 3,
    title: "How Choosing the Right Backpack Can Prevent Pai...",
    excerpt: "Choosing the right backpack is more than just a style decision—it's essential for your health and comfort. A poorly selected backpack can lead to back pain, poor posture,...",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=80",
    authorName: "My Store Admin",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    date: "Mar 04, 2025",
    views: 297
  },
  {
    id: 4,
    title: "How to Pick the Perfect College Backpack: A Stu...",
    excerpt: "Finding the perfect college backpack is essential for comfort, organization, and durability. This guide covers everything you need to know—from size, laptop compartments, and ergonomic design to material...",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    authorName: "My Store Admin",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    date: "Mar 04, 2025",
    views: 269
  }
];

export default function BlogPage() {
  return (
    <div className="blog-page-wrapper">
      
      {/* Hero Banner Section */}
      <section className="blog-hero">
        <img
          src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1600&q=80"
          alt="Our Latest Blog"
          className="blog-hero-img"
        />
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">
            Latest <span className="blog-hero-highlight">News</span>
          </h1>
          <p className="blog-hero-subtitle">
            EXPLORE OUR BAGS, MADE TO HIGHLIGHT YOUR UNIQUE PROFILE.
          </p>
        </div>
      </section>

      {/* Main Blog Post Section */}
      <section className="blog-main-section">
        <div className="blog-main-container">
          
          {/* Section Heading */}
          <div className="blog-section-header">
            <h2 className="blog-section-title">News</h2>
          </div>

          {/* Blog Post Grid */}
          <div className="blog-page-grid">
            {BLOG_POSTS.map((post) => (
              <a href={`/blog/${post.id}`} key={post.id} className="blog-page-card">
                
                {/* Post Featured Image */}
                <div className="blog-page-card-img-wrap">
                  <img src={post.image} alt={post.title} className="blog-page-card-img" />
                </div>

                {/* Meta Information Container */}
                <div className="blog-page-card-meta">
                  <div className="blog-page-card-author">
                    <img 
                      src={post.authorAvatar} 
                      alt={post.authorName} 
                      className="blog-page-card-avatar" 
                    />
                    <div className="blog-page-card-author-details">
                      <span className="blog-page-card-author-name">{post.authorName}</span>
                      <span className="blog-page-card-date">{post.date}</span>
                    </div>
                  </div>

                  {/* View Count Badge */}
                  <div className="blog-page-card-views">
                    {/* SVG Eye Icon */}
                    <svg 
                      className="blog-page-card-views-icon" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>{post.views}</span>
                  </div>
                </div>

                {/* Typography and Descriptions */}
                <h3 className="blog-page-card-title">{post.title}</h3>
                <p className="blog-page-card-excerpt">{post.excerpt}</p>

                {/* Read More Call-To-Action */}
                <span className="blog-page-card-readmore">
                  Read more{" "}
                  <svg 
                    className="blog-page-card-readmore-arrow" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <polygon points="8,5 18,12 8,19" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}