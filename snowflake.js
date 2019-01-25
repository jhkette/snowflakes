/* from coding train and modified, added comments  */
// get random size - number between 001 and 1 to the power of 5
function getRandomSize() {
    let r = pow(random(0.01, 1), 3);
    return constrain(r * 32, 2, 32);

}

// add position, velocity and acceleration to snowflake
class Snowflake {
    constructor(sx, sy, img) {
        let x = sx || random(width);
        let y = sy || random(-100, -10);
        this.img = img;
        this.pos = createVector(x, y);
        this.vel = createVector(0, 5);
        this.acc = createVector();
        this.r = getRandomSize();
        this.angle = random(TWO_PI);
        this.dir = (random(1) > .5) ? 1 : -1;
        this.Xoffset = 0;

    }
    //apply force, force is radius multiplied
    applyForce(force) {
        let f = force.copy();
        f = (f.mult(this.r * 0.9));
        this.acc.add(f);
    }
    // randomize which is used for renewed snowflakes
    randomize() {
        let x = random(width);
        let y = random(-100 - 10);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 5);
        this.acc = createVector();
        this.r = getRandomSize();

    }

    update() {
        // offset moves sprite of at an angle
        this.Xoffset = sin(this.angle) * this.r;
        this.vel.add(this.acc);
        this.vel.limit(this.r * 0.2);
        if (this.vel.mag() < 1) {
            this.vel.normalize();
        }

        this.pos.add(this.vel);
        this.acc.mult(0);

        if (this.pos.y > height + this.r) {
            this.randomize(); // call randomize when snowflakres have fallen off screen
        }
        this.angle += this.dir * this.vel.mag() / 200;
    }
/*
The translate() function allows objects to be moved to any location within the window.
The first parameter sets the x-axis offset and the second parameter sets the y-axis offset. P5.js */
    render() {
        push(); // Start a new drawing state
        translate(this.pos.x + this.Xoffset, this.pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.r, this.r);
        pop(); // Restore original state
    }

}
