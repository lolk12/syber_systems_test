// Получаем минимальные и максимальные значения из всех имеющихся координат
export const getMimMaxCoords = (rectangles) => {
  const allXCoords = rectangles.map(item => [item.firstCoords[0], item.secondCoords[0]]).flat();
  const allYCoords = rectangles.map(item => [item.firstCoords[1], item.secondCoords[1]]).flat();

  let xMinCoord = Math.min(...allXCoords);
  let xMaxCoord = Math.max(...allXCoords);
  let yMinCoord = Math.min(...allYCoords);
  let yMaxCoord = Math.max(...allYCoords);

  return {
    xMinCoord,
    xMaxCoord,
    yMinCoord,
    yMaxCoord,
  }
}
