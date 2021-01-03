class Dustbin {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.leftEdge = createSprite(x-100, y,20, 100 );
	    this.leftEdge.shapeColor = "red";
	
	    this.rightEdge = createSprite(x+100, y,20, 100);
	    this.rightEdge.shapeColor = "red";

	    this.bottomEdge = createSprite(x,y + 40, 200, 20);
        this.bottomEdge. shapeColor = "red";
        
        this.leftBody = Bodies.rectangle(x-100, y,20, 100, options); 
        this.rightBody = Bodies.rectangle(x+100, y,20, 100, options); 
        this.bottomBody = Bodies.rectangle(x,y + 40, 200, 20, options); 

        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
        World.add(world, this.bottomBody);

    }
             
}