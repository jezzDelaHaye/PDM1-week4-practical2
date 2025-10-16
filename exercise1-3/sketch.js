let x = 0;
let y = 0;

function setup()
{
    createCanvas(600,600)
}
function draw()
{
    while (y <= 600)
    {
        line(600,600,0,y)
        line(300,300,600,y)
        line(600,0,0,y)
        y += 10;
    }  
}