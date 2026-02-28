(function () {
  const postOverrides = {
    1: {
      title: "5 Tips for Organic Farming",
      date: "January 15, 2025",
      image: "/assets/Images/20220529_103140.jpg",
      content:
        "Organic farming starts with soil health. Prioritize composting, crop rotation, water management, seed quality, and consistent field observation for better yields.",
    },
    2: {
      title: "Healthy Eating with Seasonal Produce",
      date: "February 10, 2025",
      image: "/assets/Images/20220602_115950.jpg",
      content:
        "Eating with the season supports nutrition and lowers food waste. Build meals around what is currently harvested and available from local farms.",
    },
    3: {
      title: "Building Resilient Farm Soil",
      date: "March 5, 2025",
      image: "/assets/Images/20220615_135804.jpg",
      content:
        "Healthy soil improves crop quality and long-term productivity. Use organic matter, reduce erosion, and monitor moisture to maintain strong topsoil.",
    },
    4: {
      title: "Community and Farm Growth",
      date: "April 2, 2025",
      image: "/assets/Images/cheese.jpg",
      content:
        "Sustainable agriculture is stronger with local collaboration. Community demand, farmer education, and transparent supply chains improve outcomes.",
    },
    5: {
      title: "Potato Harvest Planning",
      date: "May 9, 2025",
      image: "/assets/Images/potato.jpg",
      content:
        "Successful potato harvest depends on weather timing, storage readiness, and efficient sorting. Small improvements reduce post-harvest losses.",
    },
    6: {
      title: "Farm Updates: Mid-Season Review",
      date: "June 20, 2025",
      image: "/assets/Images/20220629_083546.jpg",
      content:
        "Our mid-season review tracks crop health, feed quality, and delivery performance. Data from the field helps us improve every cycle.",
    },
    7: {
      title: "Poultry Care and Productivity",
      date: "July 11, 2025",
      image: "/assets/Images/chicken.jpg",
      content:
        "Balanced feed, clean water, and shelter management are essential for healthy poultry production and consistent supply quality.",
    },
    8: {
      title: "Egg Supply and Food Safety",
      date: "August 3, 2025",
      image: "/assets/Images/eggs.jpg",
      content:
        "Reliable egg production requires careful hygiene, storage, and transportation standards to maintain freshness from farm to customer.",
    },
    9: {
      title: "Maize Production Insights",
      date: "August 21, 2025",
      image: "/assets/Images/maize.jpg",
      content:
        "Maize output improves when planting schedules, weed control, and nutrient planning are synchronized with local climate patterns.",
    },
    10: {
      title: "Milk Handling Best Practices",
      date: "September 8, 2025",
      image: "/assets/Images/milk-in-can.jpg",
      content:
        "Cooling, timing, and clean containers preserve milk quality. Farm-level handling directly influences shelf life and customer trust.",
    },
    11: {
      title: "Managing Farm Water Resources",
      date: "September 25, 2025",
      image: "/assets/Images/rain.jpg",
      content:
        "Water efficiency is central to sustainable farming. Store rainfall strategically and monitor irrigation to reduce waste and improve resilience.",
    },
    12: {
      title: "Crop Rotation in Practice",
      date: "October 14, 2025",
      image: "/assets/Images/young-corn.jpg",
      content:
        "Rotating crop families helps control pests, protects soil structure, and supports healthier yields across growing seasons.",
    },
  };

  const defaultPost = {
    title: "Culture Hill Farm Update",
    date: "November 1, 2025",
    image: "/assets/Images/20220729_140131.jpg",
    content:
      "Culture Hill continues improving organic production systems, product quality, and distribution efficiency across every farming cycle.",
  };

  const blogPosts = Array.from({ length: 26 }, (_, index) => {
    const id = index + 1;
    return {
      id,
      ...defaultPost,
      ...postOverrides[id],
    };
  });

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

      if (linkPath === currentPath || currentPath.startsWith("/blog")) {
        if (linkPath === "/blog") {
          link.classList.add("active");
        }
      }
    });
  }

  function getBlogIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    const queryId = Number(params.get("id"));

    if (Number.isInteger(queryId) && queryId > 0) {
      return queryId;
    }

    const pathMatch = window.location.pathname.match(/\/blog\/(\d+)/);
    if (pathMatch) {
      return Number(pathMatch[1]);
    }

    return 1;
  }

  function getElement(selectors) {
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        return element;
      }
    }

    return null;
  }

  function loadBlogPost() {
    const blogId = getBlogIdFromURL();
    const blogPost = blogPosts.find((post) => post.id === blogId) || blogPosts[0];

    const titleElement = getElement(["#blog-title", ".miniHeader h1"]);
    const dateElement = getElement(["#blog-date", ".miniHeader p"]);
    const imageElement = getElement(["#blog-image", ".blogImage img"]);
    const contentElement = getElement(["#blog-content", ".blogText p"]);

    if (titleElement) {
      titleElement.textContent = blogPost.title;
    }

    if (dateElement) {
      dateElement.textContent = `Posted on ${blogPost.date}`;
    }

    if (imageElement) {
      imageElement.src = blogPost.image;
      imageElement.alt = blogPost.title;
    }

    if (contentElement) {
      contentElement.textContent = blogPost.content;
    }

    document.title = `${blogPost.title} | Culture Hill`;
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

  function setupShareButton() {
    const shareButton = document.querySelector(".share-btn");
    const shareOptions = document.querySelector(".share-options");
    const shareTextButton = document.querySelector(".share-text-btn");

    if (!shareButton || !shareOptions) {
      return;
    }

    shareButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      shareOptions.classList.toggle("hidden");
    });

    document.addEventListener("click", () => {
      shareOptions.classList.add("hidden");
    });

    if (shareTextButton) {
      shareTextButton.addEventListener("click", async (event) => {
        event.preventDefault();
        const shareData = {
          title: document.title,
          text: "Read this Culture Hill blog post",
          url: window.location.href,
        };

        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch {
            // Ignore cancellation and continue without blocking the page.
          }
        } else if (navigator.clipboard) {
          try {
            await navigator.clipboard.writeText(window.location.href);
          } catch {
            // Clipboard may be unavailable for some browser/privacy contexts.
          }
        }

        shareOptions.classList.add("hidden");
      });
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    highlightActiveLink();
    setupContactButton();
    setupShareButton();
    loadBlogPost();
  });
})();
