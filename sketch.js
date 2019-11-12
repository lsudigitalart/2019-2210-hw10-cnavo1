
var particles = [];
var colorMode = ['red', 'blue', 'yellow', 'green']

function setup() {
  createCanvas(800, 600);
  
 // noStroke()
 // colorMode(HSB, 100, 200, 30);
 
  smooth()

  for (var i = 0; i < 150; i++) {
    particles.push(new Particle);
  }
}

function draw() {
  background(0);

  for (var particle of particles) {
    particle.display();
  }

if (frameCount % 10 == 0) {
    particles.push(new Particle());

    // if(frameCount % 60 == 0) {
    //     particles.push(new Particle)
    // }
}

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();

  }

  if (particles.dSize < 10 && particle.cSize < 10) {
    particles.splice (i, 1)
}

}


function Particle() {
  this.xPos = random(-50, width);
  this.yPos = random(-50, height)
  this.fPos = random(-50, width)
  this.cSize = random(50, 100)
  this.dSize = random(50, 100)
  this.cColor = random(colorMode)
  this.fSize = random(10, 20)



  this.display = function () {
   fill(this.cColor)
   ellipse(this.xPos, this.yPos, this.cSize, 20);
   ellipse(this.fPos, this.yPos, 20, this.dSize)
  
   
   this.cSize = this.cSize -+ 1.3
   this.dSize = this.cSize -+ 1.3
 
  
   
  }



}