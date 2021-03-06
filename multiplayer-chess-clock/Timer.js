class Timer {
	/**
	 * @param {Number} time Number of seconds of time on the timer
	 */
	constructor(time, colour) {
		this.time = time;
		this.paused = true;
		this.colour = colour || Math.round(Math.random() * 255);
	}

	startTimer() {
		this.paused = false;
		this.timer = setInterval(() => {
			this.time -= 0.004;

			this.time = Math.round(this.time * 1000) / 1000;

			if (this.time <= 0) {
				this.paused = true;
			}

			if (this.paused) {
				clearInterval(this.timer);
			}
		}, 4);
	}

    pause(){
        this.paused = true;
    }

	formattedTime() {
        const num = Math.floor(this.time * 100) / 100;
        const numArr = ("" + num).split('.');
        return "" + numArr[0].padStart(2, '0') + '.' + ((numArr[1] || '') + '').padEnd(2, '0');
    }
}
