const config = {
    canvasWidth: 500,
    canvasHeight: 500,
};
const ellipseSize = { width: 90, height: 90 };
const drawStart = { x: config.canvasWidth / 2, y: config.canvasHeight / 2 };
let x = drawStart.x;
let y = drawStart.y;
const speed = { 
    x: 2,
    y: 2.5,
    velocity: 1
};

function setup() {
    createCanvas(config.canvasWidth, config.canvasHeight);
    noStroke();
}

function draw() {
    background(220);
    x = x + speed.x * speed.velocity;
    if (x > config.canvasWidth - (ellipseSize.width / 2) || x < (ellipseSize.width / 2)) {
        speed.x *= -1;
    }
    y = y + speed.y * speed.velocity;
    if (y > config.canvasHeight - (ellipseSize.height / 2) || y < (ellipseSize.height / 2)) {
        speed.y *= -1;
    }
    drawElement(
        x,
        y,
        ellipseSize.width, 
        ellipseSize.height
    );

    fill(mouseIsPressed ? 0 : 255);
}

function drawElement(x, y, width, height) {
    return ellipse(
        x,
        y,
        width,
        height
    );
}