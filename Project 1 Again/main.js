window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var canvas2
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
  canvas2 = document.getElementById('cnvs');
  // Set the dimensions of the canvas
  canvas.width = 800;
  canvas.height = 600;
  canvas2.width = canvas.width/10;
  canvas2.height = canvas.height/10;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(12,15,25, .9)';
  canvas2.style.border = 'solid black 5px';
  canvas2.style.backgroundColor = 'rgba(12,15,25, .9)';
  canvas.addEventListener("mousemove",mouseHandle);
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  ctx2 = canvas2.getContext('2d');
  mouseLoc = new JSVector(canvas.width/2,canvas.height/2);
  display = document.getElementById("display");
  display.firstChild.nodeValue = displayValue;
  center = new JSVector(canvas.width/2,canvas.height/2);
  makeBalls(860);

  animate();
  animate2();
}
function animate2(){
  requestAnimationFrame(animate2);
  ctx2.clearRect(0,0,canvas2.width,canvas2.height);
  ctx2.save()
  //ctx2.scale(0.1,0.1);
  ctx2.translate(canvas2.width/2,canvas2.height/2);
  ctx2.scale(0.1,0.1);
  ctx2.lineWidth = 4;
  ctx2.strokeStyle = 'rgb(55,50,220)';
  //ctx2.beginPath();
  ctx2.moveTo(0,0);
  ctx2.lineTo(0,-3000);
  ctx2.lineTo(0,3000);
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.moveTo(0,0);
  ctx2.lineTo(4000,0);
  ctx2.lineTo(-4000,0);
  ctx2.stroke();
  //ctx2.strokeStyle = 'rgba(55,50,220)';
  ctx2.fillStyle = "rgba(255,162,12)";
  //MINIMAP
  ctx2.rect(canvasLoc.x/10,canvasLoc.y/10,80,60);
  ctx2.fillRect(canvasLoc.x/10,canvasLoc.y/10,80,60);
  ctx2.restore();
}

function animate(){
  requestAnimationFrame(animate);
  displayValue = " X: "+mouseLoc.x+" Y: "+mouseLoc.y;
  display.firstChild.nodeValue = displayValue;
  var dLoc = JSVector.subGetNew(mouseLoc,center);
  dLoc.multiply(0.1);
  canvasLoc.add(dLoc);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //ctx2.clearRect(0,0,canvas2.width,canvas2.height);
  ctx.save();
  //ctx2.save()
  ctx.translate(-canvasLoc.x,-canvasLoc.y);
  //ctx2.translate(canvas2.width/2,canvas2.height/2);
  ctx.strokeStyle = 'rgb(55,50,220)';
  //ctx2.strokeStyle = 'rgb(55,50,220)';
  //Canvas1 Axis
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(0,-3000);
  ctx.lineTo(0,3000);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(4000,0);
  ctx.lineTo(-4000,0);
  ctx.stroke();
  //Canvas2 Axis
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
