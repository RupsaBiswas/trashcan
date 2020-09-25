class Outline {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true
      }
     // this.Bottombody = Bodies.rectangle(x, y, 50, 10, options);
      this.Leftbody = Bodies.rectangle(x, y, width, height, options);
      this.Rightbody = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png");
      
      //World.add(world, this.Bottombody);
      World.add(world, this.Leftbody);

      World.add(world, this.Rightbody);
    }


    display(){
     // var posBottom =this.Bottombody.position;
      var posLeft =this.Leftbody.position;
      var posRight =this.Rightbody.position;
      
      push();
      rectMode(CENTER);
      translate(posLeft.x, posLeft.y);
      rect(0, 0, this.width, this.height);
     
      pop();

     
      push();
      strokeWeight(1);
      stroke("black");
      fill(255);

      translate(posRight.x, posRight.y);
      rect(0, 0, this.width, this.height);
      pop();

       

     
      
     
     
     
    }
  };
  