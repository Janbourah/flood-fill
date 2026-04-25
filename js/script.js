let img = [
  [1, 1, 0, 0, 0, 1],
  [0, 1, 0, 1, 1, 0],
  [1, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 1, 1, 0, 1],
];

const newColor = 2;

const renderGrid = () => {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";

  container.style.gridTemplateColumns = `repeat(${img[0].length}, 50px)`;

  for (let sr = 0; sr < img.length; sr++) {
    for (let sc = 0; sc < img[sr].length; sc++) {
      const cell = document.createElement("div");
      cell.classList.add("cell", `color-${img[sr][sc]}`);
      cell.textContent = img[sr][sc];

      cell.addEventListener("click", () => {
        startFloodFill(sr, sc);
      });
      container.appendChild(cell);
    }
  }
};

renderGrid();

const startFloodFill = (sr, sc) => {
  const originalColor = img[sr][sc];

  if (originalColor === newColor) {
    return;
  }

  fill(sr, sc, originalColor, newColor);

  renderGrid();
};

const fill = (sr, sc, originalColor, newColor) => {
  if (sr < 0 || sr >= img.length) {
    return;
  }

  if (sc < 0 || sc >= img[0].length) {
    return;
  }

  if (img[sr][sc] !== originalColor) {
    return;
  }

  img[sr][sc] = newColor;

  fill(sr - 1, sc, originalColor, newColor);
  fill(sr + 1, sc, originalColor, newColor);
  fill(sr, sc - 1, originalColor, newColor);
  fill(sr, sc + 1, originalColor, newColor);
};
