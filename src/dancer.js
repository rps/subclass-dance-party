var Dancer = function(top, left, timeBetweenSteps, kind, doSomething){
  this.top = top;
  this.left = left;
  this.onFire = false;
  this.oldCSS = 1;
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

Dancer.prototype.explode = function(){
  //this.$node.css("background-image","url('angry_sun.png')");
  var r = (Math.random()*10000)+'ms';
  this.doSomething = function(){}; // this.$node.toggle()  
  this.timeBetweenSteps = 350;
  this.onFire = true;
  this.$node.css({
    "background-image":"url('fire.gif')",
    "margin":"0",
    "padding":"0",
    "position":"absolute",
    "background-size":"40px",
    "width":"40px",
    "height":"40px",
    "background-repeat":"no-repeat",
    "border":"0px"
    // "-webkit-animation-name": "spin",
    // "-webkit-animation-duration": r,
    // "-webkit-animation-iteration-count": "infinite",
    // "-webkit-animation-timing-function": "linear"
  });
  
}



// Dancer.prototype.setPosition = function(top, left){
//   this.top = top;
//   this.left = left;
// }