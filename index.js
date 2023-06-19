const gridContainer = document.querySelector(".grid-container");
const colorPicker = document.querySelector(".color-picker");
const curSizeDisplay = document.querySelector(".curSizeDisplay");
const curColorDisplay = document.querySelector(".curColorDisplay");
const sizePicker = document.querySelector(".slider");
const clearBoardColor = document.querySelector(".clearBoard");

function clearGrid() {
  gridContainer.textContent = "";
}

function getCurrentColor() {
  return colorPicker.value;
}

function createBoxes(numberPerRow) {
  gridContainer.style.width = `${numberPerRow * 30}px`;
  const total = numberPerRow * numberPerRow + numberPerRow;
  const mod = numberPerRow + 1;
  for (let i = 1; i < total; i++) {
    const newDiv = document.createElement("div");

    if (i % mod === 0) {
      newDiv.style.cssText = "border: 0; height: 0; width: 100%";
    }

    newDiv.onmouseover = () => {
      newDiv.style.backgroundColor = getCurrentColor();
    };

    gridContainer.appendChild(newDiv);
  }
}

createBoxes(16);

sizePicker.oninput = () => {
  curSizeDisplay.textContent = `Current size: ${sizePicker.value}x${sizePicker.value}`;
  clearGrid();
  createBoxes(parseInt(sizePicker.value));
};

colorPicker.oninput = () => {
  curColorDisplay.textContent = `Current Color: ${colorPicker.value}`;
};

clearBoardColor.addEventListener("click", () => {
  clearGrid();
  createBoxes(parseInt(sizePicker.value));
});
