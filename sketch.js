let snow = [];
let gravity = 0.01;

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.01);
    for (let i =0; i <325; i++){
        let x = random(width);
        let y = random(height);
        snow.push(new Snowflake(x,y));
    }

}

function draw() {
    console.log(snow.length);
    background(0);
    for (flake of snow) {
        flake.applyForce(gravity);
        flake.update();
        flake.render();
    }
}
