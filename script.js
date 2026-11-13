/* Portfolio — วรีพร นามวิเศษ */
(function () {
  "use strict";

  // ปี้ปีปัจจุบันใน footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navbar เปลี่ยนพื้นหลังเมื่อเลื่อน
  var nav = document.getElementById("nav");
  function onScrollNav() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  // เมนูมือถือ (hamburger)
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });
    // ปิดเมนูเมื่อคลิกที่ลิงก์แล้ว
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        toggle.classList.remove("open");
        links.classList.remove("open");
      });
    });
  }

  // Reveal on scroll (IntersectionObserver)
  var targets = document.querySelectorAll(".section, .hero, .footer");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("in-view"); });
  }
})();
