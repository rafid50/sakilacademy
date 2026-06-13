(function () {
  var footer = document.querySelector(".site-footer");
  if (!footer) return;

  if (!("IntersectionObserver" in window)) {
    footer.classList.add("is-visible");
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          footer.classList.add("is-visible");
          observer.unobserve(footer);
        }
      });
    },
    { threshold: 0.15 }
  );

  observer.observe(footer);
})();
