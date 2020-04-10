import {
  Load,
  Console,
  LoadNav
} from "./classes.js";

var canvas = document.getElementById('graph-canvas'),
    lineColor = "#a34db3",

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

const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'
    position: 'top-end',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: true
        }
    }
});

pickr.on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColor = color;
});

function drawCurve() {
  var percentX, percentY, // Between 0 and 1
      mathX, mathY, //Math Coordinates
      xPixel, yPixel; // Canvas Coordinates

  c.clearRect(0, 0, canvas.width, canvas.height)
  c.strokeStyle = lineColor;
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
LoadNav();
Load();
