var YellowDancer = function(top, left, timeBetweenSteps){
  this.does = function(){this.$node.toggle()};
  this.kind = 'yellowDancer';
  Dancer.call(this,top,left,timeBetweenSteps,this.kind,this.does);
  this.step();
};

YellowDancer.prototype = new Dancer();
YellowDancer.prototype.constructor = YellowDancer;