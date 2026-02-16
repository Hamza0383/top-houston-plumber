document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("hamburgerBtn");
  var nav = document.getElementById("mobileNav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  });
});
