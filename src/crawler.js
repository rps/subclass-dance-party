var Crawler = function(top, left, timeBetweenSteps){
  this.bool = true;
  this.does = function(){
    this.top = this.top-5; 
    this.left = this.left + (this.bool ? 10 : -10);
    this.$node.css({top:this.top, left:this.left});
    this.bool = Math.random() > .5 ? false : true;
  };
  this.kind = 'crawler';
  Dancer.call(this,top,left,timeBetweenSteps,this.kind,this.does);
  this.step();
};

Crawler.prototype = new Dancer();
Crawler.prototype.constructor = Crawler;