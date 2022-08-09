const tiles = document.querySelectorAll(".tile");
const modalContent = document.querySelector(".modal-content");

document.addEventListener("click", handleHide);

tiles.forEach((tile) => {
  tile.addEventListener("click", (e) => handleTile(e, tile));
});

function handleHide(e) {
  let hide = true;
  tiles.forEach((tile) => {
    for (let i = 0; i < e.path.length; i++) {
      const element = e.path[i];
      if (element === tile || element === modalContent) {
        hide = false;
      }
    }
  });
  if (hide) {
    modalContent.classList.remove("show-model-content");
    modalContent.style.cssText = `
      top: 0;
    `;
  }
}

function handleTile(e, tile) {
  const tileArea = tile.getBoundingClientRect();
  modalContent.style.cssText = `
    top: ${tileArea.top}px;
    transform: translateX(0);
  `;
  modalContent.classList.add("show-model-content");
}
