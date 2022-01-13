var box1, box2
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,200,50,50,3)
  box2 = new Box(100,100,30,30,4)
}

function draw() 
{
  background(220);
fill ("green")
box1.show()
box1.move()
fill ("yellow")
box2.show()
box2move()
}

