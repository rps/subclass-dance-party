var Human = function(top, left, timeBetweenSteps){
  this.bool = Math.random() > .5 ? false : true;
  this.bool2 = Math.random() > .5 ? false : true;
  this.rand;
  this.rand2;
  this.counter = 0;
  this.bombsLeft = 5;
  this.alive = true;
  this.stayIn = false;
  this.does = function(){
    rand = Math.floor(Math.random()*100)/8
    rand2 = Math.round(Math.random()*100)/8
    this.top = this.top + ((this.stayIn ? 1 : -1) * (this.bool ? rand : -rand)); 
    this.left = this.left + ((this.stayIn ? 1 : -1) * (this.bool2 ? rand2 : -rand2));
    this.$node.css({top:this.top, left:this.left});
    this.counter++;
    // console.log(this.counter);
    if(this.counter > 30 && this.alive){
        this.bool = Math.random() > .5 ? false : true;
        this.bool2 = Math.random() > .5 ? false : true;
        this.counter = 0;
        if(this.bombsLeft > 0){
            var bomb = new Bomb(
                this.top,
                this.left,
                0
              );
            window.dancers.push(bomb);
            $('.items').append(bomb.$node);
            this.bombsLeft--;
        }
    }
    if (this.top < 0 || this.left < 0){
      this.stayIn = true;
    } else if (this.top > $("body").height() || this.left > $("body").width()) {
      this.stayIn = false;
    }    
  };
  this.kind = (Math.random() > .5) ? (Math.random() > .5) ? 'person1' : 'person3' : 'person2';
  Dancer.call(this,top,left,(timeBetweenSteps > 300 ? timeBetweenSteps : timeBetweenSteps+200),this.kind,this.does);
  this.step();
};

Human.prototype = new Dancer();
Human.prototype.constructor = Human;