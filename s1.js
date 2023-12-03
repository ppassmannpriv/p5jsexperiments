let img;

function preload() {
    img = loadImage('assets/svgs/s1symbol.svg');
}

function setup() {
    createCanvas(500, 500);
    describe('Lines on Image.');
}

function draw() {
    background(255);
    image(img, 0, 0);
}

function wireframe() {
    const fillColor = color(255, 255, 255);
    fillColor.setAlpha(255 * .1);
    fill(fillColor);
    stroke(255);
}

function material() {
    //noFill();
    noStroke();
    //stroke(255, 105, 149);
    //normalMaterial();
    ambientMaterial(219, 172, 52);
    //emissiveMaterial(255, 255, 255);
    //wireframe();
}