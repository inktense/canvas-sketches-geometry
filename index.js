import canvasSketch from "canvas-sketch"

import { generateTriangeColumns } from "./sketches/triangleColumns"

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    generateTriangeColumns(context, width, height)

  };
};

canvasSketch(sketch, settings);
