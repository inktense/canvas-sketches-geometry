import { addMarginToCanvas } from "../utils/canvasSettings";
import { random } from "canvas-sketch-util";

import { greyScale, mainColor } from "../common/colors";

export const generateTriangeSqareCells = (context, width, height) => {
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);
  const cols = 4;
  const rows = 4;
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

    // Create left triangle
    context.beginPath();
    context.fillStyle = mainColor;
    // Selecting upper left corner position.
    context.moveTo(margX + offsetW, margY + offsetH);
    // Selecting the lower right corner position.
    context.lineTo(margX + cellW + offsetW, margY + cellW + offsetH);
    // Selecting the lower left corner.
    context.lineTo(margY + offsetW, margX + cellW + offsetH);
    context.fill();
    context.save();

    // Create right triangle
    context.beginPath();
    context.fillStyle = random.pick(greyScale);;
    // Selecting upper left corner position.
    context.moveTo(margX + offsetW, margY + offsetH);
    // Selecting the lower right corner position.
    context.lineTo(margX + cellW + offsetW, margY + offsetH);
    // Selecting the lower left corner.
    context.lineTo(margY + cellW + offsetW, margX + cellW + offsetH);
    context.fill();
    context.save();
  }
};
