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

function setupContactButton() {
  const button = document.querySelector(".contact-btn .btn");
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    window.location.href = "/contact";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  highlightActiveLink();
  setupContactButton();
});
