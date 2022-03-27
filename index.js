import canvasSketch from "canvas-sketch";

import { generateTriangeColumns } from "./sketches/triangleColumns";
import { generateTriangeSqareCells } from "./sketches/triangleSqareCells";
import { generateQadrupleTriangleSqareCells } from "./sketches/qadrupleTrianglesSqareCells";
import { generateSqareSegments } from "./sketches/sqareSegments";
import { generateCircleRows } from "./sketches/circleRows";

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    //generateTriangeColumns(context, width, height)
    //generateTriangeSqareCells(context, width, height);
    //generateQadrupleTriangleSqareCells(context, width, height);
   // generateSqareSegments(context, width, height);
    generateCircleRows(context, width, height);
  };
};

canvasSketch(sketch, settings);
