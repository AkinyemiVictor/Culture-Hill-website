(function () {
  let currentSlideIndex = 1;
  let slides = [];
  let dots = [];
  let slider = null;
  let autoSlideTimer = null;
  let isInitialized = false;

  function cacheSliderElements() {
    slides = Array.from(document.querySelectorAll(".home-billboard .slide"));
    dots = Array.from(document.querySelectorAll(".home-billboard .dot"));
    slider = document.querySelector(".home-billboard .slideshow-container");
  }

  function showSlides(slideNumber) {
    if (slides.length === 0) {
      return;
    }

    if (slideNumber > slides.length) {
      currentSlideIndex = 1;
    }

    if (slideNumber < 1) {
      currentSlideIndex = slides.length;
    }

    slides.forEach((slide, index) => {
      slide.style.opacity = "0";
      if (dots.length > 0 && dots[index]) {
        dots[index].classList.remove("active");
      }
    });

    const activeSlide = slides[currentSlideIndex - 1];
    const activeDot = dots.length > 0 ? dots[currentSlideIndex - 1] : null;

    if (activeSlide) {
      activeSlide.style.opacity = "1";
    }

    if (activeDot) {
      activeDot.classList.add("active");
    }

    if (slider) {
      slider.style.transform = `translateX(-${(currentSlideIndex - 1) * 100}%)`;
    }
  }

  function moveToSlide(slideNumber) {
    currentSlideIndex = slideNumber;
    showSlides(currentSlideIndex);
  }

  function setupSlideshow() {
    cacheSliderElements();

    if (slides.length === 0) {
      return;
    }

    if (autoSlideTimer) {
      window.clearInterval(autoSlideTimer);
    }

    showSlides(currentSlideIndex);

    autoSlideTimer = window.setInterval(() => {
      currentSlideIndex += 1;
      showSlides(currentSlideIndex);
    }, 5000);
  }

  function normalizePath(pathname) {
    if (!pathname || pathname === "/") {
      return "/";
    }

    let path = pathname.replace(/\/+$/, "");
    if (path === "") {
      path = "/";
    }

    if (path.endsWith(".html")) {
      path = path.replace(/\.html$/, "");
    }

    return path === "/index" ? "/" : path;
  }

  function highlightActiveLink() {
    const navLinks = document.querySelectorAll("#navigate a");
    const currentPath = normalizePath(window.location.pathname);

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const linkPath = normalizePath(
        new URL(link.href, window.location.origin).pathname
      );

      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
  }

  function setupBackToTop() {
    const backToTop = document.getElementById("backToTop");
    if (!backToTop) {
      return;
    }

    backToTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  function setupContactButton() {
    const button = document.querySelector(".contact-btn .btn");
    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      window.location.href = "/contact";
    });
  }

  function initHomePageScripts() {
    if (isInitialized) {
      return;
    }

    isInitialized = true;
    highlightActiveLink();
    setupSlideshow();
    setupBackToTop();
    setupContactButton();
  }

  window.currentSlide = moveToSlide;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHomePageScripts);
  } else {
    initHomePageScripts();
  }
})();
