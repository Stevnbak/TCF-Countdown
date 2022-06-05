function startTimer() {
    timer();
    setInterval(function () {
        timer();
    }, 500);
}

function timer() {
    var dateLocal = new Date();
    var currentTime = Math.floor(dateLocal);
    var goalTime = Math.floor(new Date(Date.UTC(2022, 5, 8, 12, 0, 0, 0)));
    var nextGoalTime = Math.floor(new Date(Date.UTC(2022, 5, 22, 12, 0, 0, 0)));
    var timer = Math.floor((goalTime - currentTime) / 1000);
    if (timer < 0) {
        document.querySelector('#title').textContent = 'Season 1 Countdown';
        timer = Math.floor((nextGoalTime - currentTime) / 1000);
        if (timer < 0) {
            document.querySelector('#title').textContent = 'Time since Season 1 started';
            timer = Math.floor((currentTime - nextGoalTime) / 1000);
        }
    } else {
        document.querySelector('#title').textContent = 'Pre-Season Countdown';
    }

    days = Math.floor(timer / 24 / 60 / 60);
    hours = Math.floor(timer / 60 / 60 - days * 24);
    minutes = Math.floor(timer / 60 - (days * 24 * 60 + hours * 60));
    seconds = Math.floor(timer - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60));
    if (days < 10) days = '0' + days;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    document.querySelector('#time').textContent = days + ':' + hours + ':' + minutes + ':' + seconds;
}
