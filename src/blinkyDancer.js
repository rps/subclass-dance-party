var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.does = function(){this.$node.toggle()};
  this.kind = 'blinkyDancer';
  Dancer.call(this,top,left,timeBetweenSteps,this.kind,this.does);
  this.step();
};

BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.constructor = BlinkyDancer;