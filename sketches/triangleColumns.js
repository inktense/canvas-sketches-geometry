import { addMarginToCanvas } from "../utils/canvasSettings";
import { random } from "canvas-sketch-util";

import { greyScale } from "../common/colors";

export const generateTriangeColumns = (context, width, height) => {
  // Retrieveing actual working space
  const { gridW, margX, margY } = addMarginToCanvas(width, height);
  const cols = 4;
  const cellW = gridW / cols;

  for (let i = 0; i < cols; i++) {
    // Width of a collumn cell
    const offset = cellW * i;

    // Create left triangle
    context.beginPath();
    context.fillStyle = random.pick(greyScale);
    // Selecting upper left corner position.
    context.moveTo(margX + offset, margY);
    // Selecting the lower right corner position.
    context.lineTo(margY + cellW + offset, margX + gridW);
    // Selecting the lower left corner.
    context.lineTo(margY + offset, margX + gridW);
    context.fill();
    context.save();

    // Create right triangle
    context.beginPath();
    context.fillStyle = random.pick(greyScale);
    // Selecting upper left corner position.
    context.moveTo(margX + offset, margY);
    // Selecting the upper right corner position.
    context.lineTo(margX + cellW + offset, margY);
    // Selecting the lower right cormer.
    context.lineTo(margX + cellW + offset, margY + gridW);
    context.fill();
    context.save();
  }
};
