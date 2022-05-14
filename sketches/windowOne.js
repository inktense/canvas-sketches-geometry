import { addMarginToCanvas } from "../utils/canvasSettings";
import { random } from "canvas-sketch-util";

import { mainColor, retroHalfColors } from "../common/colors";

export const generateWindowOne = (context, width, height) => {
  const widthOffset = (width / 100) * 35;
  const heightOffset = (height / 100) * 20;
  const sqareHeight = (width - (widthOffset * 2)) / 3;
  const edgeArcRadius = (width - (widthOffset * 2)) / 2;

  const cols = 3;
  const rows = 4;
  const numCells = cols * rows;

  // Outer circle
  context.beginPath();
  context.arc(width / 2, heightOffset + sqareHeight, edgeArcRadius, 0, 1 * Math.PI, true);
  context.fillStyle = random.pick(retroHalfColors);
  context.strokeStyle = mainColor;
  context.lineWidth   = 2;
  context.fill();
  context.stroke();

  context.beginPath();
  context.moveTo(width / 2, heightOffset + sqareHeight);
  context.arc(width / 2, heightOffset + sqareHeight, edgeArcRadius, 0, 1.5 * Math.PI, true);
  context.fillStyle = random.pick(retroHalfColors);
  context.strokeStyle = mainColor;
  context.lineWidth   = 2;
  context.fill();
  context.stroke();

  context.beginPath();
  context.moveTo(width / 2, heightOffset + sqareHeight);
  context.lineTo(width / 2, sqareHeight);
  context.stroke();

  // Circle border
  context.beginPath();
  context.arc(width / 2, heightOffset + sqareHeight, edgeArcRadius, 0, 1 * Math.PI, true);
  context.lineWidth   = 15;
  context.stroke();

  // Inner circle
  context.beginPath();
  context.arc(width / 2, heightOffset + sqareHeight, sqareHeight / 2, 0, 2 * Math.PI, false);
  context.fillStyle = random.pick(retroHalfColors);
  context.strokeStyle = mainColor;
  context.lineWidth   = 2;
  context.fill();
  context.stroke();

  context.strokeStyle = mainColor;
  context.lineWidth   = 15;
  context.strokeRect(widthOffset, heightOffset + sqareHeight, sqareHeight * cols, sqareHeight * rows);
  
  for (let i = 0; i < numCells; i++) {
    // i % 4 = 0, 1, 2, 3
    const col = i % cols;
    // // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1;
    const row = Math.floor(i / cols);
    const x = widthOffset;
    const y = heightOffset + sqareHeight;

    const offsetW = sqareHeight * col;
    const offsetH = sqareHeight * row;

    context.fillStyle = random.pick(retroHalfColors);
    console.log(random.pick(retroHalfColors))
    console.log(sqareHeight + offsetW, sqareHeight + offsetH)
    context.fillRect(x + offsetW, y + offsetH, sqareHeight, sqareHeight);
    

    context.strokeStyle = mainColor;
    context.lineWidth   = 2;
    context.strokeRect(x + offsetW, y + offsetH, sqareHeight, sqareHeight);
  }
};
