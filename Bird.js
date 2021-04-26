class Bird{
    constructor(a,s,d,w) {
    this.box = Bodies.rectangle(a,s,d,w);
        World.add(world,this.box);
    this.width=d
    this.height=w
    }
    display(){
    this.box.position.x=mouseX
    this.box.position.y=mouseY
    push();
    translate(this.box.position.x, this.box.position.y);
    rotate(this.box.angle);
    fill("red")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop ()
    }
    }