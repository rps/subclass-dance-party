var SquareMover = function(top, left, timeBetweenSteps){
  this.does = function(){this.$node.css({top:$("body").height() * Math.random(),left:$("body").height() * Math.random()})};
  this.kind = 'squareMover';
  Dancer.call(this,top,left,timeBetweenSteps,this.kind,this.does);
  this.step();
};

SquareMover.prototype = new Dancer();
SquareMover.prototype.constructor = SquareMover;