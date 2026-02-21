(() => {
  const links = Array.from(document.querySelectorAll(".nav__link"));
  const pages = Array.from(document.querySelectorAll(".page"));

  if (!links.length || !pages.length) return;

  const show = (name) => {
    links.forEach(a => a.classList.toggle("active", a.dataset.page === name));
    pages.forEach(p => p.classList.toggle("active", p.dataset.page === name));
  };

  links.forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const name = a.dataset.page;
      history.replaceState(null, "", `#${name}`);
      show(name);
    });
  });

  const initial = (location.hash || "#home").slice(1);
  show(initial);

  addEventListener("hashchange", () => {
    const name = (location.hash || "#home").slice(1);
    show(name);
  });
}) ();

const header = document.getElementById("siteHeader");
if (header) {
  const ADD_AT = 10;    // shrink after this
  const REMOVE_AT = 40; // grow back only below this

  addEventListener("scroll", () => {
    const y = scrollY;
    const small = header.classList.contains("shrink");

    if (!small && y > ADD_AT) header.classList.add("shrink");
    else if (small && y < REMOVE_AT) header.classList.remove("shrink");
  }, { passive: true });
}

