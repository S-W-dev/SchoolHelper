import {
  Load,
  Console
} from "./classes.js";

var canvas = document.getElementById('graph-canvas'),
    c = canvas.getContext('2d'),
    n = 100, // # of line segments

    // Window Size :: Smaller = more zoomed in
    xMin = -10, xMax = 10,
    yMin = -10, yMax = 10,

    math = mathjs(),
    expr = 'sin(x)',
    scope = { x: 0 },
    tree = math.parse(expr, scope);

drawCurve();

function drawCurve() {
  var percentX, percentY, // Between 0 and 1
      mathX, mathY, //Math Coordinates
      xPixel, yPixel; // Canvas Coordinates

  c.strokeStyle = 'purple';
  c.lineWidth = 1;
  c.beginPath();
  for(var i = 0; i < n; i++) {
    percentX = i/(n-1);
    mathX = percentX * (xMax - xMin) + xMin;
    mathY = evaluateMathExpr(mathX);
    percentY = (mathY - yMin) / (yMax - yMin);

    xPixel = percentX * canvas.width;
    yPixel = percentY * canvas.height;
    c.lineTo(xPixel, yPixel);
  }
  c.stroke();
}

function evaluateMathExpr(arg) {
  scope.x = arg;
  return tree.eval();
}

// settings loader
Load();
