window.onload = init;
var canvas;
var ctx;
var snakey;
var lebron;
function init(){
  canvas = document.getElementById('cnv');
  ctx = canvas.getContext('2d');
  lebron = document.getElementById('james');
  canvas.width = 800;
  canvas.height = 600;
  canvas.style.border = 'solid black 1px';
  canvas.style.backgroundColor = 'rgba(12,15,25, .9)';
  document.addEventListener('keydown',keydownHandler);
  snakey = new Snake(200,200,20);
  animate();
}

function animate(){
requestAnimationFrame(animate);
ctx.clearRect(0,0,canvas.height,canvas.width);
  snakey.run();
}

function keydownHandler(event){
  console.log(event.key);
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
