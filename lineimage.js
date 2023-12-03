let img;
const canvasHtmlElement = document.querySelector('canvas#viewer');

function preload() {
    img = loadImage('assets/images/bg.jpeg');
}

function setup() {
    canvasElement = createCanvas(img.width, img.height, canvasHtmlElement);
    describe('Lines on Image.');
    //let newCanvasX = (windowWidth / img.width) / 2;
    //let newCanvasY = (windowHeight / img.height) / 2;
    let newCanvasX = img.width;
    let newCanvasY = img.height;
    canvasElement = (newCanvasX, newCanvasY);
    frameRate(15);
}

function draw() {
    runEffect(35);
    // image(img, 0, 0);
    // tint(255, 255 * .2);
}

function runEffect(stepSize = 10) {
    for (let xPos = 0; xPos < img.width; xPos+=stepSize) {
        for (let yPos = 0; yPos < img.height; yPos+=stepSize) {
            let c = img.get(xPos, yPos);
            push();
            translate(xPos, yPos);
            rotate(radians(random(360)));
            noFill();
            stroke(color(c));
            strokeWeight(random(6));
            point(xPos, yPos);
            strokeWeight(random(3));
            curve(
                xPos, yPos,
                sin(xPos) * random(55), cos(yPos) * sin(xPos) * random(121),
                random(10), random(7), 
                cos(yPos) * random(154), cos(yPos) * sin(xPos) * random(54)
            );
            pop();
        }
    }
}