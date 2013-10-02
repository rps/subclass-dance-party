var Bomb = function(top, left, timeBetweenSteps, bombType, action){
  this.does = action || function(){};
  this.kind = bombType || 'bomb';
  Dancer.call(this,top,left,timeBetweenSteps,this.kind,this.does);
  this.step();
};

Bomb.prototype = new Dancer();
Bomb.prototype.constructor = Bomb;