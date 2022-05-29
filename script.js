let grid = document.querySelector(".pad");
let mouseDown = false;
let gridSize = 16;
let mod = 0;

document.addEventListener("mousedown", () => {
  mouseDown = true;
});

document.addEventListener("mouseup", () => {
  mouseDown = false;
});


function gridGen() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add('cell');
      cell.addEventListener(
        "mouseover", function () {
          if (!mouseDown) return;
          if (mod == 0) cell.style.background = "#3C9EE7";
          else if (mod == 1) cell.style.background = "whitesmoke";
          else if (mod == 2) cell.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
          else if (mod == 3) cell.style.background = document.querySelector(".color").value;
          else return;
        });
      grid.appendChild(cell);
    }
  }
}

document.querySelector(".newGrid").addEventListener('click', () => {
  do gridSize = prompt("Enter new grid size"); while (isNaN(gridSize));
  if (grid) grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  while (grid.firstElementChild) grid.firstElementChild.remove();
  mod = 1;
  gridGen(gridSize);
});

document.querySelector(".default").addEventListener('click', () => { mod = 0 });
document.querySelector(".eraser").addEventListener('click', () => { mod = 1 });
document.querySelector(".rainbow").addEventListener('click', () => { mod = 2 });
document.querySelector(".color").addEventListener('click', () => { mod = 3 });
gridGen();