import { addMarginToCanvas } from "../utils/canvasSettings";
import { random, math } from "canvas-sketch-util";

import { greyScale, mainColor } from "../common/colors";

function drawCircle(col, row, cellW, cellH, context, margX, margY) {
  // i % 4 = 0, 1, 2, 3
  // const col = i % cols;
  // // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1;
  // const row = Math.floor(i / cols);
  const offsetW = cellW * col;
  const offsetH = cellH * row;

  context.beginPath();
  context.arc(
    margX + offsetW + cellW / 2,
    margY + offsetH + cellH / 2,
    cellW / 2,
    0,
    2 * Math.PI,
    false
  );
  context.fillStyle = mainColor;
  context.stroke();
}

export const generateCircleRows = (context, width, height) => {
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);
  const cols = 4;
  const rows = 4;
  const cellW = gridW / cols;
  const cellH = gridH / rows;

  const numCells = cols * rows;
  context.globalCompositeOperation="source-in";
  for (let i = 0; i < numCells; i++) {
    // i % 4 = 0, 1, 2, 3
    const col = i % cols;
    // // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1;
    const row = Math.floor(i / cols);
   // drawCircle(col, row, cellW, cellH, context, margX, margY);
    const offsetW = cellW * col;
    const offsetH = cellH * row;

    context.beginPath();
   
    context.arc(
      margX + offsetW + cellW / 2,
      margY + offsetH + cellH / 2,
      cellW / 2,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = mainColor;
    context.fill();

    context.stroke();
  }

  const cols2 = 5;
  const rows2 = 5;
  const numCells2 = cols2 * rows2;
  for (let i = 0; i < numCells2; i++) {
    // i % 4 = 0, 1, 2, 3
    const col = i % cols2;
    // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1;
    const row = Math.floor(i / cols2);

 // drawCircle(col, row, cellW, cellH, context, margX, margY);
const offsetW = cellW * col;
    const offsetH = cellH * row;

    const a = offsetW * col;
    const b = offsetH * row;
    console.log(col, row, a, i);
    context.beginPath();
    context.arc(
      margX + offsetW,
      margY + offsetH,
      cellW / 2,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = mainColor;
    context.stroke();
  }

  console.log("here", gridW, cellH, Math.PI);
};
