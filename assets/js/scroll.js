
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }
},
{
  threshold: 0.28,
  rootMargin: "0px 0px -8% 0px"
}
);

revealItems.forEach((item, index) => {
item.style.setProperty("--delay", `${Math.min(index * 70, 280)}ms`);
observer.observe(item);
});


const scrollCards = document.querySelectorAll(".scroll-card");

function updateScrollCards() {
const viewportHeight = window.innerHeight;

for (const card of scrollCards) {
  const rect = card.getBoundingClientRect();
  const center = rect.top + rect.height / 2;
  const progress = (center - viewportHeight / 2) / viewportHeight;
  const y = progress * -20;

  card.style.setProperty("--scroll-y", `${y}px`);
}

requestAnimationFrame(updateScrollCards);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
requestAnimationFrame(updateScrollCards);
}

