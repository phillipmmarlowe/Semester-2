function Cell(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color;
  this.neighbors = [];
}
// Cell.prototype.checkEdges = function(){
//   if(this.loc.x > window.innerWidth || this.loc.x < 0)  this.vel.x = -this.vel.x;
//   if(this.loc.y > window.innerHeight || this.loc.y < 0)  this.vel.y = -this.vel.y;
// }

Cell.prototype.render = function(){
  ctx.strokeStyle = 'black';
  ctx.fillStyle = "rgb(255,162,12)";
  this.color = "rgb(255,162,12)";
  ctx.rect(this.x,this.y,this.width,this.height);
  ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.stroke();
}

Cell.prototype.getNeighbors = function(){
  var thisx = this.x/size;
  var thisy = this.y/size;
  thisx = Math.trunc(thisx);
  thisy = Math.trunc(thisy);
  if(!(thisy==0)){
  //up cell  
  this.neighbors.push(cells[thisx][thisy-1]);
  }
  if(!(thisx==cells.length-1)){
  //right cell
  this.neighbors.push(cells[thisx+1][thisy]);
  }
  if(!(thisy==cells.length-1)){
  //down cell
  this.neighbors.push(cells[thisx][thisy+1]);
  }
  if(!(thisx==0)){
  //left cell
  this.neighbors.push(cells[thisx-1][thisy]);
  }
}

  //var thisx = x/size;
  //var thisy = y/size;
  //thisx = Math.trunc(thisx);
  //thisy = Math.trunc(thisy);
  //if(!(thisy==0)){
  //up cell  
  //this.locateCellXup = cells[locateX][locateY-1].x;
  //this.locateCellYup = cells[locateX][locateY-1].y;
  //}
  //if(!(thisx==cells.length-1)){
  //right cell
  //var locateCellXright = cells[locateX+1][locateY].x;
  //var locateCellYright = cells[locateX+1][locateY].y;
  //}
  //if(!(thisy==cells.length-1)){
  //down cell
  //var locateCellXdown = cells[locateX][locateY+1].x;
  //var locateCellYdown = cells[locateX][locateY+1].y;
  //}
  //if(!(thisx==0)){
  //left cell
  //var locateCellXleft = cells[locateX-1][locateY].x;
  //var locateCellYleft = cells[locateX-1][locateY].y;
  //}