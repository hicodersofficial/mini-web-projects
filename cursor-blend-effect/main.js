const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = `
        top: ${e.y - 80}px;
        left: ${e.x - 80}px;
    `;
});
