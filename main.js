var clockTime = setInterval(clocktiming, 1000);

function clocktiming() {
    const date = new Date();
    const clock = date.toLocaleTimeString();
    document.getElementById('display').innerHTML = clock;

}
