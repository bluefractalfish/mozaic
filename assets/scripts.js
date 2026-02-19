(() => {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const START = 0;
  const RANGE = 140;

  const clamp01 = (n) => Math.max(0,Math.min(1,n));

  let raf = 0;

  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const t = clamp01((window.scrollY-START)/RANGE);
      header.style.setProperty("--t",t.toFixed(3));
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, {passive: true})
  window.addEventListener("resize", onScroll);
})();
