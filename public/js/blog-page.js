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

      if (linkPath === currentPath || currentPath.startsWith("/blog")) {
        if (linkPath === "/blog") {
          link.classList.add("active");
        }
      }
    });
  }

  function getBlogPosts() {
    if (Array.isArray(window.cultureHillBlogPosts)) {
      return window.cultureHillBlogPosts;
    }

    return [
      {
        id: 1,
        title: "Culture Hill Farm Update",
        date: "January 15, 2025",
        content:
          "Culture Hill continues improving farm quality and sustainable production practices.",
        image: "/assets/Images/20220529_103140.jpg",
      },
    ];
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

  function loadBlogPost(posts) {
    const blogId = getBlogIdFromURL();
    const blogPost = posts.find((post) => post.id === blogId) || posts[0];

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

  function renderRecentPosts(posts) {
    const container = document.querySelector(".recentPostsFlex");
    if (!container) {
      return;
    }

    const recent = posts.slice(0, 3);
    container.innerHTML = recent
      .map(
        (post) => `
          <div class="recentPost">
            <img src="${post.image}" alt="${post.title}">
            <p><a href="/blog/${post.id}">${post.title}</a></p>
          </div>
        `
      )
      .join("");
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
    const posts = getBlogPosts();
    highlightActiveLink();
    setupContactButton();
    setupShareButton();
    loadBlogPost(posts);
    renderRecentPosts(posts);
  });
})();
