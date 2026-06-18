/* ==========================================================================
   BOSCO Bags - Frontend Script Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Sticky Header Functionality
  const header = document.getElementById('mainHeader');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Drawer Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawer = document.getElementById('closeDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  const openMobileMenu = () => {
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevents background scroll
  };

  const closeMobileMenu = () => {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restores background scroll
  };

  menuToggle.addEventListener('click', openMobileMenu);
  closeDrawer.addEventListener('click', closeMobileMenu);
  drawerOverlay.addEventListener('click', closeMobileMenu);

  // 3. Fullscreen Search Overlay Trigger
  const searchTrigger = document.getElementById('searchTrigger');
  const searchPanel = document.getElementById('searchPanel');
  const closeSearch = document.getElementById('closeSearch');
  const searchInput = searchPanel.querySelector('.search-input');

  searchTrigger.addEventListener('click', () => {
    searchPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 300); // Focus input after transition
  });

  const closeSearchPanel = () => {
    searchPanel.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeSearch.addEventListener('click', closeSearchPanel);
  
  // Close search on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchPanel.classList.contains('active')) {
      closeSearchPanel();
    }
  });

  // 4. Hero Carousel Slider Implementation
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  
  let currentSlide = 0;
  let slideInterval;
  const intervalTime = 6000; // Auto scroll every 6 seconds

  const updateCarousel = (index) => {
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Remove entrance animations from the old slide's children
    const prevInfo = slides[currentSlide].querySelector('.slide-info');
    const prevVisual = slides[currentSlide].querySelector('.slide-visual');
    if (prevInfo) prevInfo.classList.remove('animate-left');
    if (prevVisual) prevVisual.classList.remove('animate-right');

    // Update current index
    currentSlide = index;

    // Add active class to new slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Add entrance animations to the new active slide's children
    const activeInfo = slides[currentSlide].querySelector('.slide-info');
    const activeVisual = slides[currentSlide].querySelector('.slide-visual');
    if (activeInfo) activeInfo.classList.add('animate-left');
    if (activeVisual) activeVisual.classList.add('animate-right');
  };

  const nextSlide = () => {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= slides.length) {
      nextIndex = 0;
    }
    updateCarousel(nextIndex);
  };

  const prevSlide = () => {
    let prevIndex = currentSlide - 1;
    if (prevIndex < 0) {
      prevIndex = slides.length - 1;
    }
    updateCarousel(prevIndex);
  };

  // Click events
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  // Dot navigation click events
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateCarousel(index);
      resetTimer();
    });
  });

  // Auto sliding timer triggers
  const startTimer = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  const resetTimer = () => {
    clearInterval(slideInterval);
    startTimer();
  };

  // Start the timer initially
  startTimer();

  // Pause sliding on carousel hover
  const carouselContainer = document.querySelector('.hero-section');
  carouselContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
  carouselContainer.addEventListener('mouseleave', startTimer);

  // 5. Interactive Demo Elements (Add to Cart / Add to Wishlist)
  const cartCount = document.getElementById('cartCount');
  const wishlistCount = document.getElementById('wishlistCount');
  
  // Shopping Cart Button Click Trigger
  const shopBtns = document.querySelectorAll('.btn-shop');
  shopBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update cart counter
      let count = parseInt(cartCount.textContent);
      count++;
      cartCount.textContent = count;

      // Add a scale-up pop animation to cart icon
      const cartIcon = document.querySelector('.cart-icon');
      cartIcon.style.transform = 'scale(1.25)';
      cartIcon.style.color = 'var(--secondary-sky)';
      
      // Trigger a mini floating success element
      const floatingAlert = document.createElement('div');
      floatingAlert.className = 'floating-success-alert';
      floatingAlert.textContent = 'Bag added to Cart!';
      floatingAlert.style.position = 'fixed';
      floatingAlert.style.bottom = '100px';
      floatingAlert.style.right = '40px';
      floatingAlert.style.backgroundColor = 'var(--primary-navy)';
      floatingAlert.style.color = '#fff';
      floatingAlert.style.padding = '12px 24px';
      floatingAlert.style.borderRadius = 'var(--border-radius-md)';
      floatingAlert.style.boxShadow = 'var(--shadow-lg)';
      floatingAlert.style.zIndex = '999';
      floatingAlert.style.animation = 'floatUpAlert 2s forwards';
      document.body.appendChild(floatingAlert);

      setTimeout(() => {
        cartIcon.style.transform = '';
        cartIcon.style.color = '';
        floatingAlert.remove();
      }, 2000);
    });
  });

  // Inject animation keyframes for the success alert dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes floatUpAlert {
      0% { opacity: 0; transform: translateY(20px); }
      20% { opacity: 1; transform: translateY(0); }
      80% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-20px); }
    }
  `;
  document.head.appendChild(style);

  // 6. Newsletter Signup Interactivity
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = newsletterEmail.value.trim();

    if (emailVal) {
      alert(`🎉 Welcome to BOSCO Bags!\n\nWe have sent a 10% coupon code to: ${emailVal}.\nThank you for subscribing!`);
      newsletterEmail.value = '';
    }
  });

});
