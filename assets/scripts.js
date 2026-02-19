const header = document.getElementById("siteHeader");

if (header) {
  addEventListener("scroll", () => {
    header.classList.toggle("shrink", scrollY > 80);
  }, { passive: true });
}

