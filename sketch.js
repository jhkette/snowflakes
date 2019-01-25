/* from coding train and modified, added comments  */

let snow = [];
let gravity = 0.01;
var spritesheet;
let textures = [];
//preload image
function preload() {
    spritesheet = loadImage('flakes32.png');
}
// create canvas, create gravit force, slip up spritesheet, push into array
function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.3);
    for (let x = 0; x < spritesheet.width; x += 32) {
        for (let y = 0; y < spritesheet.height; y += 32) {
            let img = spritesheet.get(x, y, 32, 32);
            image(img, x, y);
            textures.push(img);
        }
    }
    // create snow random width, height and textures, push new instance of snowflake into array
    for (let i = 0; i < 300; i++) {
        let x = random(width);
        let y = random(height);
        let design = random(textures);
        snow.push(new Snowflake(x, y, design));
    }
}



// for each flake of snow, apply force, update position, render
function draw() {
    background(0);
    for (flake of snow) {
        flake.applyForce(gravity);
        flake.update();
        flake.render();
    }
}
