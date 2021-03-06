let canvas, query, players, time, currentTimer, started;
let timers = [];

window.onload = () => {
}

function setup(){
    query = new URLSearchParams(location.search);
    players = +(document.querySelector('#players').value = query.get('players'));
    time = +(document.querySelector('#time').value = query.get('time'));
    started = false;
    canvas = createCanvas(600, 600);
    canvas.mousePressed(cycleTime)
    for(let i = 0; i < players; ++i){
        timers.push(new Timer(time, map(i, 0, players, 0, 255)));
    }
}

function draw(){
    colorMode(HSB);

    if(!started){
        background(150, 255, 255);
        textAlign(CENTER, CENTER);
        text('Click to start', width/2, height/2)
        return;
    }

    let timer = timers[currentTimer];

    background(timer.colour, 255, 255);

    textAlign(CENTER, CENTER);
    textSize(32);
    textFont('monospace')
    text(timer.formattedTime(), width/2, height/2)

}

function cycleTime(){
    if(!started){
        currentTimer = 0;
        timers[0].startTimer();
        started = true;
        return;
    }
    timers[currentTimer].pause();
    currentTimer ++;
    currentTimer %= timers.length
    timers[currentTimer].startTimer();
}