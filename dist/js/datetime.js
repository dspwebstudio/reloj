
function updateTime(){
    var currentTime = new Date();
    // time
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // date
    var day = currentTime.getDate();
    var month = currentTime.getMonth() + 1;
    var year = currentTime.getFullYear();
    
    //pull the last two digits of the year
    year = year.toString().substr(-2);
    
    //  inicio meses texto
    // var month = new Array();
    //     month[0] = "Ene";
    //     month[1] = "Feb";
    //     month[2] = "Mar";
    //     month[3] = "Abr";
    //     month[4] = "May";
    //     month[5] = "Jun";
    //     month[6] = "Jul";
    //     month[7] = "Ago";
    //     month[8] = "Sep";
    //     month[9] = "Oct";
    //     month[10] = "Nov";
    //     month[11] = "Dec";
    //  fin meses texto
    
    var year = currentTime.getFullYear()
    // conditionals
    if (day < 10){
        day = "0" + day
    }
    if (month < 10){
        month = "0" + month
    }
    if (hours < 10){
        hours = "0" + hours
    }
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (seconds < 10){
        seconds = "0" + seconds
    }
    if(hours < 12){
        var t_str = hours + ":" + minutes + ":" + seconds + " " + "a.m.";
        document.getElementById('time').innerHTML = t_str
    }
    if(hours > 12){
        hourspm = hours -12;
        if (hourspm < 10) {
            hourspm = "0" + hourspm
            var t_str = hourspm + ":" + minutes + ":" + seconds + " " + "p.m.";
            document.getElementById('time').innerHTML = t_str
        } else {
            var t_str = hourspm + ":" + minutes + ":" + seconds + " " + "p.m.";
            document.getElementById('time').innerHTML = t_str
        }
    }
    if(hours == 12){
        hours = 12
        var t_str = hours+ ":" + minutes + ":" + seconds + " " + "p.m.";
        document.getElementById('time').innerHTML = t_str
    }
    if(hours == 0){
        hours = 12
        var t_str = hours + ":" + minutes + ":" + seconds + " " + "a.m.";
        document.getElementById('time').innerHTML = t_str
    }
    
    var d_str = day + "-" + month + "-" + year ;
    document.getElementById('date').innerHTML = d_str;
    
}
setInterval(updateTime, 1000);



