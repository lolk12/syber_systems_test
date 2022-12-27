const errorNotValidParamsTable = () => {
  throw new Error('Not valid params table');
}
const errorNotCorrectMatrix = () => {
  throw new Error('Matrix undefined or array is empty');
}

const errorNotCorrectRectangles = () => {
  throw new Error('Rectangles undefined or array is empty');
}

export const checkError = ({
  amountRow,
  amountCol,
  matrix,
  rectangles
}) => {
  if(!amountRow || !amountCol) {
    errorNotCorrectMatrix();
  }

  if(!matrix || !matrix.length) {
    errorNotValidParamsTable();
  }

  if(!rectangles || !rectangles.length) {
    errorNotCorrectRectangles();
  }
}
