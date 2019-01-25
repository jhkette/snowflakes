class Snowflake {
    constructor(){
        let x = random(width);
        let y = random(-100 -10);
        this.pos = createVector(x, y);
        this.vel = createVector(0,5);
        this.acc = createVector();
        this.r = random(1,8);
        this.terminalV = this.r;
    }

    applyForce(force){
     let f = force.copy();
     f = f.mult(this.r);
     this.acc.add(f);
    }

    update(){
        this.vel.limit(this.r * 0.2);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    render(){
        stroke(255);
        strokeWeight(this.r);
        point(this.pos.x, this.pos.y);
    }

    offScreen(){
        return (this.pos.y > height + this.r);
    }


}
