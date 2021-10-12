const size = 25;
let cells = [];
let STATE = 'STOP';
const framesMod = 1; // Amount of frames between each cell update

function setup() {
    // createCanvas(600, 400);
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < Math.floor(width / size); i++) {
        cells[i] = [];
        for (let j = 0; j < Math.floor(width / size); j++) {
            cells[i][j] = 0;
        }
    }
    frameRate(40);
}

function draw() {
    background(200);
    for (let y in cells) {
        for (let x in cells[y]) {
            fill(255 - cells[y][x] * 255);
            stroke(cells[y][x] * 255);
            strokeWeight(2);
            rect(x * size, y * size, size, size);
        }
    }
    if (mouseIsPressed) {
        const x = floor(mouseX / size);
        const y = floor(mouseY / size);
        cells[y][x] = key == 'c' ? 0 : 1;
    }
    if (STATE == 'PLAY') {
        if (frameCount % framesMod == 0) {
            update();
        }
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

function keyPressed() {
    if (key == ' ') {
        switch (STATE) {
            case 'STOP':
                STATE = 'PLAY';
                break;
            case 'PLAY':
                STATE = 'STOP';
                reset();
                break;
        }
    }
}

function reset() {
    cells = [];
    for (let i = 0; i < width / size; i++) {
        cells[i] = [];
        for (let j = 0; j < width / size; j++) {
            cells[i][j] = 0;
        }
    }
}