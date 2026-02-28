(function () {
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

  function closeAllShareMenus() {
    document.querySelectorAll(".share-options").forEach((menu) => {
      menu.style.display = "none";
    });
  }

  function closeShareOverlay(overlay) {
    overlay.classList.remove("active");
    overlay.classList.add("hidden");
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

  function filterCards(cards, category, searchTerm) {
    cards.forEach((card) => {
      const cardCategory = card.dataset.category || "";
      const title = (card.querySelector(".blog-title")?.textContent || "")
        .trim()
        .toLowerCase();

      const categoryMatch = category === "all" || cardCategory === category;
      const searchMatch = title.includes(searchTerm);

      card.style.display = categoryMatch && searchMatch ? "block" : "none";
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    highlightActiveLink();
    setupContactButton();

    const cards = Array.from(document.querySelectorAll(".blog-card"));
    const categoryLinks = Array.from(document.querySelectorAll(".category-link"));
    const searchInput = document.getElementById("search");
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-btn");
    const searchCloseButton = document.getElementById("close-btn");

    let selectedCategory = "all";
    let searchTerm = "";

    const applyFilters = () => {
      filterCards(cards, selectedCategory, searchTerm);
    };

    categoryLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        selectedCategory = link.dataset.category || "all";

        categoryLinks.forEach((entry) => {
          entry.classList.remove("active");
        });

        link.classList.add("active");
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        searchTerm = searchInput.value.trim().toLowerCase();
        applyFilters();
      });
    }

    if (searchButton && searchBar) {
      searchButton.addEventListener("click", () => {
        searchBar.classList.add("show");
        searchButton.style.display = "none";
      });
    }

    if (searchCloseButton && searchBar && searchButton) {
      searchCloseButton.addEventListener("click", () => {
        searchBar.classList.remove("show");
        searchButton.style.display = "flex";
      });
    }

    cards.forEach((card) => {
      const shareButton = card.querySelector(".share-btn");
      const shareMenu = card.querySelector(".share-options");
      const shareOverlay = card.querySelector(".share-overlay");
      const shareTextButton = card.querySelector(".share-text-btn");
      const closeButtons = card.querySelectorAll(".close-btn");

      if (shareButton && shareMenu) {
        shareButton.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();

          const shouldShow = shareMenu.style.display !== "block";
          closeAllShareMenus();
          shareMenu.style.display = shouldShow ? "block" : "none";
        });
      }

      if (shareTextButton && shareOverlay) {
        shareTextButton.addEventListener("click", (event) => {
          event.preventDefault();
          shareOverlay.classList.remove("hidden");
          shareOverlay.classList.add("active");
        });
      }

      if (shareOverlay) {
        shareOverlay.addEventListener("click", (event) => {
          if (event.target === shareOverlay) {
            closeShareOverlay(shareOverlay);
          }
        });
      }

      closeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          if (shareOverlay) {
            closeShareOverlay(shareOverlay);
          }
        });
      });
    });

    document.addEventListener("click", () => {
      closeAllShareMenus();
    });

    applyFilters();
  });
})();
