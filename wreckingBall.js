class Wreckingball{

    constructor(x,y,radius){  // properties of all the buildings created will be mentioned in constructor
    
    
    var options = {  //JSON format
    
        'restitution' :  0.8,
        'friction' : 1,
        'density' : 0.5
    
    }
    
    this. ball  = Bodies. circle (x,y,radius, options)
    World. add(world,this.ball )
    this.radius = radius ;
    }
    display(){  //since the buliding has to displayed, we are going for the display method
    var pos = this.ball .position
    var angle = this. ball . angle
    push()
    translate( pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
    strokeWeight(3)
    stroke("black")
    fill (" pink ")
    ellipse( 0,0, this.radius, this.radius)
    
    pop()
    }
    
    
    }
    
    
    
    