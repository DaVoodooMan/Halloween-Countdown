const countdown = () => {
    const countDate = new Date("October 31, 2021 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;    


    //How the fuck does time work?
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    //cacualte the shit
    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSeconds = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSeconds;
    
};
countdown();
setInterval(countdown, 1000);






