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
        square(x,y,50)
        x += 50;
        
    }
}

