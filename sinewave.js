function setup() {
    createCanvas(500, 500, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background(10);

    rotateX(45);
    noFill();
    stroke(255);

    for (let i = 0; i < 30; i++) {
        let r = map(sin(frameCount), -1, 1, 22, 255);
        let g = map(i, 0, 20, 30, 255);
        let b = map(cos(frameCount), -1, 1, 255, 255);
        stroke(r, g, b);
        const fillColor = color(5, 5, 5);
        fillColor.setAlpha(55);
        fill(fillColor);
        
        rotate((i * .1) * (frameCount * .01));
        rotateY(frameCount * .005);
        rotateX(frameCount * .00025);

        beginShape();
        for (let j = 0; j < 360; j += 60) {
            let rad = i * 12;
            let x = rad * cos(j);
            let y = rad * sin(j);
            let z = sin(frameCount + 2 * i * 10) * 50;

            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
    
}