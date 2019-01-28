window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var balls = [];
var center;
var mouseLoc;
var canvasX = 0;
var canvasY = 0;
var canvasLoc = new JSVector(canvasX,canvasY);
var display;
var displayValue;
function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = 800;
  canvas.height = 600;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(12,15,25, .9)';
  canvas.addEventListener("mousemove",mouseHandle);
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  mouseLoc = new JSVector(canvas.width/2,canvas.height/2);
  display = document.getElementById("display");
  display.firstChild.nodeValue = displayValue;
  center = new JSVector(canvas.width/2,canvas.height/2);
  makeBalls(830);

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  displayValue = " X: "+mouseLoc.x+" Y: "+mouseLoc.y;
  display.firstChild.nodeValue = displayValue;
  var dLoc = JSVector.subGetNew(mouseLoc,center);
  dLoc.multiply(0.1);
  canvasLoc.add(dLoc);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.translate(-canvasLoc.x,-canvasLoc.y);
  ctx.strokeStyle = 'rgba(55,50,220)';
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(0,-10000);
  ctx.lineTo(0,10000);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(10000,0);
  ctx.lineTo(-10000,0);
  ctx.stroke();
  for(let i = 0; i < balls.length; i++){
    balls[i].run();
  }
  ctx.restore();
}

function makeBalls(numBalls){

  for(let i = 0; i < numBalls; i++){
    var x = Math.random()*8000-4000;
    var y = Math.random()*6000-3000;
    var loc = new JSVector(x, y);
    var dx = Math.random()*10-5;
    var dy = Math.random()*10-5;
    var vel = new JSVector(dx, dy);
    var height = 24;
    var base = 16;
    balls.push(new Ball(loc, vel, height, base))
  }
}

function mouseHandle(event){
  mouseLoc = new JSVector(event.clientX,event.clientY);
}
