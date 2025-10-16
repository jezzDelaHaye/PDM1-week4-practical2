function setup()
{
    createCanvas(400,400);
    for(let i =0; i <= 400;i+=20)
    {
        circle(i,200,20)
    }
}
function draw()
{
    background(255);
    let circlePos =0
    for(let i =0; i <= 400;i+=20)
    {
        fill(255,255,255)
        circle(i+10,200,20)
    }
    while (mouseX >= circlePos)
    {
        circle(circlePos+10,200 ,20)
        fill(0,0,255)
        circlePos += 20;
        
    }  
}