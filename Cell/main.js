window.onload = init;
var canvas;
var arrays = [];
var numCells;
function init(){
  canvas = document.getElementById('cnv');
  canvas.width = 800;
  canvas.height = 800;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(12,15,25, .9)';
  ctx = canvas.getContext('2d');
  numCells = 10;
  makeCells(numCells);
  animate();
}

function animate(){
requestAnimationFrame(animate);

}

function makeCells(numCells){
  var numCellArrays = canvas.height/10;
  numCellArrays=Math.trunc(numCellArrays);
  for(var i = 0;i < numCellArrays;i++){
    var tempArray = [];
    arrays.push(tempArray);
  }
  var tempStartCell = new Cell(0,0,50,50);
  arrays[0].push(tempStartCell);
  for(var i = 1;i < arrays.length;i++){
      arrays[i].push(new Cell(arrays[i-1][0].x+50,arrays[i-1][0].y+50,50,50));
    }

    for(var i = 0;i < arrays.length;i++){
      for(var j = 1;j<numCells;j++){
        var tempCell = new Cell(arrays[i][j-1].x+50,arrays[i][j-1].y+50,50,50);
        arrays[i].push(tempCell);
      }
    }
    for(var i = 0;i < arrays.length;i++){
      for(var j = 0;j<numCells;j++){
        arrays[i][j].render();
      }
    }
}
