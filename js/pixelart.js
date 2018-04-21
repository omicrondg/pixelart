const grid = document.querySelector('#pixelsGrid');
const width = document.querySelector('#inputWidth');
const height = document.querySelector('#inputHeight');
const picker = document.querySelector('#colorPicker');
const form = document.querySelector('#sizePicker');
const createBtn = document.querySelector('#createGrid');
const clearBtn = document.querySelector('#clearGrid');

let rows = Number(height.value);
let columns = Number(width.value);
let isGrid = false;

let color = picker.value;


let defaultColor;

function MakeGrid() {

  for (let i = 0; i < rows; i++) {
    let tRow = document.createElement('tr');
    for (let j = 0; j < columns; j++) {
      let tColumn = document.createElement('td');
      tRow.appendChild(tColumn);
    }
    grid.appendChild(tRow);
  }
  isGrid = true;

  defaultColor = grid.style.backgroundColor;
}

form.addEventListener("change", event => {
  rows = Number(height.value);
  columns = Number(width.value);
});

form.addEventListener("submit", event => {
  const clearBtn = document.querySelector('#clearGrid');
  if (isGrid) {
    clearGrid();
    MakeGrid();
    event.preventDefault();
  } else {
    MakeGrid();
    event.preventDefault();
  }

});

picker.addEventListener("change", event => {
  color = picker.value;
});

grid.addEventListener("click", event => {
  if (event.target.nodeName.toLowerCase() === 'td')
    (event.target).style.backgroundColor = color;
});

grid.addEventListener("dblclick", event => {
  if (event.target.nodeName.toLowerCase() === 'td')
    (event.target).style.backgroundColor = defaultColor;
});

function clearGrid() {
  while (grid.childNodes.length != 0) {
    grid.childNodes.forEach(e => e.remove());
  }
}