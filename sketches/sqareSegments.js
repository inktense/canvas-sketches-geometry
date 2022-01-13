import { addMarginToCanvas } from "../utils/canvasSettings";
import { random } from "canvas-sketch-util";

import { greyScale, mainColor } from "../common/colors";

export const generateSqareSegments = (context, width, height) => {
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);

  const halfW = gridW / 2 + margX;
  const halfH = gridH / 2 + margY;

  const quarterW = (halfW - margX) / 2;
  const quarterH = (halfH - margY) / 2;

  console.log("gridW, gridH => ", gridW, gridH, "half => ", quarterW, halfH);

  //--------------------------------------------------------------
  // Outer triangles
  //--------------------------------------------------------------
  // Create upper triangle
  context.beginPath();
  context.fillStyle = random.pick(greyScale);
  context.moveTo(margX, margY);
  context.lineTo(margX + gridW, margY);
  context.lineTo(halfW, halfH);
  context.fill();
  context.save();

  // Create bottom triangle
  context.beginPath();
  context.fillStyle = random.pick(greyScale);
  context.moveTo(margX + gridW, margY);
  context.lineTo(margX + gridW, margY + gridW);
  context.lineTo(halfW, halfH);
  context.fill();
  context.save();

  // Create right triangle
  context.beginPath();
  context.fillStyle = random.pick(greyScale);
  context.moveTo(margX + gridW, margY + gridW);
  context.lineTo(margX, margY + gridW);
  context.lineTo(halfW, halfH);
  context.fill();
  context.save();

  // Create left triangle
  context.beginPath();
  context.fillStyle = random.pick(greyScale);
  context.moveTo(margX, margY);
  context.lineTo(margX, margY + gridW);
  context.lineTo(halfW, halfH);
  context.fill();
  context.save();

  //--------------------------------------------------------------
  // Inner triangles
  //--------------------------------------------------------------
  // Create upper triangle
  context.beginPath();
  context.fillStyle = mainColor;
  context.moveTo(quarterW + margX, margY);
  context.lineTo(quarterW * 3 + margX, margY);
  context.lineTo(halfW, quarterH + margY);
  context.fill();
  context.save();

  // Create bottom triangle
  context.beginPath();
  context.fillStyle = mainColor;
  context.moveTo(quarterW + margX, quarterH * 4 + margY);
  context.lineTo(quarterW * 3 + margX, quarterH * 4 + margY);
  context.lineTo(halfW, quarterH * 3 + margY);
  context.fill();
  context.save();

  // Create right triangle
  context.beginPath();
  context.fillStyle = mainColor;
  context.moveTo(quarterW * 4 + margX, quarterH + margY);
  context.lineTo(quarterW * 4 + margX, quarterH * 3 + margY);
  context.lineTo(quarterW * 3 + margX, halfH);
  context.fill();
  context.save();

  // Create left triangle
  context.beginPath();
  context.fillStyle = mainColor;
  context.moveTo(margX, quarterH + margY);
  context.lineTo(margX, quarterH * 3 + margY);
  context.lineTo(quarterW + margX, halfH);
  context.fill();
  context.save();
};
