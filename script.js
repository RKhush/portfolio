const details = document.querySelectorAll(".details");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

details.forEach(detail => {
  observer.observe(detail);
});
