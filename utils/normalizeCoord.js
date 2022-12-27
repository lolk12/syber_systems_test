import { getMimMaxCoords } from './getMimMaxCoords.js';
import { getRatio } from './getRatio.js';

// Нормализуем отдельные координаты имеющейся точки
const normalizeCoord = (val, min, ratio) => (val - min) * ratio;

// Нормализуем координаты для конкретной точки относительно имеющейся таблицы
const normalizeCoords = ({ coords, ratioX, ratioY, xMinCoord,  yMinCoord }) => {
  const [x, y] = coords;
  const newX = Math.round(normalizeCoord(x, xMinCoord, ratioX));
  const newY = Math.round(normalizeCoord(y, yMinCoord, ratioY));
  return [newX, newY];
}

// Нормализуем все координаты относительно имеющейся таблицы
export const normalizeRectanglesCoords = (rectangles, amountRow, amountCol) => {
  // Находим минимальные и максимальные координаты для всех прямоугольников
  const { xMaxCoord, xMinCoord, yMaxCoord, yMinCoord } = getMimMaxCoords(rectangles);

  const ratioY = getRatio(amountRow, yMinCoord, yMaxCoord);
  const ratioX = getRatio(amountCol, xMinCoord, xMaxCoord);

  return rectangles.map((item) => {
    let newItem = {...item};
    newItem.firstCoords = normalizeCoords({
      coords: newItem.firstCoords,
      ratioX,
      ratioY,
      xMinCoord,
      yMinCoord,
    });

    newItem.secondCoords = normalizeCoords({
      coords: newItem.secondCoords,
      ratioX,
      ratioY,
      xMinCoord,
      yMinCoord,
    })

    newItem = {
      ...newItem,
      // Находим минимальные и максимальные координаты для конкретного прямоугольника
      ...getMimMaxCoords([newItem]),
    }
    return newItem;
  });
}

