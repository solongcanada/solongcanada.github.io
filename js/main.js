(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    x = setInterval(function () {
        countDown = 1630659600000 + 2100000;

        let now = new Date().getTime(),
            distance = now - countDown;
 
        const status = document.getElementById("status");
        if (distance <= 0) {
            status.innerHTML = "離 Solong 離港";
            distance *= -1;
        } else {
            status.innerHTML = "So long 已離港";
        }

        const timer_days = document.getElementById("timer_days");
        const timer_hours = document.getElementById("timer_hours");
        const timer_mins = document.getElementById("timer_mins");
        const timer_seconds = document.getElementById("timer_seconds");

        (timer_days.innerText = Math.floor(distance / day)),
            (timer_hours.innerText = Math.floor((distance % day) / hour)),
            (timer_mins.innerText = Math.floor((distance % hour) / minute)),
            (timer_seconds.innerText = Math.floor((distance % minute) / second));

        //do something later when date is reached
        if (distance < 0) {
            clearInterval(x);
        }
        //seconds
    }, 250);
})();
