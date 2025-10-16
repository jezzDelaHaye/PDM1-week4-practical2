let i =0;
function setup()
{
    createCanvas(400,400)
}
function draw()
{
    for (let x = 0; x < width; x += 50) 
    {
        i++;
        for (let y = 0; y < height; y += 50) 
        {
            i++;
            if(i % 2 === 0)
            {
                fill (0)
                square(x, y, 50);
            }
            else
            { 
                fill(255);
                square(x, y, 50);
            }
            
        }
    }
}
