
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  


  //this.cycle = function(){this.$node.toggle()};
  
  var blinkyDancer = new Dancer(top, left, timeBetweenSteps,  function(){this.$node.toggle()});

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


  blinkyDancer.step();
  return blinkyDancer;
};



// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   this.cycle = function(){this.$node.toggle()};
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   console.log(this)
// }  

// makeBlinkyDancer.prototype = new Dancer(this.top, this.left, this.timeBetweenSteps,this.cycle);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
