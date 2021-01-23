class Building{

constructor(x,y,width,height){  // properties of all the buildings created will be mentioned in constructor


var options = {  //JSON format

    'restitution' :  0.8,
    'friction' : 1,
    'density' : 0.5

}

this. building = Bodies.rectangle(x,y,width,height, options)
World. add(world,this.building)
this.width = width ;
this.height = height;
}
display(){  //since the buliding has to displayed, we are going for the display method
var pos = this.building.position
var angle = this. building. angle
push()
translate( pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
strokeWeight(3)
stroke("black")
fill (" purple ")
rect( 0,0, this.width, this.height)

pop()
}


}



