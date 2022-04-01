import { addMarginToCanvas } from "../utils/canvasSettings";
import { random } from "canvas-sketch-util";

import { retroColors } from "../common/colors";

function drawCircle(context, x, y, radius) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = random.pick(retroColors);
  context.fill();
}

export const generateCircleRows = (context, width, height) => {
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);
  const cols = 7;
  const rows = 7;
  const cellW = gridW / cols;
  const cellH = gridH / rows;

  context.fillRect(0, 0, width, height);
  const numCells = cols * rows;
  for (let i = 0; i < numCells; i++) {
    // i % 4 = 0, 1, 2, 3
    const col = i % cols;
    // // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1;
    const row = Math.floor(i / cols);
    // drawCircle(col, row, cellW, cellH, context, margX, margY);
    const offsetW = cellW * col;
    const offsetH = cellH * row;

    // The source image is combined by using an exclusive OR with the destination image
    context.globalCompositeOperation = "xor";

    const x = margX + offsetW + cellW / 2;
    const y = margY + offsetH + cellH / 2;
    const radius = cellW / 2;
    drawCircle(context, x, y, radius);
  }
  
  context.globalCompositeOperation="lighter"

  const numCellsSecond = (cols + 1) * (rows + 1);
  for (let i = 0; i < numCellsSecond; i++) {
    // i % 4 = 0, 1, 2, 3
    const col = i % (cols + 1);
    // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1;
    const row = Math.floor(i / (cols + 1));

    const offsetW = cellW * col;
    const offsetH = cellH * row;

    const x = margX + offsetW;
    const y = margY + offsetH;
    const radius = cellW / 2;
    drawCircle(context, x, y, radius);
  }
};
