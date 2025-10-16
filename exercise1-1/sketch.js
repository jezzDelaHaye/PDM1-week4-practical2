function setup()
{
    createCanvas(400,400);
}
function draw()
{
    background(255);
    let circlePos =0
    while (mouseX >= circlePos)
    {

        circle(circlePos+10,200 ,20)
        circlePos += 20;
        
    }
    
    
    
}