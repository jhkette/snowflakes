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
        this.vel.add(this.acc);
        this.vel.limit(this.r * 0.2);
        if (this.vel.mag() < 1) {
            this.vel.normalize();
        }

        this.pos.add(this.vel);
        this.acc.mult(0);

        if (this.pos.y > height + this.r) {
            this.randomize();
        }
    }

    render() {
        push();
        translate(this.pos.x,  this.pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.r, this.r);
        pop();
        

    }

}
