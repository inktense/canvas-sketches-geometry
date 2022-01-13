import { addMarginToCanvas } from "../utils/canvasSettings";
import { random } from "canvas-sketch-util";

import { greyScale, mainColor } from "../common/colors";

const generateCellContent = (params) => {
  const { context, margX, margY, offsetW, offsetH, cellW } = params;
  const middleCoordinate = cellW / 2;

  // Create upper triangle
  context.beginPath();
  context.fillStyle = random.pick(greyScale);
  context.moveTo(margX + offsetW, margY + offsetH);
  context.lineTo(margX + cellW + offsetW, margY + offsetH);
  context.lineTo(
    margY + middleCoordinate + offsetW,
    margX + middleCoordinate + offsetH
  );
  context.fill();
  context.save();

  // Create bottom triangle
  context.beginPath();
  context.fillStyle = mainColor;
  context.moveTo(margX + offsetW + cellW, margY + offsetH + cellW);
  context.lineTo(margY + offsetW, margX + cellW + offsetH);
  context.lineTo(
    margY + middleCoordinate + offsetW,
    margX + middleCoordinate + offsetH
  );
  context.fill();
  context.save();

  // Create right triangle
  context.beginPath();
  context.fillStyle = random.pick(greyScale);
  context.moveTo(margX + offsetW + cellW, margY + offsetH);
  context.lineTo(margY + cellW + offsetW, margX + cellW + offsetH);
  context.lineTo(
    margY + middleCoordinate + offsetW,
    margX + middleCoordinate + offsetH
  );
  context.fill();
  context.save();

  // Create left triangle
  context.beginPath();
  context.fillStyle = random.pick(greyScale);
  context.moveTo(margX + offsetW, margY + offsetH);
  context.lineTo(margY + offsetW, margX + cellW + offsetH);
  context.lineTo(
    margY + middleCoordinate + offsetW,
    margX + middleCoordinate + offsetH
  );
  context.fill();
  context.save();
};

export const generateQadrupleTriangleSqareCells = (context, width, height) => {
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);
  const cols = 6;
  const rows = 6;
  const cellW = gridW / cols;
  const cellH = gridH / rows;

  const numCells = cols * rows;

  for (let i = 0; i < numCells; i++) {
    // i % 4 = 0, 1, 2, 3
    const col = i % cols;
    // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1;
    const row = Math.floor(i / cols);
    const offsetW = cellW * col;
    const offsetH = cellH * row;

    generateCellContent({ context, margX, margY, offsetW, offsetH, cellW });
  }
};
