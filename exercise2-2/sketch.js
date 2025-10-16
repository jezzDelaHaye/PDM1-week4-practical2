let x =0;
let y =0;

function setup()
{
    createCanvas(400,400)

}
function draw()
{    
    for(let i =0; i < 8; i++)
    {
        if (mouseX >= x && mouseX <= (x+50))
        {
            fill(0,0,255);
        }
        rect(x,y,50,400)
        x += 50;
        
    }
}

