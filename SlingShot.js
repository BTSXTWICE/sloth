class Sloth{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sloth = Constraint.create(options);
        World.add(world, this.sloth);
    }

    display(){
        if(this.sloth.bodyA){

      
        var pointA = this.sloth.bodyA.position;
        var pointB = this.sloth.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}
       fly(){
           this.sloth.bodyA=null
       }    
}
