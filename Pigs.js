class Pigs{
    constructor(a,s,d,w) {
    this.box = Bodies.rectangle(a,s,d,w);
        World.add(world,this.box);
    this.width=d
    this.height=w
    }
    display(){
    push();
    translate(this.box.position.x, this.box.position.y);
    rotate(this.box.angle);
    fill("#90EE90")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop ()
    }
    }