let x = 0;
let drawCircle = true;
let circlePos =10

function setup()
{
    createCanvas(400,400);
}
function draw()
{
    background(255);
    circlePos === 0;
    while (mouseX >= circlePos)
    {
        circle(circlePos,200,20)
        circlePos += 20;
    }
}