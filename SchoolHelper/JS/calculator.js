import {
  Load,
  // Console,
  LoadNav
  // Data,
  // Options
} from "./classes.js";

// var graphMode = Options.getItem('mode');

// if (graphMode == 'function') {
//   for (var inputs = 0; inputs < Options.getItem('numOfInputs'); inputs++) {
//     $("#function-inputs").append("\
//     <div class='function-input-group'>\
//       <p class='function-input-text'>y<sub>" + (inputs + 1) + "</sub>=</p><input index='" + inputs + "' class='function-input' type='text' name='function-input' value='' placeholder='Enter a function'><div class='color-picker-" + inputs + "'></div>\
//     </div>\
//     ");
//   }
// } else if (graphMode == 'parametric') {
//   for (var inputs = 0; inputs < Options.getItem('numOfInputs'); inputs++) {
//     $("#function-inputs").append("\
//     <div class='function-input-group'>\
//       <p class='function-input-text'>x<sub>" + (inputs + 1) + "</sub>=</p><input index='" + (2*inputs) + "' class='function-input' type='text' name='function-input' value='' placeholder='Enter a function'>\
//       <p class='function-input-text'>y<sub>" + (inputs + 1) + "</sub>=</p><input index='" + (2*inputs+1) + "' class='function-input' type='text' name='function-input' value='' placeholder='Enter a function'><div class='color-picker-" + inputs + "'></div>\
//     </div>\
//     ");
//   }
// }

// var canvas = document.getElementById('graph-canvas'),
//   lineColors = [],
//   tOrigMin = -100,
//   tOrigMax = 100,

//   c = canvas.getContext('2d'),
//   n = 500, // # of line segments

//   time = 0,
//   timeIncrement = 0.1,
//   timeMax = 25,

//   // Scale of graph,
//   scale = 1.1,
//   xMin = -11/scale,
//   xMax = 11/scale,
//   yMin = -11/scale,
//   yMax = 11/scale,
//   tMax = tOrigMax, //parametric
//   tMin = tOrigMin,

//   origin = {
//     x: 0,
//     y: 0
//   },

//   math = mathjs(),
//   exprs = [],
//   functionScope = {
//     x: 0,
//     t: 0
//   },
//   parametricScope = {
//     t: 0
//   },

//   trees = [],

//   pickrs = [],

//   inputs = document.getElementsByClassName("function-input");

// // add in all the saved expressions

// for (var a = 0; a < inputs.length;) {
//     try{exprs[a] = (JSON.parse(Data.Get("exprs_" + a))[Options.getItem("mode")])} catch {
//       Data.Set("exprs_" + a, `{"function":"","parametric":["",""]}`)
//     };
//     //console.log(Data.Get("exprs_" + a));
//     // Set exprs elements
//     if (Options.getItem("mode") == "function") {
//       if (exprs[a] == undefined) {
//         inputs[a].setAttribute('placeholder', "Enter a function");
//       } else {
//         inputs[a].setAttribute('value', JSON.parse(Data.Get("exprs_" + a))[Options.getItem("mode")]);
//       }
//       try {
//         trees[a] = math.parse(exprs[a], functionScope);
//       } catch {

//       }
//       a+=1;
//     } else if (Options.getItem("mode") == "parametric") {
//       if (exprs[a] == undefined) {
//         inputs[a].setAttribute('placeholder', "Enter a function");
//         inputs[a+1].setAttribute('placeholder', "Enter a function");
//       } else {
//         inputs[a].setAttribute('value', JSON.parse(Data.Get("exprs_" + a))[Options.getItem("mode")][0]);
//         inputs[a + 1].setAttribute('value', JSON.parse(Data.Get("exprs_" + a))[Options.getItem("mode")][1]);
//       }
//       try {
//         trees[a] = math.parse(exprs[a][0], parametricScope);
//         console.log(exprs);
//         trees[a+1] = math.parse(exprs[a][1], parametricScope);
//       } catch (err) {
//         //console.error(err);
//       }
//       a+=2;
//     }
// }

// var pickers = (inputs.length)/2;

// for (var z = 0; z < pickers; z++) {

//     lineColors[z] = "#42445A"; // Set all lines to default color
//     var pickr = Pickr.create({
//     el: '.color-picker-' + z,
//     theme: 'nano',
//     position: 'top-end',

//     default: Data.Get("color_" + z, '#42445a'),

//     swatches: [
//       'rgba(244, 67, 54, 1)',
//       'rgba(233, 30, 99, 0.95)',
//       'rgba(156, 39, 176, 0.9)',
//       'rgba(103, 58, 183, 0.85)',
//       'rgba(63, 81, 181, 0.8)',
//       'rgba(33, 150, 243, 0.75)',
//       'rgba(3, 169, 244, 0.7)',
//       'rgba(0, 188, 212, 0.7)',
//       'rgba(0, 150, 136, 0.75)',
//       'rgba(76, 175, 80, 0.8)',
//       'rgba(139, 195, 74, 0.85)',
//       'rgba(205, 220, 57, 0.9)',
//       'rgba(255, 235, 59, 0.95)',
//       'rgba(255, 193, 7, 1)'
//     ],

//     components: {

//       // Main components
//       preview: true,
//       opacity: true,
//       hue: true,

//       // Input / output Options
//       interaction: {
//         hex: true,
//         rgba: true,
//         hsla: false,
//         hsva: false,
//         cmyk: false,
//         input: true,
//         clear: false,
//         save: true
//       }
//     }
//   });
//   pickrs.push(pickr);
//   handlePicker(z);

// }


// initInput();
// if(Options.getItem('mode')=='function') {
//   drawCurvesFunction();
//   startAnimation();
// } else if(Options.getItem('mode')=='parametric') {
//   drawCurvesParametric();
// }

// function handlePicker(p) {
//   pickrs[p].on('save', (...args) => {
//     var color = args[0].toHEXA().toString();
//     lineColors[p] = color;
//     Data.Set("color_"+p, color);
//   });
//   pickrs[p].on('init', (...args) => {
//     var color = args[0]["_color"].toHEXA().toString();
//     lineColors[p] = color;
//     Data.Set("color_" + p, color);
//   });
// }

// function drawGrid() {
//   var percentX, percentY, // Between 0 and 1
//     xPixel, yPixel; // Canvas Coordinates

//   //Draw grid
//   c.strokeStyle = "#00000020";
//   c.lineWidth = 1;
//   c.font = "14px Arial"
//   c.fillStyle = "#000000FF"
//   c.beginPath();

//   var gridSpace = Math.ceil((xMax)/5);

//   // Grid Text
//   for(var l = Math.ceil((xMin+origin.x)/gridSpace); l <= Math.floor((xMax+origin.x)/gridSpace); l++) {
//     percentX = (origin.x - l*gridSpace - xMin) / (xMax - xMin);
//     percentX = 1 - percentX;
//     xPixel = percentX * canvas.height;
//     percentY = (origin.y - yMin) / (yMax - yMin);
//     percentY = 1 - percentY;
//     yPixel = percentY * canvas.height;
//     if (l<0) {
//       c.textAlign = "right";
//     } else {
//       c.textAlign = "left";
//     }
//     c.fillText((l*gridSpace).toString(), xPixel, canvas.height-5);
//   }

//   // X Lines
//   for (var xpos = Math.ceil((xMin+origin.x)/gridSpace); xpos <= Math.floor((xMax+origin.x)/gridSpace); xpos++) {
//     percentX = (origin.x - xpos*gridSpace - xMin) / (xMax - xMin);
//     percentX = 1 - percentX;
//     xPixel = percentX * canvas.height;
//     c.moveTo(xPixel, 0);
//     c.lineTo(xPixel, canvas.height);
//   }

//   // Y Lines
//   for (var ypos = Math.ceil((yMin+origin.y)/gridSpace); ypos <= Math.floor((yMax+origin.y)/gridSpace); ypos++) {
//     percentY = (origin.y - ypos*gridSpace - yMin) / (yMax - yMin);
//     percentY = 1 - percentY;
//     yPixel = percentY * canvas.height;
//     c.moveTo(0, yPixel);
//     c.lineTo(canvas.width, yPixel);
//   }
//   c.stroke();

//   // Draw Axis
//   c.strokeStyle = "#00000080";
//   c.lineWidth = 1;
//   c.beginPath();

//   //X axis
//   percentY = (origin.y - yMin) / (yMax - yMin);
//   percentY = 1 - percentY;
//   yPixel = percentY * canvas.height;
//   c.moveTo(0, yPixel);
//   c.lineTo(canvas.width, yPixel);

//   //Y axis
//   percentX = (origin.x - xMin) / (xMax - xMin);
//   percentX = 1 - percentX;
//   xPixel = percentX * canvas.height;
//   c.moveTo(xPixel, 0);
//   c.lineTo(xPixel, canvas.height);
//   c.stroke();
// }

// function drawCurvesFunction() {
//   var percentX, percentY, // Between 0 and 1
//     mathX, mathYs = [], //Math Coordinates
//     xPixel, yPixel; // Canvas Coordinates

//   c.clearRect(0, 0, canvas.width, canvas.height);

//   drawGrid();

//   for (var j = 0; j < inputs.length; j++) { //Draw Curves
//     c.strokeStyle = lineColors[j];
//     c.lineWidth = 1;
//     c.beginPath();
//     for (var i = 0; i < n; i++) {
//       percentX = i / (n - 1);

//       //PARAMETRIC MODE: mathX = a function of time, mathY = a function of time

//       mathX = percentX * (xMax - xMin) + xMin + origin.x;
//       mathYs[j] = evaluateMathExpr(mathX, j) + origin.y;
//       percentY = (mathYs[j] - yMin) / (yMax - yMin);
//       percentY = 1 - percentY; //flip Y
//       xPixel = percentX * canvas.width;
//       yPixel = percentY * canvas.height;
//       c.lineTo(xPixel, yPixel);
//     }
//     c.stroke();
//   }

// } // drawCurvesFunction()

// function drawCurvesParametric() {
//   var percentT, percentX, percentY, // Between 0 and 1
//     mathT, mathXs = [], mathYs = [], //Math Coordinates
//     xPixel, yPixel; // Canvas Coordinates

//   c.clearRect(0, 0, canvas.width, canvas.height);

//   drawGrid();

//   for (var j = 0; j < inputs.length; j++) { //Draw Curves
//     c.strokeStyle = lineColors[j];
//     c.lineWidth = 1;
//     c.beginPath();
//     for (var i = 0; i < n; i++) {
//       percentT = i / (n - 1);

//       mathT = percentT * (tMax - tMin) + tMin;
//       mathXs[j] = evaluateMathExpr(mathT, (2*j)) - origin.x;
//       mathYs[j] = evaluateMathExpr(mathT, (2*j+1)) + origin.y;
//       percentX = (mathXs[j] - xMin) / (xMax - xMin);
//       percentY = (mathYs[j] - yMin) / (yMax - yMin);
//       percentY = 1 - percentY; //flip Y
//       xPixel = percentX * canvas.width;
//       yPixel = percentY * canvas.height;
//       c.lineTo(xPixel, yPixel);
//     }
//     c.stroke();
//   }

// } // drawCurvesParametric()

// function evaluateMathExpr(arg, ind) {
//   if(Options.getItem('mode') == 'function') {
//     functionScope.x = arg;
//     functionScope.t = time;
//   } else if (Options.getItem('mode') == 'parametric') {
//     parametricScope.t = arg;
//   }

//   try{
//     return trees[ind].eval();
//   } catch {
//     return;
//   }

// }

// function initInput() {
//   $("#function-inputs").delegate("input", "keyup", updateInput);
//   $("#function-inputs").delegate("input", "change", updateInput);
//   //$("#function-inputs").delegate("input", "init", updateInput);
// }

// function updateInput() {
//   if (Options.getItem("mode") == "function") {
//   exprs[this.getAttribute("index")] = this.value;
//   var val = JSON.parse(Data.Get("exprs_" + this.getAttribute("index")));
//   val[Options.getItem("mode")] = this.value;
//   Data.Set("exprs_" + this.getAttribute("index"), JSON.stringify(val));

//   for (var h = 0; h < inputs.length; h++) {
//     try {
//       trees[h] = math.parse(exprs[h], functionScope);
//     } catch (err) {

//     }
//     //{"function":"x", "parametric":["2*cos(t)","2*sin(t)"]}
//   }
//   drawCurvesFunction();
// } else if (Options.getItem("mode") == "parametric") {
//   exprs[this.getAttribute("index")] = this.value;
//   //console.log("exprs_" + (parseInt(this.getAttribute("index"))-1).toString())
//   //console.log("Expression:"+Data.Get("exprs_" + this.getAttribute("index")-1));
//   //val[Options.getItem("mode")] = this.value;
//   if (isOdd(this.getAttribute("index")) == 0) {
//       var val = JSON.parse(Data.Get("exprs_" + this.getAttribute("index")));
//     //console.log("Left side changed");
//     val[Options.getItem("mode")][0] = this.value;
//     val[Options.getItem("mode")][1] = $("input")[
//       (parseInt(this.getAttribute("index")) + 1)].value;
//       Data.Set("exprs_" + this.getAttribute("index"), JSON.stringify(val));
//   } else {
//     var val = JSON.parse(Data.Get("exprs_" + (parseInt(this.getAttribute("index")) - 1).toString()));
//     //console.log("Right side changed");
//     val[Options.getItem("mode")][1] = this.value;
//     val[Options.getItem("mode")][0] = $("input")[
//       (parseInt(this.getAttribute("index")) - 1)].value;
//         Data.Set("exprs_" + (parseInt(this.getAttribute("index")) - 1).toString(), JSON.stringify(val));
//   }

//   for (var h = 0; h < inputs.length; h+=2) {
//     try {
//       trees[h] = math.parse(exprs[h][0], parametricScope);
//       trees[h+1] = math.parse(exprs[h][1], parametricScope);
//     } catch (err) {

//     }
//   }
//   drawCurvesParametric();
// }
// }

// function isOdd(num) {
//   return num % 2;
// }

// function startAnimation() {
//   window.requestAnimFrame = (function () {
//     return window.requestAnimationFrame ||
//       window.webkitRequestAnimationFrame ||
//       window.mozRequestAnimationFrame ||
//       function (callback) {
//         window.setTimeout(callback, 1000 / 60);
//       };
//   })();
//   (function animloop() {
//     requestAnimFrame(animloop);
//     render();
//   }());
// }

// function render() {
//   time += timeIncrement;
//   if (time >= timeMax || time <= -timeMax) {
//     timeIncrement *= -1
//   }
//   try {
//     drawCurvesFunction();
//   } catch (err) {
//     return;
//   }
// }

// if (canvas.addEventListener) {
//   canvas.addEventListener('DOMMouseScroll',handleScroll,false); //Firefox
//   canvas.addEventListener('mousewheel',handleScroll,false); //Other browsers
// } else if(elem.attachEvent){
//     elem.attachEvent ("onmousewheel", handleScroll);
// }

// var lastX=canvas.width/2, lastY=canvas.height/2;
// var dragStart,dragged;
// canvas.addEventListener('mousedown',function(evt){
// 	document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
// 	lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
// 	lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
// 	dragStart = {
//     x: lastX,
//     y: lastY
//   };
// 	dragged = false;
// },false);
// canvas.addEventListener('mousemove',function(evt){
// 	lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
// 	lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
// 	dragged = true;
// 	if (dragStart){
//     var pt = {
//       x: lastX,
//       y: lastY
//     };
// 		origin.x=(origin.x-(pt.x-dragStart.x)/(546*scale));
//     origin.y=(origin.y-(pt.y-dragStart.y)/(546*scale));
//     if(Options.getItem('mode')=='function') {
//       drawCurvesFunction();
//     } else if(Options.getItem('mode')=='parametric') {
//       drawCurvesParametric();
//     }

// 	}	},false);
// canvas.addEventListener('mouseup',function(evt){
// 	dragStart = null;
// 	if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
// },false);

// var mouseWheelTotal = 1;

// function zoom (clicks) {
// 			var pt = {
//         x: lastX,
//         y: lastY
//       };
//       mouseWheelTotal += clicks;
// 			//c.translate(pt.x,pt.y);
//       scale=Math.pow(1.1,mouseWheelTotal),
//       xMin = -11/scale,
//       xMax = 11/scale,
//       yMin = -11/scale,
//       yMax = 11/scale,
//       tMin = tOrigMin*1.1/scale,
//       tMax = tOrigMax*1.1/scale;
// 			//c.translate(-pt.x,-pt.y);
//       if(Options.getItem('mode')=='function') {
//         drawCurvesFunction();
//       } else if(Options.getItem('mode')=='parametric') {
//         drawCurvesParametric();
//       }
// 		}

// function handleScroll (evt) {
//   var delta = evt.wheelDelta ? evt.wheelDelta/80 : evt.detail ? -evt.detail : 0;
// 	if (delta) zoom(delta);
// 	return evt.preventDefault() && false;
// };

// settings loader
LoadNav();
Load();
