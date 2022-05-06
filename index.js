import canvasSketch from "canvas-sketch";

import { generateTriangeColumns } from "./sketches/triangleColumns";
import { generateTriangeSqareCells } from "./sketches/triangleSqareCells";
import { generateQadrupleTriangleSqareCells } from "./sketches/qadrupleTrianglesSqareCells";
import { generateSqareSegments } from "./sketches/sqareSegments";
import { generateCircleRows } from "./sketches/circleRows";
import { generateConcentricCircles } from "./sketches/concentricCircles";
import { generateWindowOne } from "./sketches/windowOne";

const settings = {
  dimensions: [1600, 1200],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#A5CAA8";
    context.fillRect(0, 0, width, height);

    //generateTriangeColumns(context, width, height)
    //generateTriangeSqareCells(context, width, height);
    //generateQadrupleTriangleSqareCells(context, width, height);
    //generateSqareSegments(context, width, height);
    //generateCircleRows(context, width, height);
    //generateConcentricCircles(context, width, height);
    generateWindowOne(context, width, height);
  };
};

canvasSketch(sketch, settings);
