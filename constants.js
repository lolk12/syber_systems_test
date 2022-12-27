// колличество строк в таблице
export const AMOUNT_ROW = 25
// колличество колонок в таблице
export const AMOUNT_COL = 25;
export const TABLE_ID = 'table';
export const TABLE_ITEM_CLASS = 'table-item';
export const TABLE_ITEM_ACTIVE_CLASS = 'table-item_active';

// начальная матрица для удобства рендера таблицы
export const TABLE_MATRIX = new Array(AMOUNT_COL).fill(new Array(AMOUNT_ROW).fill(0))

// Прямоугольники
export const RECTANGLES = [
  {
    firstCoords: [0, 3],
    secondCoords: [3, 6],
  },
  {
    firstCoords: [10, 15],
    secondCoords: [12, 20],
  }
]
