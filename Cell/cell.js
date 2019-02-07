function Cell(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}
// Cell.prototype.checkEdges = function(){
//   if(this.loc.x > window.innerWidth || this.loc.x < 0)  this.vel.x = -this.vel.x;
//   if(this.loc.y > window.innerHeight || this.loc.y < 0)  this.vel.y = -this.vel.y;
// }

Cell.prototype.render = function(){
  ctx.strokeStyle = 'rgb(55,50,220)';
  ctx.fillStyle = "rgb(255,162,12)";
  ctx.rect(this.x,this.y,this.width,this.height);
  ctx.fillRect(this.x,this.y,this.width,this.height);
}
