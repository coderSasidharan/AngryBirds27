class Slingshot{
    constructor(a,b){
        var options = {
            bodyA: a ,
            bodyB: b ,
            length: 5,
            stiffness: 0.07

        }
       this.connect =  Matter.Constraint.create(options)
       World.add(world,this.connect);
       console.log(this.connect);
    }
    view(){
        line(this.connect.bodyA.position.x,this.connect.bodyA.position.y,this.connect.bodyB.position.x,this.connect.bodyB.position.y);
    }
}

