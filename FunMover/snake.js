function Snake(x,y,radius){
//this.length = length;
this.rad = radius;
this.loc = new JSVector(x,y);
this.vel = new JSVector();
}

Snake.prototype.run = function(){
  this.render();
}
Snake.prototype.update = function(){
  this.loc.x+=this.vel.x;
  this.loc.y+=this.vel.y;
}
Snake.prototype.render = function(){
  if(lebron){
  ctx.drawImage(lebron,50, 70, 290, 300,this.loc.x,this.loc.y,100,100);
  }
  // ctx.beginPath();
  // ctx.arc(this.loc.x,this.loc.y,this.rad,0, Math.PI*2, false)
  // ctx.fillStyle = "rgb(255,162,12)";
  // ctx.fill();
}
