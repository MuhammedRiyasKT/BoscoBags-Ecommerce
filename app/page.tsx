"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Truck,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  Clock,
  MapPin,
  X,
  Menu,
  Eye,
  RotateCcw
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Slide Data
const SLIDES = [
  {
    id: 1,
    subtitle: "BOSCO ORIGINAL COLLECTION",
    title: "SPECIAL SALE",
    highlight: "THIS WEEK",
    desc: "Experience unmatched durability and ergonomic designs. Made directly at our manufacturing facilities with top-tier water-resistant material.",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    discount: "50%",
    subtext: "GRAB IT FAST!",
    splitClass: "hero-split-bg",
    badgeLabel: "DISCOUNT"
  },
  {
    id: 2,
    subtitle: "BOSCO EXECUTIVE SERIES",
    title: "ELEGANT OFFICE",
    highlight: "COMPANIONS",
    desc: "Premium laptop shoulder bags and professional sleeves, customized with multi-compartments for your dynamic work life.",
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    discount: "40%",
    subtext: "LIMITED STOCK!",
    splitClass: "hero-split-bg secondary-split",
    badgeLabel: "OFFER"
  },
  {
    id: 3,
    subtitle: "BOSCO ADVENTURER SERIES",
    title: "WEEKEND &",
    highlight: "TRAVEL DUFFELS",
    desc: "High capacity, wear-resistant duffel bags perfect for your gym and weekend getaways. Engineered for structural integrity and comfort.",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    discount: "30%",
    subtext: "BUY NOW!",
    splitClass: "hero-split-bg tertiary-split",
    badgeLabel: "SPECIAL"
  }
];

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
    label: "Backpacks",
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

// Tried & Trusted — Product Data
const TT_TABS = [
  { id: "bestsellers", label: "BEST SELLERS", icon: "👍" },
  { id: "newarrival", label: "NEW ARRIVAL", icon: "✨" },
  { id: "trending", label: "TOP TRENDING", icon: "🔥" },
];

export interface Product {
  id: number;
  name: string;
  price: number;
  original: number;
  discount: number;
  img: string;
  hoverImg: string;
  bg: string;
}

const TT_PRODUCTS: Record<string, Product[]> = {
  bestsellers: [
    {
      id: 1,
      name: "BOSCO Laptop Backpack",
      price: 599,
      original: 1699,
      discount: 65,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80",
      bg: "#dce8f5"
    },
    {
      id: 2,
      name: "BOSCO Executive Laptop Bag",
      price: 599,
      original: 1699,
      discount: 65,
      img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=500&q=80",
      bg: "#f5f0dc"
    },
    {
      id: 3,
      name: "BOSCO Versatile Backpack",
      price: 399,
      original: 1699,
      discount: 77,
      img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=500&q=80",
      bg: "#f0f0f0"
    },
    {
      id: 4,
      name: "BOSCO Waterproof Bag",
      price: 599,
      original: 1699,
      discount: 65,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=500&q=80",
      bg: "#dcf5e8"
    },
    {
      id: 13,
      name: "BOSCO Classic Pack",
      price: 499,
      original: 1499,
      discount: 66,
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1605733513597-a8f8d410cf3c?auto=format&fit=crop&w=500&q=80",
      bg: "#f5eedc"
    },
    {
      id: 14,
      name: "BOSCO Urban Backpack",
      price: 649,
      original: 1799,
      discount: 64,
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
      bg: "#eef5dc"
    },
    {
      id: 15,
      name: "BOSCO City Sleek",
      price: 399,
      original: 1199,
      discount: 67,
      img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=500&q=80",
      bg: "#f5dcdc"
    },
    {
      id: 16,
      name: "BOSCO Daily Pack",
      price: 749,
      original: 1999,
      discount: 63,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80",
      bg: "#dce8f5"
    },
  ],
  newarrival: [
    {
      id: 5,
      name: "BOSCO Sling Bag",
      price: 449,
      original: 1299,
      discount: 65,
      img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=500&q=80",
      bg: "#f5dcf0"
    },
    {
      id: 6,
      name: "BOSCO Travel Duffel",
      price: 799,
      original: 1999,
      discount: 60,
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
      bg: "#dcf5f5"
    },
    {
      id: 7,
      name: "BOSCO Corporate Bag",
      price: 699,
      original: 1899,
      discount: 63,
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1605733513597-a8f8d410cf3c?auto=format&fit=crop&w=500&q=80",
      bg: "#f5f5dc"
    },
    {
      id: 8,
      name: "BOSCO Messenger Bag",
      price: 499,
      original: 1499,
      discount: 67,
      img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=500&q=80",
      bg: "#dce8f5"
    },
    {
      id: 17,
      name: "BOSCO Trekking Pack",
      price: 899,
      original: 2499,
      discount: 64,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80",
      bg: "#dce8f5"
    },
    {
      id: 18,
      name: "BOSCO Handbag Premium",
      price: 599,
      original: 1599,
      discount: 62,
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1605733513597-a8f8d410cf3c?auto=format&fit=crop&w=500&q=80",
      bg: "#f5eedc"
    },
    {
      id: 19,
      name: "BOSCO Mini Sling",
      price: 349,
      original: 999,
      discount: 65,
      img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=500&q=80",
      bg: "#eef5dc"
    },
    {
      id: 20,
      name: "BOSCO Daypack Pro",
      price: 699,
      original: 1899,
      discount: 63,
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
      bg: "#dcf5f5"
    },
  ],
  trending: [
    {
      id: 9,
      name: "BOSCO Street Backpack",
      price: 549,
      original: 1599,
      discount: 66,
      img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=500&q=80",
      bg: "#f5eedc"
    },
    {
      id: 10,
      name: "BOSCO Gym Duffel",
      price: 649,
      original: 1799,
      discount: 64,
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
      bg: "#eef5dc"
    },
    {
      id: 11,
      name: "BOSCO Premium Sling",
      price: 399,
      original: 1199,
      discount: 67,
      img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=500&q=80",
      bg: "#f5dcdc"
    },
    {
      id: 12,
      name: "BOSCO Office Pack",
      price: 749,
      original: 1999,
      discount: 63,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80",
      bg: "#dce8f5"
    },
    {
      id: 21,
      name: "BOSCO Urban Duffel",
      price: 799,
      original: 1999,
      discount: 60,
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
      bg: "#dcf5f5"
    },
    {
      id: 22,
      name: "BOSCO Utility Pack",
      price: 599,
      original: 1599,
      discount: 62,
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1605733513597-a8f8d410cf3c?auto=format&fit=crop&w=500&q=80",
      bg: "#f5f5dc"
    },
    {
      id: 23,
      name: "BOSCO Scout Sling",
      price: 349,
      original: 999,
      discount: 65,
      img: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=500&q=80",
      bg: "#eef5dc"
    },
    {
      id: 24,
      name: "BOSCO Commuter Backpack",
      price: 699,
      original: 1899,
      discount: 63,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
      hoverImg: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=500&q=80",
      bg: "#dce8f5"
    },
  ],
};

// New Arrivals Data
const NA_PRODUCTS = [
  {
    id: 31,
    name: "BOSCO Laptop Backpack",
    price: 599,
    original: 1699,
    discount: 65,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    hoverImg: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80",
    bg: "#dce8f5"
  },
  {
    id: 32,
    name: "BOSCO Versatile & Sleek",
    price: 399,
    original: 1699,
    discount: 77,
    img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=500&q=80",
    hoverImg: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=500&q=80",
    bg: "#f3eedc"
  },
  {
    id: 33,
    name: "BOSCO Formal Briefcase",
    price: 599,
    original: 1699,
    discount: 65,
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
    hoverImg: "https://images.unsplash.com/photo-1605733513597-a8f8d410cf3c?auto=format&fit=crop&w=500&q=80",
    bg: "#dcf5f5"
  },
  {
    id: 34,
    name: "BOSCO Waterproof Pack",
    price: 499,
    original: 1699,
    discount: 71,
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=500&q=80",
    hoverImg: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=500&q=80",
    bg: "#fbe9e7"
  }
];

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
    excerpt: "Make your travels smooth and stress-free with the perfect luggage and accessories! At Bosco Fashion, we offer a premium range of stylish and durable luggage bags, backpacks, and...",
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

export default function HomePage() {
  // States
  const reviewsScrollRef = useRef<HTMLDivElement>(null);
  const featuresScrollRef = useRef<HTMLDivElement>(null);
  const blogScrollRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ttTab, setTtTab] = useState<"bestsellers" | "newarrival" | "trending">("bestsellers");
  const [cartCount, setCartCount] = useState(1);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [floatingAlerts, setFloatingAlerts] = useState<{ id: number; text: string }[]>([]);


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

  const handleBlogScroll = (direction: "left" | "right") => {
    if (blogScrollRef.current) {
      const cardWidth =
        blogScrollRef.current.querySelector(".blog-card")?.clientWidth || 350;

      const gap = 32;

      blogScrollRef.current.scrollBy({
        left: direction === "left"
          ? -(cardWidth + gap)
          : (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  
const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "start"
});

const [selectedIndex, setSelectedIndex] = useState(0);

useEffect(() => {
  if (!emblaApi) return;

  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  emblaApi.on("select", onSelect);
  onSelect();

  return () => {
    emblaApi.off("select", onSelect);
  };
}, [emblaApi]);



  // Refs
  const searchInputRef = useRef<HTMLInputElement>(null);
  const autoPlayRef = useRef<(() => void) | null>(null);

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

  // Autofocus search input when panel opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Measure SBC card pixel width on mount + resize
  // useEffect(() => {
  //   const measure = () => {
  //     if (sbcViewportRef.current) {
  //       const firstCard = sbcViewportRef.current.querySelector<HTMLElement>(".sbc-card");
  //       if (firstCard) {
  //         const track = sbcViewportRef.current.querySelector<HTMLElement>(".sbc-track");
  //         let gap = 24;
  //         if (track) {
  //           const style = window.getComputedStyle(track);
  //           const gapVal = parseFloat(style.columnGap || style.gap);
  //           if (!isNaN(gapVal)) {
  //             gap = gapVal;
  //           }
  //         }
  //         setSbcCardPx(firstCard.offsetWidth + gap);
  //       }
  //     }
  //   };
  //   measure();
  //   window.addEventListener("resize", measure);
  //   return () => window.removeEventListener("resize", measure);
  // }, []);

  // Handle escape key to close search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Carousel slider autoscroll
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 6000);
    return () => clearInterval(interval);
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

  // Add item to wishlist
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setWishlistCount((prev) => prev + 1);
    triggerAlert("Added to Wishlist!");
  };

  // Newsletter submission
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      alert(`🎉 Welcome to BOSCO Bags!\n\nWe have sent a 10% coupon code to: ${newsletterEmail.trim()}.\nThank you for subscribing!`);
      setNewsletterEmail("");
    }
  };

  return (
    <>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMenuOpen ? "active" : ""}`}>
        <div className="drawer-header">
          <Image src="/assets/logo.svg" alt="BOSCO Logo" width={120} height={40} className="drawer-logo" />
          <button className="close-drawer" aria-label="Close Menu" onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="mobile-nav-list">
          <li><a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Shop by Category</a></li>
          <li><a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Deal of the Day</a></li>
          <li><a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Top Trending</a></li>
          <li><a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Best Seller</a></li>
          <li><a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>New Arrival</a></li>
          <li><a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Corporate</a></li>
          <li><a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
          <li><a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Track</a></li>
        </ul>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`drawer-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Search Overlay / Panel */}
      <div className={`search-panel ${isSearchOpen ? "active" : ""}`}>
        <div className="search-container">
          <form className="search-form" onSubmit={(e) => { e.preventDefault(); setIsSearchOpen(false); }}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for premium bags..."
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <Search size={24} />
            </button>
          </form>
          <button className="close-search" onClick={() => setIsSearchOpen(false)}>&times;</button>
        </div>
      </div>

      {/* Static Hero Banner Section with CTA Button */}
      <section className="hero-section">
        <div className="hero-banner-container">
          {/* Main Banner Image */}
          <img
            src="/assets/slider-1.png"
            alt="BOSCO Special Sale This Week"
            className="hero-banner-img"
          />

          {/* Shop Now Button Positioned Underneath "WEEK" */}
          <div className="hero-cta-overlay">
            <a href="/categories" className="hero-shop-btn">
              <span>SHOP NOW</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Moving Announcement Ticker Section */}
      <div className="hero-ticker">
        <div className="ticker-wrap">
          <div className="ticker-item-list">
            <span>FREE DELIVERY FOR ORDER OVER ₹500</span>
            <span className="ticker-dot">&bull;</span>
            <span>END YEAR SALE UP TO 50% OFF</span>
            <span className="ticker-dot">&bull;</span>
            <span>SIGN UP AND GET 10% OFF YOUR FIRST ORDER</span>
            <span className="ticker-dot">&bull;</span>
          </div>
          <div className="ticker-item-list">
            <span>FREE DELIVERY FOR ORDER OVER ₹500</span>
            <span className="ticker-dot">&bull;</span>
            <span>END YEAR SALE UP TO 50% OFF</span>
            <span className="ticker-dot">&bull;</span>
            <span>SIGN UP AND GET 10% OFF YOUR FIRST ORDER</span>
            <span className="ticker-dot">&bull;</span>
          </div>
          <div className="ticker-item-list">
            <span>FREE DELIVERY FOR ORDER OVER ₹500</span>
            <span className="ticker-dot">&bull;</span>
            <span>END YEAR SALE UP TO 50% OFF</span>
            <span className="ticker-dot">&bull;</span>
            <span>SIGN UP AND GET 10% OFF YOUR FIRST ORDER</span>
            <span className="ticker-dot">&bull;</span>
          </div>
        </div>
      </div>

      {/* Shop by Category Section */}
      <section className="shop-by-category">
        <div className="sbc-inner">

          {/* Mobile-Only Heading (Visible on Mobile, Hidden on Desktop) */}
          <h2 className="sbc-mobile-title">Shop by Category</h2>

          {/* Left Feature Panel (Hidden on Mobile) */}
          <div className="sbc-feature">
            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
              alt="Shop by Category"
              className="sbc-feature-img"
            />
            <div className="sbc-feature-overlay">
              <h2 className="sbc-feature-title">SHOP BY<br />CATEGO<br />RY</h2>
            </div>
          </div>

          {/* Right: Slider Track + Dots */}
          <div className="sbc-slider-col">
            {/* Viewport (clips cards to screen edge) */}
            <div className="sbc-viewport" ref={emblaRef}>
              <div className="sbc-track">
                {SBC_CATEGORIES.map((cat, idx) => (
                  <a
                    href="#"
                    key={idx}
                    className="sbc-card"
                  >
                    <div className="sbc-card-img-wrap">
                      <img src={cat.img} alt={cat.label} className="sbc-card-img" />
                    </div>

                    <div className="sbc-card-footer">
                      <span className="sbc-card-label">{cat.label}</span>
                      <span className="sbc-card-arrow">
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Dot Pagination */}
            <div className="sbc-dots">
              {SBC_CATEGORIES.map((_, idx) => (
                <button
                  key={idx}
                  className={`sbc-dot ${selectedIndex === idx ? "sbc-dot--active" : ""
                    }`}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  aria-label={`Go to category ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Tried & Trusted Section */}
      <section className="tt-section">
        <div className="tt-container">

          {/* Header */}
          <div className="tt-header">
            <h2 className="tt-title">Tried &amp; Trusted</h2>
            <p className="tt-subtitle">Customer Favorites</p>
          </div>

          {/* Tab Switcher */}
          <div className="tt-tabs" role="tablist">
            {TT_TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={ttTab === tab.id}
                className={`tt-tab${ttTab === tab.id ? " tt-tab--active" : ""}`}
                onClick={() => setTtTab(tab.id as "bestsellers" | "newarrival" | "trending")}
              >
                <span className="tt-tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid (Maximum 8 Products) */}
          <div className="tt-grid">
            {TT_PRODUCTS[ttTab].slice(0, 8).map((product) => (
              <a
                href="#"
                key={product.id}
                className="tt-card"
                onClick={(e) => {
                  // Prevent default hash routing behavior while preserving component interaction
                  e.preventDefault();
                }}
              >
                {/* Discount Badge */}
                {product.discount && (
                  <span className="tt-badge">{product.discount}% Off</span>
                )}

                {/* Product Image Wrapper with Dual-Image Support */}
                <div className="tt-card-img-wrap" style={{ backgroundColor: product.bg }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="tt-card-img tt-card-img--primary"
                  />
                  {/* Renders second image for hover state if defined in your data */}
                  <img
                    src={product.hoverImg || product.img}
                    alt={`${product.name} hover view`}
                    className="tt-card-img tt-card-img--hover"
                  />
                </div>

                {/* Card Footer */}
                <div className="tt-card-footer">
                  <div className="tt-card-info">
                    <p className="tt-card-name">{product.name}</p>
                    <div className="tt-card-pricing">
                      <span className="tt-price">₹{product.price}.00</span>
                      {product.original && (
                        <span className="tt-original">/₹{product.original}.00</span>
                      )}
                    </div>
                  </div>
                  <button
                    className="tt-cart-btn"
                    aria-label="Add to cart"
                    onClick={(e) => {
                      // Prevent event bubbling to parent anchor tag link
                      e.stopPropagation();
                      e.preventDefault();
                      handleAddToCart(e);
                    }}
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </a>
            ))}
          </div>

          {/* View All Button */}
          <div className="tt-footer-actions">
            <a href="/products" className="tt-view-all-btn">
              View All
            </a>
          </div>
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

      {/* New Arrivals Section */}
      <section className="na-section">
        <div className="na-container">
          {/* Section Header */}
          <div className="na-header">
            <h2 className="na-title">New Arrivals</h2>
            <p className="na-subtitle">Just In – Latest Travel Gear</p>
          </div>

          {/* Product Grid */}
          <div className="na-grid">
            {NA_PRODUCTS.map((product) => (
              <a
                href="#"
                key={product.id}
                className="na-card"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {/* Discount Badge */}
                {product.discount && (
                  <span className="na-badge">{product.discount}% Off</span>
                )}

                {/* Product Image Wrapper with Dual-Image Hover Support */}
                <div className="na-card-img-wrap" style={{ backgroundColor: product.bg }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="na-card-img na-card-img--primary"
                  />
                  <img
                    src={product.hoverImg || product.img}
                    alt={`${product.name} alternate view`}
                    className="na-card-img na-card-img--hover"
                  />
                </div>

                {/* Card Footer */}
                <div className="na-card-footer">
                  <div className="na-card-info">
                    <p className="na-card-name">{product.name}</p>
                    <div className="na-card-pricing">
                      <span className="na-price">₹{product.price}.00</span>
                      {product.original && (
                        <span className="na-original">/₹{product.original}.00</span>
                      )}
                    </div>
                  </div>
                  <button
                    className="na-cart-btn"
                    aria-label="Add to cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      handleAddToCart(e);
                    }}
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </a>
            ))}
          </div>

          {/* View All Button */}
          <div className="na-footer-actions">
            <a href="/products" className="na-view-all-btn">
              VIEW ALL
            </a>
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

      {/* Our Blog Section */}
      <section className="blog-section">
      <div className="blog-container">

        <div className="blog-header">
          <h2 className="blog-main-title">Our Latest Blog</h2>
        </div>

        <div className="blog-slider-wrap">

          {/* Left Arrow */}
          <button
            className="blog-nav-btn blog-nav-btn--left"
            onClick={() => handleBlogScroll("left")}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Blog Cards Grid */}
          <div className="blog-grid" ref={blogScrollRef}>
            {BLOG_DATA.map((blog) => (
              <a href={`/blog/${blog.id}`} key={blog.id} className="blog-card">

                <div className="blog-img-wrap">
                  <img src={blog.image} alt={blog.title} className="blog-img" />
                </div>

                <div className="blog-meta">
                  <div className="blog-author-info">
                    <img
                      src={blog.authorAvatar}
                      alt={blog.authorName}
                      className="blog-avatar"
                    />
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

                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc">{blog.excerpt}</p>

                <span className="blog-readmore">
                  Read more <span className="blog-readmore-arrow">▶</span>
                </span>

              </a>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="blog-nav-btn blog-nav-btn--right"
            onClick={() => handleBlogScroll("right")}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        <div className="blog-footer">
          <a href="/blog" className="blog-view-all-btn">
            View All
          </a>
        </div>

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
