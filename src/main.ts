import "./styles/index.scss";

let targetX = 50, targetY = 50;

document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * 5;
  const y = (e.clientY / innerHeight - 0.5) * 5;
  targetX = 50 + x;
  targetY = 50 + y;
});

function animate() {
  // Lerp to target
  const currentX = parseFloat(document.body.style.backgroundPositionX) || 50;
  const currentY = parseFloat(document.body.style.backgroundPositionY) || 50;
  document.body.style.backgroundPosition = 
    `${currentX + (targetX - currentX) * 0.1}% ${currentY + (targetY - currentY) * 0.1}%`;
  requestAnimationFrame(animate);
}
animate();

document.querySelector(".header-button-spotify")?.addEventListener("click", () => {
    document.querySelector("body")?.classList.toggle("hidden");
})