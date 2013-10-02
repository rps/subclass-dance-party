var Airstrike = function(top, left, timeBetweenSteps){
  this.does = function(){};
  this.kind = 'airstrike';
  
  Bomb.call(this,top,left,1000,this.kind,this.does);
  this.step();
};

Airstrike.prototype = new Bomb();
Airstrike.prototype.constructor = Airstrike;