/********************************************functioning post theme******************************************************/
const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Organic Farming",
    date: "January 15, 2025",
    image: "./assets/Images/20220529_103140.jpg",
    content: "Learn the top five tips for growing food without chemicals...",
  },
  {
    id: 2,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 3,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 4,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 5,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 6,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 7,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 8,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 9,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 10,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 11,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 12,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 13,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 14,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 15,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 16,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 17,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 18,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 19,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 20,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 21,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 22,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 23,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
  {
    id: 24,
    title: "Healthy Eating with Seasonal Produce",
    date: "February 10, 2025",
    image: "./assets/Images/20220729_140131.jpg",
    content: "Discover the benefits of eating fresh, seasonal produce...",
  },
];

function getBlogIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function loadBlogPost() {
  const blogId = getBlogIdFromURL();
  const blogPost = blogPosts.find((post) => post.id == blogId);

  if (blogPost) {
    document.getElementById("blog-title").textContent = blogPost.title;
    document.getElementById(
      "blog-date"
    ).textContent = `Posted on ${blogPost.date}`;
    document.getElementById("blog-image").src = blogPost.image;
    document.getElementById("blog-content").textContent = blogPost.content;
  } else {
    document.getElementById("blog-content").textContent =
      "Blog post not found.";
  }
}

window.onload = loadBlogPost;
