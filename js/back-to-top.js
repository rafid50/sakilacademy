(function () {
  var btn = document.getElementById("backToTop");
  if (!btn) return;

  function toggleVisibility() {
    btn.classList.toggle("is-visible", window.scrollY > 300);
  }

  window.addEventListener("scroll", toggleVisibility);
  toggleVisibility();

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
