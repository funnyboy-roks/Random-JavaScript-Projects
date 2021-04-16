const segments = [];
const len = 60;
const x = 10;
const y = 10;
let current = 0;

class Segment {
	constructor(x1, y1, dir) {
		this.dir = dir; // 0 = horizontal 1 = vertical
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x1 + (1 - dir) * len;
		this.y2 = y1 + dir * len;
	}

	show(shouldShow) {
		if (shouldShow) {
			line(this.x1, this.y1, this.x2, this.y2);
		}
	}
}

function setup() {
    const cnv = createCanvas(600, 400);
    cnv.mouseWheel(changeSize);
	segments.push(new Segment(x,       y,           0)); // top
	segments.push(new Segment(x + len, y,           1)); // right
	segments.push(new Segment(x + len, y + len,     1)); // bottom right
	segments.push(new Segment(x,       y + 2 * len, 0)); // bottom
	segments.push(new Segment(x,       y + len,     1)); // bottom left
	segments.push(new Segment(x,       y,           1)); // left
	segments.push(new Segment(x,       y + len,     0)); // middle
    scale(2);
}

function draw() {
	background(220);
	stroke(200, 10, 10);
	strokeWeight(8);
    drawSymbol(current);

    stroke(0);
    fill(0);
    textSize(32);
    strokeWeight(2);
    textAlign(RIGHT);
    text(current, width -10, 50);

    text(toFormattedBin(current), width -10, 100);

    noLoop();
}

function keyPressed(){
    current ++;
    redraw();
}

function changeSize(event){
    if(event.deltaY < 0){
        current ++;
    }else{
        current --;
    }
    current = constrain(current, 0, 127);
    redraw();
}

/**
 * @param {Number} n Integer between 0(all off) and 255(all on)
 */
const drawSymbol = (n) => {
    const bin = n.toString(2).split('').reverse();
	for (let i in segments) {
        segments[i].show(+bin[i]);
	}
};
const toFormattedBin = (n) => n.toString(2).padStart(7, 0);
