function digitalClock(){
    let date=new Date();
    let hours=date.getHours();
    let munites=date.getMinutes();
    let seconds=date.getSeconds();
    let timeFormat='AM';
    if(hours==10){
        hours=12;
    }
    if(hours>12){
        hours=hours-12;
        timeFormat='PM';
    }
    hours = hours <10 ? '0' + hours :   hours;
    munites = munites <10 ? '0' + munites :   munites;
    seconds = seconds <10 ? '0' + seconds :   seconds;

    let finalTime=`${hours} : ${munites} :${seconds}`
    document.getElementById('time').innerText=finalTime;
    document.querySelector('small').innerText=timeFormat;
    setInterval(digitalClock ,1000)

    
}
digitalClock()