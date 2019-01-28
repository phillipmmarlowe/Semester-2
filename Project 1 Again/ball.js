

function Ball(loc, vel, height, base){
  this.loc = loc;
  this.vel = vel;
  this.height = height;
  this.base = base;
}

Ball.prototype.run = function(){
  //this.checkEdges();
  this.update();
}

Ball.prototype.checkEdges = function(){
  if(this.loc.x > window.innerWidth || this.loc.x < 0)  this.vel.x = -this.vel.x;
  if(this.loc.y > window.innerHeight || this.loc.y < 0)  this.vel.y = -this.vel.y;
}

Ball.prototype.update = function(){
  //this.loc.x += this.vel.x;
  //this.loc.y += this.vel.y;
  this.render();
}

Ball.prototype.render = function(){
  ctx.strokeStyle = 'rgba(55,50,220)';
  ctx.fillStyle = "rgba(255,162,12)";
  ctx.fill();
  ctx.save();
  ctx.translate(this.loc.x,this.loc.y);
  temp2 = JSVector.addGetNew(mouseLoc,canvasLoc);
  temp = JSVector.subGetNew(temp2,this.loc);
  ctx.rotate(temp.getDirection());
  ctx.beginPath();
  ctx.moveTo(-this.height/2,-this.base/2);
  ctx.lineTo(this.height/2,0);
  ctx.lineTo(-this.height/2,this.base/2);
  ctx.restore();
}
