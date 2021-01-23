class Slingshot {

constructor (bodyA, pointB)
{
var options = {

bodyA: bodyA,
pointB : pointB,
stiffness : 1.5,
length : 250


}
this.Slingshot = Constraint.create(options)
World. add (world, this.Slingshot)
this.pointB = pointB
}

display(){
    if(this.Slingshot. bodyA){
        var pointA= this.Slingshot.bodyA.position
        var pointB = this.pointB
        push()
        strokeWeight(3)
        stroke("black")
        line(pointB.x, pointB.y, pointA.x, pointA.y)
        pop()
        }
        
        
        }
    }
