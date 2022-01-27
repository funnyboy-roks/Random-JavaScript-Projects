let horizontal = true;
let count = 5;
let img;

function setup() {
	createCanvas(600, 400);
	img = loadImage('image.png');
	// noLoop();
}

function draw() {
	background(200);
	image(img, 0, 0, width, height);

	img.loadPixels();

	let { pixels } = img;

	console.log(pixels);

    let barHeight;
	if (horizontal) {
		barHeight = img.height / count;
	}

	for (let i = 0; i < count; i += i) {
		if (horizontal) {
			const pxStart = barHeight * i * 4;
			const pxEnd = (img.width * barHeight + pxStart) * 4;

			let px = pixels.slice(pxStart, pxEnd);
            const avg = average(px);

            push();
            // fill(avg.r, avg.g, avg.b);
            fill(200);
            noStroke();
            rect(0, i * barHeight, width, barHeight);
            pop();

		} else {
		}
	}

	noLoop();
}

function average(pixels = []) {
	const sum = {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
	};

	for (let i = 0; i < pixels.length; i += 4) {
		sum.r += pixels[i];
		sum.g += pixels[i + 1];
		sum.b += pixels[i + 2];
		sum.a += pixels[i + 3];
	}

	sum.r /= pixels.length / 4;
	sum.g /= pixels.length / 4;
	sum.b /= pixels.length / 4;
	sum.a /= pixels.length / 4;
    
    return sum;
}
