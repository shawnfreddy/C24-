class Ground{
    constructor(x,y,w,h){
        var options={
          isStatic: true  
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width= w;
        this.height = h;
        World.add(ourWorld,this.body);

    }
    display(){
      var pos = this.body.position;
      var angle= this.body.angle;
      push(); 
      translate(pos.x,pos.y);
      rotate(angle);
      fill("brown");
      rectMode(CENTER);
      strokeWeight(4);
      rect(0,0,this.width,this.height) ;
      pop();
    }

    
}