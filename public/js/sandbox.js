let currentSlideIndex = 1;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

function showSlides(n) {
 
  if (n > slides.length) { currentSlideIndex = 1; }
  if (n < 1) { currentSlideIndex = slides.length; }

  slides.forEach((slide, index) => {
    slide.style.opacity = '0';
    dots[index].classList.remove('active'); 
  });

  slides[currentSlideIndex - 1].style.opacity = '1';
  dots[currentSlideIndex - 1].classList.add('active');  

  document.querySelector('.slideshow-container').style.transform = `translateX(-${(currentSlideIndex - 1) * 100}%)`;
}

setInterval(() => {
  currentSlideIndex++;
  showSlides(currentSlideIndex);
}, 5000);

function currentSlide(n) {
  currentSlideIndex = n;
  showSlides(currentSlideIndex);
}

showSlides(currentSlideIndex);
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
/****************************alt svg color*************************************/
const svgIcon = document.getElementById('svg-icon');
svgIcon.addEventListener('load', function() {
  const svgDoc = svgIcon.contentDocument; 
  const svgElement = svgDoc.querySelector('circle');
  svgElement.setAttribute('fill', '#6A3F2C');
});
/*********************************hamburger menu***********************************/
/*********************************backToTopIcon********************************** */
let backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click',   window.scrollTo({
  top: 0,
  behavior: 'smooth'
}));



/*********************************backToTopIcon********************************** */

