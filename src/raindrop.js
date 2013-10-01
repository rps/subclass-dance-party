var Raindrop = function(top, left, timeBetweenSteps){
  this.does = function(){
    this.top = this.top + 10;
    this.$node.css({top:this.top})
  };
  this.kind = 'raindrop';
  Dancer.call(this,top,left,timeBetweenSteps,this.kind,this.does);
  this.step();
};

Raindrop.prototype = new Dancer();
Raindrop.prototype.constructor = Raindrop;