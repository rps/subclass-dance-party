var Dancer = function(top, left, timeBetweenSteps, doSomething){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.doSomething = doSomething;
  this.$node = $('<span class="dancer"></span>');
  this.$node.css({top:this.top,left:this.left});
}

Dancer.prototype.step = function(){
  var that = this;
  // debugger;
  this.doSomething();
  setTimeout(
    function(){
     (function(context){context.step()})(that)
      
    }
    // (function(context){context.step()})(that)
    ,that.timeBetweenSteps
    )
   // setTimeout(
   //  function(){
   //   (function(context){context.step()})(that)
      
   //  }
   //  // (function(context){context.step()})(that)
   //  ,that.timeBetweenSteps
   //  )

}

Dancer.prototype.setPosition = function(top, left){
  this.top = top;
  this.left = left;
}