import { renderTable } from './utils/render.js';
import {
  TABLE_MATRIX,
  RECTANGLES,
  AMOUNT_ROW,
  AMOUNT_COL,
} from './constants.js';

try {
  renderTable({
    matrix: TABLE_MATRIX,
    rectangles: RECTANGLES,
    amountRow: AMOUNT_ROW,
    amountCol: AMOUNT_COL,
  });
} catch (e) {
  console.error(e)
}

