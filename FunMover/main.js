window.onload = init;
var canvas;
var ctx;
var snakey;
var lebron;
var lebronLoc;
var canvasLoc;
var center;
function init(){
  canvas = document.getElementById('cnv');
  ctx = canvas.getContext('2d');
  var templebron = new Image();
  templebron.src = 'image1.jpg';
  templebron.addEventListener('load',function(e){lebron=this});
  canvas.width = 800;
  canvas.height = 600;
  canvas.style.border = 'solid black 1px';
  canvas.style.backgroundColor = 'rgba(12,15,25, .9)';
  document.addEventListener('keydown',keydownHandler);
  snakey = new Snake(200,200,20);
  center = new JSVector(canvas.width/2,canvas.height/2);
  animate();
}

function animate(){
requestAnimationFrame(animate);
console.log(snakey.loc.x+' '+snakey.loc.y)
//var dLoc = JSVector.subGetNew(mouseLoc,center);
//dLoc.multiply(0.1);
//canvasLoc.add(dLoc);
ctx.clearRect(0,0,canvas.height,canvas.width);
snakey.run();
}

function keydownHandler(event){
  //console.log(event.key);
  if(event.key == 'w'){
    snakey.loc.y+=-7;
  }
  if(event.key == 's'){
    snakey.loc.y+=7;
  }
  if(event.key == 'a'){
    snakey.loc.x+=-7;
  }
  if(event.key == 'd'){
    snakey.loc.x+=7;
  }
}
