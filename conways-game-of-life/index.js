const size = 25;
let cells = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < width / size; i++) {
        cells[i] = [];
        for (let j = 0; j < width / size; j++) {
            cells[i][j] = 0;
        }
    }
    frameRate(40);
}

function draw() {

    for (let y in cells) {
        for (let x in cells[y]) {
            fill(255 - cells[y][x] * 255);
            rect(x * size, y * size, size, size);
        }
    }
    if (mouseIsPressed) {
        const x = floor(mouseX / size);
        const y = floor(mouseY / size);
        cells[y][x] = 1;
    }

    if (frameCount % 30 == 0) {
        update();
    }
}

function update() {
    const next = [];
    for (let y in cells) {
        const arr = [];
        for (let x in cells[y]) {
            const neighbors = countNeighbors(+x, +y);
            let n = 0;
            if (cells[y][x] == 1 && neighbors == 2 || neighbors == 3) {
                n = 1;
            } else if (cells[y][x] == 0 && neighbors == 3) {
                n = 1;
            } else {
                n = 0;
            }
            arr.push(n)
        }
        next.push(arr);
    }
    // console.log(next);
    cells = next;
}

function countNeighbors(x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const newX = (x + j + (width / size)) % (width / size);
            const newY = (y + i + (height / size)) % (height / size);
                // print(y, i, y+i)
                sum += cells[newY][newX];
        }
    }
    return sum - cells[y][x];
}

function mousePressed() {
    const x = floor(mouseX / size);
    const y = floor(mouseY / size);
    cells[y][x] = 1;
}