import {
  Load,
  Console,
  LoadNav
} from "./classes.js";

for(var inputs = 0; inputs < 10; inputs++) {
  $("#function-inputs").append("\
  <div class='function-input-group'>\
    <p class='function-input-text'>y<sub>"+ (inputs+1) + "</sub>=</p><input class='function-input' type='text' name='function-input' value='' placeholder='Enter a function' id='function-input'><div class='color-picker-"+inputs+"'></div>\
  </div>\
  ");
}

var canvas = document.getElementById('graph-canvas'),
    lineColors = ["#a34db3", "#000000"],

    c = canvas.getContext('2d'),
    n = 200, // # of line segments

    time = 0,
    timeIncrement = 0.1,
    timeMax = 25,

    // Window Size :: Smaller = more zoomed in
    xMin = -10, xMax = 10,
    yMin = -10, yMax = 10,

    math = mathjs(),
    exprs = ['sin(x+t)*x', 'sin(2*x-t)'],
    scope = {
      x: 0,
      t: 0
    },
    trees = [];

for (var k = 0; k < exprs.length; k++) {
  trees[k] = math.parse(exprs[k], scope);
}

drawCurves();
initInput();
startAnimation();

var pickrs = [];

for(var q = 0; q < exprs.length; q++) {
  var pickr = Pickr.create({
      el: '.color-picker-'+q,
      theme: 'nano',
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

  pickrs.push(pickr);
}

pickrs[0].on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColors[0] = color;
  console.log(color);
});

pickrs[1].on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColors[1] = color;
  console.log(color);
});

pickrs[2].on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColors[2] = color;
  console.log(color);
});

pickrs[3].on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColors[3] = color;
  console.log(color);
});

pickrs[4].on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColors[4] = color;
  console.log(color);
});

pickrs[5].on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColors[5] = color;
  console.log(color);
});

pickrs[6].on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColors[6] = color;
  console.log(color);
});

pickrs[7].on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColors[7] = color;
  console.log(color);
});

pickrs[8].on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColors[8] = color;
  console.log(color);
});

pickrs[9].on('save', (...args) => {
  var color = args[0].toHEXA().toString();
  lineColors[9] = color;
  console.log(color);
});

function drawCurves() {
  var percentX, percentY, // Between 0 and 1
      mathX, mathYs = [], //Math Coordinates
      xPixel, yPixel; // Canvas Coordinates

  c.clearRect(0, 0, canvas.width, canvas.height);
  for(var j = 0; j < exprs.length; j++) {
    c.strokeStyle = lineColors[j];
    c.lineWidth = 1;
    c.beginPath();
    for(var i = 0; i < n; i++) {
      percentX = i/(n-1);

      //PARAMETRIC MODE: mathX = a function of time, mathY = a function of time

      mathX = percentX * (xMax - xMin) + xMin;
      mathYs[j] = evaluateMathExpr(mathX, j);
      percentY = (mathYs[j] - yMin) / (yMax - yMin);
      percentY = 1 - percentY; //flip Y
      xPixel = percentX * canvas.width;
      yPixel = percentY * canvas.height;
      c.lineTo(xPixel, yPixel);
    }
    c.stroke();
  }
}

function evaluateMathExpr(arg, ind) {
  scope.x = arg;
  scope.t = time;

  return trees[ind].eval();
}

function initInput() {
  var input = $('#function-input');

  input.attr("placeholder", exprs[0]);

  input.keyup(function(event) {
    exprs[0] = input.val();
    try {
      for (var l = 0; l < exprs.length; l++) {
        trees[l] = math.parse(exprs[l], scope);
      }
      drawCurves();
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
    drawCurves();
  } catch (err) {
    return;
  }
}

// settings loader
LoadNav();
Load();
