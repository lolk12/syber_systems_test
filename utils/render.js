import { getIndexTableItem } from './getIndexTableItem.js';
import { normalizeRectanglesCoords } from './normalizeCoord.js';
import { checkError } from './erros.js';

import {
  TABLE_ID,
  TABLE_ITEM_ACTIVE_CLASS,
  TABLE_ITEM_CLASS,
} from '../constants.js';

const paintRectangles = ({
   amountRow,
   amountCol,
   matrix,
   rectangles
}) => {
  const coords = normalizeRectanglesCoords(rectangles, amountRow, amountCol)

  matrix.forEach((row, indexRow) => {
    row.forEach((col, indexCol) => {
      coords.forEach((coord) => {
        const {
          xMaxCoord,
          xMinCoord,
          yMaxCoord,
          yMinCoord,
        } = coord;

        // Окрашиваем элементы таблицы в нужный нам цвет
        if(indexRow >= yMinCoord && indexRow <= yMaxCoord && indexCol >= xMinCoord && indexCol <= xMaxCoord) {
          col.classList.add('class', TABLE_ITEM_ACTIVE_CLASS);
        }
      })
    })
  })
}

const renderTableItems = (matrix, tableEl) =>
  matrix.map((row, rowIndex) => row.map((col, colIndex) => {
    const tableItem = document.createElement('div');

    tableItem.id = getIndexTableItem(rowIndex, colIndex);
    tableItem.classList.add('class', TABLE_ITEM_CLASS);

    tableEl.appendChild(tableItem);
    return tableItem;
}))

export const renderTable = (args) => {
  checkError(args)
  const {
    amountRow,
    amountCol,
    matrix,
  } = args;

  const tableEl = document.createElement('div');
  tableEl.id = TABLE_ID;
  tableEl.style.gridTemplateRows = `repeat(${amountRow}, 1fr)`
  tableEl.style.gridTemplateColumns = `repeat(${amountCol}, 1fr)`

  const newMatrix = renderTableItems(matrix, tableEl);
  paintRectangles({
    ...args,
    matrix: newMatrix,
  });


  document.body.appendChild(tableEl);
}
