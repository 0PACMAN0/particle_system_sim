let particles=[];
function setup()
{
    createCanvas(600,400);
    
   }

function draw()
{
    background(0);
    
    for(let i=0;i<65;i++)
    {
    let p=new Particle();
    
    particles.push(p);
    }
    for(let i=particles.length-1;i>=0;i--)
    {   particles[i].update();
        particles[i].show();
        if(particles[i].finished())
        {
            // remove
            particles.splice(i,1);
        }
    }

}
class Particle{
    constructor()
    {
        this.x=300;
        this.y=380;
        this.vx=random(-3,3);
        this.vy=random(-6,-1);
        this.alpha=255;
    }
    show()
    {
        noStroke();
        // stroke(255);
        fill(255,this.alpha);
        ellipse(this.x,this.y,16);

    }
    finished()
    {
        return this.alpha<0;
    }
    update()
    {
        this.x+=this.vx;
        this.y+=this.vy;
        this.alpha-=4;

    }
}