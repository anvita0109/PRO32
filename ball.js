class Ball {
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
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke(0);
      fill(230,95,95);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  