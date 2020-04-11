import {
  Load,
  Console,
  LoadNav,
  Data,
  Options
} from "./classes.js";

for (var inputs = 0; inputs < Options.getItem('numOfInputs'); inputs++) {
  $("#function-inputs").append("\
  <div class='function-input-group'>\
    <p class='function-input-text'>y<sub>" + (inputs + 1) + "</sub>=</p><input index='" + inputs + "' class='function-input' type='text' name='function-input' value='' placeholder='Enter a function'><div class='color-picker-" + inputs + "'></div>\
  </div>\
  ");
}

var canvas = document.getElementById('graph-canvas'),
  lineColors = [],

  c = canvas.getContext('2d'),
  n = 500, // # of line segments

  time = 0,
  timeIncrement = 0.1,
  timeMax = 25,

  // Scale of graph,
  scale = 1.1,
  xMin = -11/scale,
  xMax = 11/scale,
  yMin = -11/scale,
  yMax = 11/scale,

  origin = {
    x: 0,
    y: 0
  },

  math = mathjs(),
  exprs = [],
  scope = {
    x: 0,
    t: 0
  },
  trees = [],

  inputs = document.getElementsByClassName("function-input");

for (var k = 0; k < inputs.length; k++) {
  exprs[k] = ''; // Set exprs elements
  lineColors[k] = "#42445A"; // Set all lines to default color
}

// add in all the saved expressions
for (var z = 0; z < inputs.length; z++) {
  exprs[z] = Data.Get("exprs_" + z);
  if(exprs[z] == undefined) {
    inputs[z].setAttribute('placeholder', "Enter a function");
  } else {
    inputs[z].setAttribute('value', Data.Get("exprs_" + z, ""));
  }
}


  for (var m = 0; m < inputs.length; m++) {
    try {
      trees[m] = math.parse(exprs[m], scope);
      console.log("Tree: " + trees[m]);
    } catch {

    }
  }



drawCurves();
initInput();
startAnimation();

var pickrs = [];

for (var q = 0; q < inputs.length; q++) {

  var pickr = Pickr.create({
    el: '.color-picker-' + q,
    theme: 'nano',
    position: 'top-end',

    default: Data.Get("color_" + q, '#42445a'),

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

for(var p = 0; p < pickrs.length; p++) {
  handlePicker(p);
}

function handlePicker(p) {
  pickrs[p].on('save', (...args) => {
    var color = args[0].toHEXA().toString();
    lineColors[p] = color;
    Console.log(color);
    Data.Set("color_"+p, color);
  });
  pickrs[p].on('init', (...args) => {
    var color = args[0]["_color"].toHEXA().toString();
    lineColors[p] = color;
    Console.log(color);
    Data.Set("color_" + p, color);
  });
}

function drawCurves() {
  var percentX, percentY, // Between 0 and 1
    mathX, mathYs = [], //Math Coordinates
    xPixel, yPixel; // Canvas Coordinates

  c.clearRect(0, 0, canvas.width, canvas.height);

  //draw axis
  c.strokeStyle = "#00000080";
  c.lineWidth = 1;
  c.beginPath();

  //X axis
  percentY = (origin.y - yMin) / (yMax - yMin);
  percentY = 1 - percentY;
  yPixel = percentY * canvas.height;
  c.moveTo(0, yPixel);
  c.lineTo(canvas.width, yPixel);

  //Y axis
  percentX = (origin.x - xMin) / (xMax - xMin);
  console.log(percentX);
  percentX = 1 - percentX;
  console.log(percentX);
  xPixel = percentX * canvas.height;
  c.moveTo(xPixel, 0);
  c.lineTo(xPixel, canvas.height);

  c.stroke();

  for (var j = 0; j < inputs.length; j++) {
    c.strokeStyle = lineColors[j];
    c.lineWidth = 1;
    c.beginPath();
    for (var i = 0; i < n; i++) {
      percentX = i / (n - 1);

      //PARAMETRIC MODE: mathX = a function of time, mathY = a function of time

      mathX = percentX * (xMax - xMin) + xMin + origin.x;
      mathYs[j] = evaluateMathExpr(mathX, j) + origin.y;
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

  try{
    return trees[ind].eval();
  } catch {
    return;
  }

}

function initInput() {
  $("#function-inputs").delegate("input", "keyup", function () {
    Console.log(this.getAttribute("index"));
    exprs[this.getAttribute("index")] = this.value;
    Data.Set("exprs_" + this.getAttribute("index"), this.value);

    for (var h = 0; h < inputs.length; h++) {
      try {
        trees[h] = math.parse(exprs[h], scope);
      } catch (err) {

      }
    }
    drawCurves();

  });
}

function startAnimation() {
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();
  (function animloop() {
    requestAnimFrame(animloop);
    render();
  }());
}

function render() {
  time += timeIncrement;
  if (time >= timeMax || time <= -timeMax) {
    timeIncrement *= -1
  }
  try {
    drawCurves();
  } catch (err) {
    return;
  }
}

if (canvas.addEventListener) {
  canvas.addEventListener('DOMMouseScroll',handleScroll,false); //Firefox
  canvas.addEventListener('mousewheel',handleScroll,false); //Other browsers
} else if(elem.attachEvent){
    elem.attachEvent ("onmousewheel", handleScroll);
}

var lastX=canvas.width/2, lastY=canvas.height/2;
var dragStart,dragged;
canvas.addEventListener('mousedown',function(evt){
	document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
	lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
	lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
	dragStart = {
    x: lastX,
    y: lastY
  };
	dragged = false;
},false);
canvas.addEventListener('mousemove',function(evt){
	lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
	lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
	dragged = true;
	if (dragStart){
    var pt = {
      x: lastX,
      y: lastY
    };
		origin.x=(origin.x-(pt.x-dragStart.x)/(273*scale));
    origin.y=(origin.y-(pt.y-dragStart.y)/(273*scale));
		drawCurves();
	}	},false);
canvas.addEventListener('mouseup',function(evt){
	dragStart = null;
	if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
},false);

var mouseWheelTotal = 1;

function zoom (clicks) {
			var pt = {
        x: lastX,
        y: lastY
      };
      mouseWheelTotal += clicks;
      Console.log("scrolling");
			//c.translate(pt.x,pt.y);
      scale=Math.pow(1.1,mouseWheelTotal),
      xMin = -11/scale,
      xMax = 11/scale,
      yMin = -11/scale,
      yMax = 11/scale,
			//c.translate(-pt.x,-pt.y);
			drawCurves();
		}

function handleScroll (evt) {
  var delta = evt.wheelDelta ? evt.wheelDelta/80 : evt.detail ? -evt.detail : 0;
	if (delta) zoom(delta);
	return evt.preventDefault() && false;
};

// settings loader
LoadNav();
Load();
