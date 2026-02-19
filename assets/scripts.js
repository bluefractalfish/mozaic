const header = document.getElementById("siteHeader");
if (header) {
  const ADD_AT = 90;    // shrink after this
  const REMOVE_AT = 40; // grow back only below this

  addEventListener("scroll", () => {
    const y = scrollY;
    const small = header.classList.contains("shrink");

    if (!small && y > ADD_AT) header.classList.add("shrink");
    else if (small && y < REMOVE_AT) header.classList.remove("shrink");
  }, { passive: true });
}

