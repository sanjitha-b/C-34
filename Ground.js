class Ground{

    constructor(x,y,width,height){  // properties of all the buildings created will be mentioned in constructor
    
    
    var options = {
        isStatic : true 
    
    }
    
    this. ground = Bodies.rectangle(x,y,width,height, options)
    World. add(world,this.ground)
    this.width = width ;
    this.height = height;
    }
    display(){  //since the buliding has to displayed, we are going for the display method
    var pos = this.ground.position
    var angle = this. ground. angle
    push()
    translate( pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    strokeWeight(3)
    fill (" brown ")
    rect( 0,0, this.width, this.height)
    
    pop()
    }
    
    
    }
    
    
    
    