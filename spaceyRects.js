let t = 0;
let numLines = 10;
const lineWeight = 5;
let speed = .125;
const alphaModifier = 255;
const line1Rgb = { r: 255, g: 85, b: 175 };
const line2Rgb = { r: 255, g: 155, b: 125 };

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  const line1Color = color(line1Rgb.r, line1Rgb.g, line1Rgb.b);
  const line2Color = color(line2Rgb.r, line2Rgb.g, line2Rgb.b);
  let modifier = .125;
  noFill();
//   const fillColor = color(220, 220, 220);
//   fillColor.setAlpha(255 * .1);
//   fill(fillColor);

  for (let i = 0; i < numLines; i++) {
    line1Color.setAlpha(i / numLines * alphaModifier * modifier);
    line2Color.setAlpha(i / numLines * alphaModifier * modifier);
    strokeWeight(lineWeight);
    stroke(line1Color);
    const t1 = t + (i * 1);
    for (let j = 0; j < 10; j++) {
        rect(x1(t1 * j), y1(t1 * j), x2(t1), y2(t1));
        for (let jj = 0; jj < 10; jj++) {
            rect(x1(t1 * j), y1(t1 * jj), x2(t1), y2(t1));
        }
    }
    
    strokeWeight(lineWeight);
    stroke(line2Color);
    const t2 = -1 * t1;
    for (let j = 0; j < 10; j++) {
        rect(x1(t2 * j), y1(t2 * j), x2(t2), y2(t2));
        for (let jj = 0; jj < 10; jj++) {
            rect(x1(t2 * j), y1(t2 * jj), x2(t2), y2(t2));
        }
    }
  }

  t += speed * random(5);

  if (t > 150 || t < 0) {
    t = 0;
  }

}

function x1(t) {
  return t + random(10);
}

function y1(t) {
  return t - random(10);
}

function x2(t) {
  return t + random(10);
}

function y2(t) {
  return t - random(10);
}