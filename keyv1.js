let keyModel;

function preload() {
    keyModel = loadModel('assets/models/keyv1-optimized.obj', true);
    keyModel1 = loadModel('assets/models/keyv1-optimized.obj', true);
}

function setup() {
    createCanvas(500, 500, WEBGL);
    describe('Displays a model of our beloved crew key.');
    //debugMode();
    angleMode(DEGREES);
    //ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
}

function draw() {
    let turn = frameCount * 1;
    background(0);
    // orbitControl();

    ambientLight(128);
    let locX = width * .5;
    let locY = height * .125;
    pointLight(255, 255, 255, locX, locY, 1000);

    material();

    translate(0, -1.25, 300);
    rotateX(0);
    rotateZ(180);
    rotateY(turn);
    //rotateY(turn);
    model(keyModel);
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