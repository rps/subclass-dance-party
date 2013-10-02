var Crawler = function(top, left, timeBetweenSteps){
  this.bool = true;
  this.stayIn = false;
  this.does = function(){
    this.top = this.top + ((this.stayIn ? 1 : -1) * (this.bool ? 3 : 5)); 
    this.left = this.left + (this.bool ? 10 : -10);
    this.$node.css({top:this.top, left:this.left});
    this.bool = Math.random() > .5 ? false : true;
    if (this.top < 0 || this.left < 0){
      this.stayIn = true;
    } else if (this.top > $("body").height() || this.left > $("body").width()) {
      this.stayIn = false;
    }
  };
  this.kind = 'crawler';
  Dancer.call(this,top,left,timeBetweenSteps,this.kind,this.does);  
  this.step();
};

Crawler.prototype = new Dancer();
Crawler.prototype.constructor = Crawler;
