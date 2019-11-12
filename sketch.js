
var particles = [];

function preload(){
    fuu1 = loadImage('fuukk/neon-transparent-aesthetic-2.png')
    fuu2 = loadImage('fuukk/neon-signs-png-1.png')
    fuu3 = loadImage('fuukk/kisspng-purple-logo-neon.png')
    fuu4 = loadImage('fuukk/kisspng-neon-sign-neon-lighting-tumblr-e.png')
    fuu5 = loadImage('fuukk/kisspng-neon-sign-fizzy-drinks.png')
    fuu6 = loadImage('fuukk/kisspng-neon-sign-brand-lo.png')
    fuu7 = loadImage('fuukk/cajfkoefi.png')
    fuu8 = loadImage('fuukk/kisspng-neon-sign-billboard.png')
    fuu9 = loadImage('fuukk/kisspng-cocktail-vodka.png')

}

function setup() {
  createCanvas(800, 600);
  
 // noStroke()
 // colorMode(HSB, 100, 200, 30);
imageMode(CENTER)
 // smooth()

//   for (var i = 0; i < 150; i++) {
//     particles.push(new Particle);
//   }

}

function draw() {
  background(0);

//   for (var particle of particles) {
//     particle.display();
//   }



if (frameCount % 10 == 0) {
    particles.push(new Particle());

    if(frameCount % 60 == 0) {
        particles.push(new Particle)
    }
}

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();

  }

  if (particles.cSize < 100) {
    particles.splice (i, 1)
}

}



function Particle() {
  this.xPos = random(-50, width);
  this.yPos = random(-50, height)
  this.cSize = 100
  this.dSize = 100
 // this.cColor = random(colorMode)

  

  this.display = function () {
    let picks = random(fuu1, fuu2, fuu3, fuu4, fuu5, fuu6, fuu7, fuu8, fuu9)
   let signs = random(picks)
   // circle(this.xPos, this.yPos, 10);
   //fill(this.cColor)
   this.cSize = this.cSize +1.3
   this.dSize = this.cSize +1.3
   image(signs, this.xPos, this.yPos, this.cSize, this.dSize)
   
  }



}