let rectW = 50;
let rectH = 400;

function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(220);

  let x = 0;
  for (let i = 0; i < 8; i++) 
  {
    if (mouseIsPressed &&mouseX >= x && mouseX <= x + rectW &&mouseY >= 0 && mouseY <= rectH) 
    {
      fill(0,0,255)
    } 
    else 
    {
      fill(255);
    }

    rect(x, 0, rectW, rectH);
    x += rectW;

  }
}
