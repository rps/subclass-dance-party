var Dancer = function(top, left, timeBetweenSteps, kind, doSomething){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.doSomething = doSomething;
  this.$node = $('<span class="dancing '+kind+'"></span>');
  this.$node.css({top:this.top,left:this.left});
}

Dancer.prototype.step = function(){
  
  var that = this;
  this.doSomething();

  setTimeout(
    function(){
      (function(context){
      context.step();
      })(that)
    }
    ,that.timeBetweenSteps
  );
}

Dancer.prototype.lineUp = function(){
    this.left = 0;
    this.$node.css({left:this.left});
}

// Dancer.prototype.setPosition = function(top, left){
//   this.top = top;
//   this.left = left;
// }