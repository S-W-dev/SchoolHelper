import {
  Load,
  Console
} from "./classes.js";

var canvas = document.getElementById('graph-canvas'),
    c = canvas.getContext('2d'),
    n = 200, // # of line segments

    time = 0,
    timeIncrement = 0.1,
    timeMax = 25,

    // Window Size :: Smaller = more zoomed in
    xMin = -10, xMax = 10,
    yMin = -10, yMax = 10,

    math = mathjs(),
    expr = 'sin(x+t)*x',
    scope = {
      x: 0,
      t: 0
    },
    tree = math.parse(expr, scope);

drawCurve();
initInput();
startAnimation();

function drawCurve() {
  var percentX, percentY, // Between 0 and 1
      mathX, mathY, //Math Coordinates
      xPixel, yPixel; // Canvas Coordinates

  c.clearRect(0, 0, canvas.width, canvas.height)
  c.strokeStyle = 'purple';
  c.lineWidth = 1;
  c.beginPath();
  for(var i = 0; i < n; i++) {
    percentX = i/(n-1);

    //PARAMETRIC MODE: mathX = a function of time, mathY = a function of time

    mathX = percentX * (xMax - xMin) + xMin;
    mathY = evaluateMathExpr(mathX);
    percentY = (mathY - yMin) / (yMax - yMin);
    percentY = 1 - percentY; //flip Y
    xPixel = percentX * canvas.width;
    yPixel = percentY * canvas.height;
    c.lineTo(xPixel, yPixel);
  }
  c.stroke();
}

function evaluateMathExpr(arg) {
  scope.x = arg;
  scope.t = time;

  return tree.eval();
}

function initInput() {
  var input = $('#function-input');

  input.attr("placeholder", expr);

  input.keyup(function(event) {
    expr = input.val();
    try {
      tree = math.parse(expr, scope);
      drawCurve();
    } catch (err) {
      return;
    }

  });
}

function startAnimation() {
  window.requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame    ||
           function( callback ){
             window.setTimeout(callback, 1000 / 60);
           };
  })();
  (function animloop(){
    requestAnimFrame(animloop);
    render();
  }());
}

function render(){
  time += timeIncrement;
  if(time>=timeMax||time<=-timeMax){
    timeIncrement*=-1
  }
  try {
    drawCurve();
  } catch (err) {
    return;
  }
}

// settings loader
Load();
