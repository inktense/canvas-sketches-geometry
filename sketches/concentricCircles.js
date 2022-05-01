import { addMarginToCanvas } from "../utils/canvasSettings";
import { random } from "canvas-sketch-util";

import { palette1 } from "../common/colors";

export const generateConcentricCircles = (context, width, height) => {
  const x = width / 2;
  const y = height / 2;
  const firstCircleRadius = x / 7;
  let radius = width;
  const step = x * 0.1;

  // Generat econcentric half circles.
  while (radius > 0) {
    context.beginPath();
    context.arc(x, y, radius, 0, 1 * Math.PI, false);
    context.fillStyle = random.pick(palette1);
    context.fill();

    context.beginPath();
    context.moveTo(x, y);
    context.arc(x, y, radius, 0, 0.5 * Math.PI, false);
    context.fillStyle = random.pick(palette1);
    context.fill();

    context.beginPath();
    context.arc(x, y, radius, 0, 1 * Math.PI, true);
    context.fillStyle = random.pick(palette1);
    context.fill();

    context.beginPath();
    context.moveTo(x, y);
    context.arc(x, y, radius, 0, 1.5 * Math.PI, true);
    context.fillStyle = random.pick(palette1);
    context.fill();

    radius -= step;
  }

  // Create first full circle.
  context.beginPath();
  context.arc(x, y, firstCircleRadius, 0, 2 * Math.PI, false);
  context.fillStyle = random.pick(a);
  context.fill();
};
