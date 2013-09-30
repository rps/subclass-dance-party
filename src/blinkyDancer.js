var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps,function(){this.$node.toggle()});
  this.step();
};

MakeBlinkyDancer.prototype = new Dancer();
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;