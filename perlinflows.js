let particles = [];
const num = 1000;
const noiseScale = 0.01;
const config = {
    viewerWidth: 1280,
    viewerHeight: 720
};

function setup() {
  createCanvas(config.viewerWidth, config.viewerHeight);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255);

  setInterval(() => {
    const randomColor = color(random(255), random(145), random(80));
    randomColor.setAlpha(255 * 0.5);
    stroke(random(255), random(145), random(80));
    const randomNumber = random(10);
    if (randomNumber > 7) {
        noiseSeed(millis());
    }
  }, random(20) * 1000);
}

function draw() {
  background(0, 9);
  for (let i = 0; i < num; i++) {
    let particle = particles[i];
    point(particle.x, particle.y);
    let n = noise(particle.x * noiseScale, particle.y * noiseScale);
    let a = TAU * n;
    particle.x += cos(a);
    particle.y += sin(a);
    if (!onScreen(particle)) {
      particle.x = random(width);
      particle.y = random(height);
    }
  }
}

function onScreen({ x, y }) {
  return x >= 0 && x <= width && y >= 0 && y <= height;
}
