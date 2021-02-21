class b {
    constructor(x,y) {
      var options = {
          
     
      }
      this.body = Bodies.rectangle(x,y,40,60,options);
      this.width = 40;
      this.height = 60;
      this.visibility=255
      World.add(world, this.body);
    }
   
    o()
     { var pos =this.body.position;

      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
}

}
  ;