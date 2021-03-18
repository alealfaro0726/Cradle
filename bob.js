class Bob{
    constructor(x,y,width,height){
            var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        ellipse(200,400,70,70);
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipse(370,390,60,60);
        
    }
}