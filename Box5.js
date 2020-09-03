class Box5 {
    constructor(x, y, width, height) {
      var options = {
           isStatic:false,
        'restitution':0.8,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed < 3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke(0);
      fill(240,173,160);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect( this.body.position.x, this.body.position.y, 30, 40);
        pop();
      }
    }
  };
  