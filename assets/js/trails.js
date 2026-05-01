const canvas = document.getElementById("cursor-blob-trail");

if (canvas) {
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
let dpr = window.devicePixelRatio || 1;

const mouse = {
  x: width / 2,
  y: height / 2,
};

const blob = {
  x: mouse.x,
  y: mouse.y,
};

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  dpr = window.devicePixelRatio || 1;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function handlePointerMove(event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}

function drawBlob() {
  /**
   * Fades old frames.
   * Lower alpha = longer trail.
   * Higher alpha = shorter trail.
   */
  ctx.fillStyle = "rgba(20,20,20,0.15)";
  ctx.fillRect(0, 0, width, height);

  /**
   * Makes the blob ease toward the cursor.
   * Lower value = slower, gooier movement.
   * Higher value = tighter cursor following.
   */
  blob.x += (mouse.x - blob.x) * 0.05;
  blob.y += (mouse.y - blob.y) * 0.06;

  const radius = 250;

  const gradient = ctx.createRadialGradient(
    blob.x,
    blob.y,
    0,
    blob.x,
    blob.y,
    radius
  );

  gradient.addColorStop(0, "rgba(100,200,255, 0.25)");
  gradient.addColorStop(0.50, "rgba(100,200, 255, 0.012)");
  gradient.addColorStop(1, "rgba(255,255, 255, 0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(blob.x, blob.y, radius, 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(drawBlob);
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", handlePointerMove);

drawBlob();
}
