let grid = document.querySelector('.pixels');
const width = document.querySelector('#inputWidth');
const height = document.querySelector('#inputHeight');
const picker = document.querySelector('#colorPicker');
const form = document.querySelector('#sizePicker');


let rows = Number(height.value);
let columns = Number(width.value);
let isGrid = false;

let color = picker.value;
let table = document.querySelector('table');

let defaultColor = table.style.backgroundColor;

function MakeGrid(rows=5, columns=5){

  for (let i = 0; i < rows; i++) {
    var tRow = document.createElement('tr');
    for (let j = 0; j < columns; j++) {
      var tColumn = document.createElement('td');
      tRow.appendChild(tColumn);
    }
    table.appendChild(tRow);
  }
  isGrid = true;
}

form.addEventListener("change", event => {
  rows = Number(height.value);
  columns = Number(width.value);
});

form.addEventListener("submit", event =>
{ 
  if (isGrid) {
    rows = Number(height.value) + GetCurrentRowsCount();
    columns = Number(width.value) + GetCurrentCellsCount();
    MakeGrid(rows, columns);
    event.preventDefault();
  } else {
    MakeGrid(rows, columns);
    event.preventDefault();
  }
});
  
picker.addEventListener("change", event => {
  color = picker.value;
});

table.addEventListener("click", event => {
  if (event.target.nodeName.toLowerCase() === 'td')
    (event.target).style.backgroundColor = color;
});

table.addEventListener("dblclick", event => {
  if (event.target.nodeName.toLowerCase() === 'td')
  (event.target).style.backgroundColor = defaultColor;
});

function GetCurrentRowsCount(){
  let rowsCount = 0;
  table.forEach(element => {
    if(element.nodeName.toLowerCase() == 'tr')
    rowsCount++;
  });
  return rowsCount;
};

function GetCurrentCellsCount() {
  let cellsCount = 0;
  table.forEach(element => {
    if (element.nodeName.toLowerCase() == 'td')
      cellsCount++;
  });
  return cellsCount;
}