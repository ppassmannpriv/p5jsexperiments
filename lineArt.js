let t = 0;
let numLines = 50;
const lineWeight = 2;
const speed = .5;
const alphaModifier = 255;
const line1Rgb = { r: 255, g: 85, b: 175 };
const line2Rgb = { r: 255, g: 155, b: 125 };

function setup() {
  createCanvas(500, 500);
  background(20);
}

function draw() {
  background(20);
  translate(width / 2, height / 2);
  const line1Color = color(line1Rgb.r, line1Rgb.g, line1Rgb.b);
  const line2Color = color(line2Rgb.r, line2Rgb.g, line2Rgb.b);

  for (let i = 0; i < numLines; i++) {
    line1Color.setAlpha(i / numLines * alphaModifier);
    line2Color.setAlpha(i / numLines * alphaModifier);
    strokeWeight(lineWeight);
    stroke(line1Color);
    const t1 = t + i;
    line(x1(t1), y1(t1), x2(t1), y2(t1));
    strokeWeight(lineWeight);
    stroke(line2Color);
    const t2 = -1 * t1;
    line(x1(t2), y1(t2), x2(t2), y2(t2));
  }

  t += speed;
}

function x1(t) {
  return sin(t / 10) * 100 + sin(t / 5) * 20 - cos(t / 5);
}

function y1(t) {
  return cos(t / 10) * 100;
}

function x2(t) {
  return sin(t / 10) * 200 + sin(t) * 2 + sin (t / 25) * 25;
}

function y2(t) {
  return cos(t / 20) * 200 + cos(t / 12) * 24;
}