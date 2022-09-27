(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    
    var birthday = new Date("1993-09-28");
    birthday.setHours(0,0,0,0);
    birthday.setYear(0);
    
    let today_hk = new Date();
    let today_can = new Date(today_hk.getTime()-13*hour);

    today_hk.setHours(0,0,0,0);
    today_hk.setYear(0);
    today_can.setHours(0,0,0,0);
    today_can.setYear(0);

    // function 離港
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

    y = setInterval(function () {
        //display time
        const clock_hk_time = document.getElementById("clock_hk_time");
        const clock_can_time = document.getElementById("clock_can_time");

        let hk_time_text = new Date().toLocaleTimeString();
        let can_time_text = new Date().toLocaleTimeString("en-US", {timeZone: "Canada/Yukon"});

        clock_hk_time.innerText = hk_time_text;
        clock_can_time.innerText = can_time_text;
         
    }, 250)

    // birthday fucntion
    z = setInterval(function () {
        const clock_hk = document.getElementById("clock_hk");
        const clock_can = document.getElementById("clock_can");

        if (today_hk.valueOf() === birthday.valueOf()){
            clock_hk.style.color = "#b2beb5";
        } else {
            clock_hk.style.color = "white";
        }
        if (today_can.valueOf() === birthday.valueOf()){
            clock_can.style.color = "#b2beb5";
        } else {
            clock_can.style.color = "white";
        } 

        if (today_can.valueOf() === birthday.valueOf() || today_hk.valueOf() === birthday.valueOf()){
            bg_function = setInterval(function() {
                if (today_hk.valueOf() !== birthday.valueOf()) clock_hk.style.color = "white";
                if (today_can.valueOf() !== birthday.valueOf()) clock_can.style.color = "white";
                if (today_hk.valueOf() !== birthday.valueOf() && today_hk.valueOf() != birthday.valueOf()) clearInterval(bg_function);

                bd_raindrop();
            }, 10)
            clearInterval(z);
        }
        
    }, 250)
})();

function bd_raindrop() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const text = ["so long hbd!", "so long 生日快樂", "加拿大酒鬼生快"];

    const rainContainer = document.querySelector(".rain-container");
    const drop = document.createElement("i");

    //   CSS Properties for raindrop
    const raindropProperties = {
      width: Math.random() * 5 + "px",
      positionX: Math.floor(Math.random() * window.innerWidth) + "px",
      delay: Math.random() * -20 + "s",
      duration: Math.random() * 10 + 5 + "s",
      opacity: Math.random() + 0.2
    };
  
    //   Setting Styles for raindrop
    drop.style.width = raindropProperties.width;
    drop.style.left = raindropProperties.positionX;
    drop.style.animationDelay = raindropProperties.delay;
    drop.style.animationDuration = raindropProperties.duration;
    drop.style.opacity = raindropProperties.opacity;
    drop.style.color = colors[Math.floor(Math.random()*colors.length)];
    drop.innerText = text[Math.floor(Math.random()*text.length)];
  
    //   Appending the raindrop in the raindrop container
    rainContainer.appendChild(drop);    

    // delete out screen rain
    const rains = document.querySelectorAll('div i');
    for (let i = 0; i < rains.length; ++i){
        let rain_pos = rains[i].getBoundingClientRect();
        let pos_y = rain_pos.y;
        if (pos_y > window.innerHeight) rains[i].remove();
    }
}

