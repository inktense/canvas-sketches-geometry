import { addMarginToCanvas } from "../utils/canvasSettings";
import { random } from "canvas-sketch-util";

import { retroColors, rainbowColors } from "../common/colors";

export const generateWindowOne = (context, width, height) => {
  const widthOffset = (width / 100) * 35;
  const heightOffset = (height / 100) * 20;
  const sqareHeight = (width - (widthOffset * 2)) / 3;
  const edgeArcRadius = (width - (widthOffset * 2)) / 2;
  console.log('widthOffset ', widthOffset, sqareHeight * 3)

  const cols = 3;
  const rows = 4;
//   const cellW = gridW / cols;
//   const cellH = gridH / rows;
  const numCells = cols * rows;

  context.beginPath();
  context.arc(width / 2, heightOffset + sqareHeight, edgeArcRadius, 0, 2 * Math.PI, false);
  context.fillStyle = random.pick(rainbowColors);
  context.strokeStyle = "red";
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(width / 2, heightOffset + sqareHeight, sqareHeight / 2, 0, 2 * Math.PI, false);
  context.fillStyle = random.pick(rainbowColors);
  context.fill();
  console.log(width, height, widthOffset);
  
  for (let i = 0; i < numCells; i++) {
    // i % 4 = 0, 1, 2, 3
    const col = i % cols;
    // // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1;
    const row = Math.floor(i / cols);
    const x = widthOffset;
    const y = heightOffset + sqareHeight;

    const offsetW = sqareHeight * col;
    const offsetH = sqareHeight * row;
    console.log('col = ', col, 'row = ', row )

   // context.beginPath();
    context.fillStyle = random.pick(rainbowColors);
    context.fillRect(x, y, sqareHeight + offsetW, sqareHeight + offsetH);
    

    // context.strokeStyle = "#0000ff";
    // context.lineWidth   = 1;
    // context.strokeRect(x, y, sqareHeight + offsetW, sqareHeight + offsetH);
    
   // context.fill();
   // context.stroke();

    // // The source image is combined by using an exclusive OR with the destination image
    // context.globalCompositeOperation = "xor";

    // const x = margX + offsetW + cellW / 2;
    // const y = margY + offsetH + cellH / 2;
    // const radius = cellW / 2;
    // drawCircle(context, x, y, radius);
  }
};
