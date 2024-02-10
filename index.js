const countdown = () => {
   
    const now = new Date();
    const isPastThisYearsHween = now.getMonth() > 9 || now.getMonth() === 9 && now.getDate() === 31;
    const target = new Date(now.getFullYear() + isPastThisYearsHween, 9, 31);
    const gap = target - now



    //How the fuck does time work?
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    //caculate the shit
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







//chat feature? hopefully soon. updates to come.

var socket = io();
socket.emit('newuser', "pineapples");
socket.on("update", function(data){
    console.log(data);
} )




