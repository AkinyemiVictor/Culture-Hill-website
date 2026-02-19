/***********************************for nav******************************************/
const navLinks = document.querySelectorAll("#navigate a");

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

function removeActiveClasses() {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
}

function highlightActiveLink() {
  const currentPath = normalizePath(window.location.pathname);

  navLinks.forEach((link, index) => {
    const linkPath = normalizePath(
      new URL(link.href, window.location.origin).pathname
    );

    if (linkPath === currentPath) {
      removeActiveClasses();
      navLinks[index].classList.add("active");
    }
  });
}

window.addEventListener("DOMContentLoaded", highlightActiveLink);
/**********************************blog filter system*********************************/
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const blogCards = document.querySelectorAll(".blog-card");
  const searchInput = document.getElementById("search");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const category = link.dataset.category;

      navLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");

      blogCards.forEach((card) => {
        card.style.display =
          category === "all" || card.dataset.category === category
            ? "block"
            : "none";
      });
    });
  });

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    blogCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(searchTerm) ? "block" : "none";
    });
  });
});
/***********************************blog nav******************************************/
const categoryLinks = document.querySelectorAll(".category-link");

categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    categoryLinks.forEach((link) => link.classList.remove("active"));

    event.target.classList.add("active");

    const selectedCategory = event.target.dataset.category;
    filterBlogPosts(selectedCategory);
  });
});
/***********************************blog share overlay******************************************/
const shareButtons = document.querySelectorAll(".share-text-btn");
const shareOverlay = document.querySelector(".share-overlay");
const closeButton = document.querySelector(".close-btn");

document.addEventListener("DOMContentLoaded", function () {
  const shareButtons = document.querySelectorAll(".share-btn");

  shareButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      const blogCard = button.closest(".blog-card");
      const shareOptions = blogCard.querySelector(".share-options");

      if (shareOptions.style.display === "block") {
        shareOptions.style.display = "none";
      } else {
        document.querySelectorAll(".share-options").forEach((el) => {
          el.style.display = "none";
        });

        shareOptions.style.display = "block";
      }
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".share-options").forEach((el) => {
      el.style.display = "none";
    });
  });
});

function showShareModal() {
  shareOverlay.classList.add("active");
}

function closeShareModal() {
  shareOverlay.classList.remove("active");
}

shareButtons.forEach((button) => {
  button.addEventListener("click", showShareModal);
});

closeButton.addEventListener("click", closeShareModal);

shareOverlay.addEventListener("click", (e) => {
  if (e.target === shareOverlay) {
    closeShareModal();
  }
});
/***********************************blog searchbar******************************************/
const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");
const closeBtn = document.getElementById("close-btn");

searchBtn.addEventListener("click", () => {
  searchBar.classList.add("show");
  searchBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  searchBar.classList.remove("show");
  searchBtn.style.display = "flex";
});
