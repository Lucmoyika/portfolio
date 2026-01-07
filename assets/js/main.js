/**
* Template Name: portfolio luc moyika
* Template URL: https://luc-moyika.infinityfreeapps.com
* Updated: Oct 15 2025
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /** 
   * Throttle function pour limiter les appels fréquents
   */
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    }
  }

  /**
   * Apply .scrolled class to body when scrolling
   */
  const toggleScrolled = () => {
    const body = document.body;
    const header = document.querySelector('#header');
    if (!header.classList.contains('scroll-up-sticky') &&
        !header.classList.contains('sticky-top') &&
        !header.classList.contains('fixed-top')) return;

    window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
  };

  document.addEventListener('scroll', throttle(toggleScrolled, 100));
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  const mobileNavToogle = () => {
    document.body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  };

  mobileNavToggleBtn?.addEventListener('click', mobileNavToogle);

  // Hide mobile nav on same-page/hash links
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) mobileNavToogle();
    });
  });

  // Toggle mobile nav dropdowns
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) window.addEventListener('load', () => preloader.remove());

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');

  const toggleScrollTop = () => {
    if (!scrollTop) return;
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  };

  scrollTop?.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', throttle(toggleScrollTop, 100));

  /**
   * Lazy-loading pour toutes les images
   */
  document.querySelectorAll('img').forEach(img => img.setAttribute('loading', 'lazy'));

  /**
   * Animation on scroll
   */
  const aosInit = () => AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  window.addEventListener('load', aosInit);

  /**
   * Typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    const typed_strings = selectTyped.getAttribute('data-typed-items')?.split(',') || [];
    new Typed('.typed', { strings: typed_strings, loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000 });
  }

  /**
   * Skills animation
   */
  document.querySelectorAll('.skills-animation').forEach(item => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: () => {
        item.querySelectorAll('.progress .progress-bar').forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * PureCounter
   */
  new PureCounter();

  /**
   * GLightbox
   */
  GLightbox({ selector: '.glightbox' });

  /**
   * Isotope
   */
  document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
    const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
    let initIsotope;

    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(filters => {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({ filter: this.getAttribute('data-filter') });
        typeof aosInit === 'function' && aosInit();
      });
    });
  });

  /**
   * FAQ toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach(faqItem => {
    faqItem.addEventListener('click', () => faqItem.parentNode.classList.toggle('faq-active'));
  });

  /**
   * Swiper sliders
   */
  const initSwiper = () => {
    document.querySelectorAll(".init-swiper").forEach(swiperElement => {
      const config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  };
  window.addEventListener("load", initSwiper);

  /**
   * Scroll to hash on page load
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) setTimeout(() => {
        window.scrollTo({
          top: section.offsetTop - parseInt(getComputedStyle(section).scrollMarginTop),
          behavior: 'smooth'
        });
      }, 100);
    }
  });

  /**
   * Navmenu Scrollspy
   */
  const navmenuLinks = document.querySelectorAll('.navmenu a');
  const navmenuScrollspy = () => {
    navmenuLinks.forEach(link => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', throttle(navmenuScrollspy, 100));

})();
