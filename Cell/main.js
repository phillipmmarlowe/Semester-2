window.onload = init;
var canvas;
var ctx;
var cells = [];
var rows;
var columns;
var size=50;
var mouseX;
var mouseY;
function init(){
  canvas = document.getElementById('cnv');
  rows = 10;
  columns = 10;
  canvas.width = rows*size;
  canvas.height = columns*size;
  canvas.style.border = 'solid black 0px';
  canvas.style.backgroundColor = 'rgba(12,15,25, .9)';
  canvas.addEventListener('click',mouseClickHandler);
  ctx = canvas.getContext('2d');
  makeCells();
  animate();
}

function animate(){
requestAnimationFrame(animate);
for(var i=0;i<columns;i++){
  for(var j=0;j<rows;j++){
    cells[i][j].render();
  }
}
if(mouseX>0){
var locateX = mouseX/size;
var locateY = mouseY/size;
locateX=Math.trunc(locateX);
locateY=Math.trunc(locateY);
var locateCellX = cells[locateX][locateY].x;
var locateCellY = cells[locateX][locateY].y;
ctx.fillRect(locateCellX,locateCellY,size,size);
}
}

function makeCells(){
  for(var i=0;i<columns;i++){
    cells[i]=[];
    for(var j=0;j<rows;j++){
      cells[i][j]=new Cell(i*size,j*size,size,size);
    }
  }
  for(var i=0;i<columns;i++){
    for(var j=0;j<rows;j++){
      cells[i][j].render();
    }
  }
}

function mouseClickHandler(event){
  mouseX=event.clientX;
  mouseY=event.clientY;
  console.log('X: '+mouseX+' Y: '+mouseY);
}
  // for(var i = 0;i < columns;i++){
  //   var tempArray = [];
  //   arrays.push(tempArray);
  // }
  // var tempStartCell = new Cell(0,0,50,50);
  // arrays[0].push(tempStartCell);
  // for(var i = 1;i < arrays.length;i++){
  //     arrays[i].push(new Cell(arrays[i-1][0].x+50,arrays[i-1][0].y+50,50,50));
  //   }
  //
  //   for(var i = 0;i < arrays.length;i++){
  //     for(var j = 1;j<numCells;j++){
  //       var tempCell = new Cell(arrays[i][j-1].x+50,arrays[i][j-1].y+50,50,50);
  //       arrays[i].push(tempCell);
  //     }
  //   }
  //   for(var i = 0;i < arrays.length;i++){
  //     for(var j = 0;j<numCells;j++){
  //       arrays[i][j].render();
  //     }
  //   }
