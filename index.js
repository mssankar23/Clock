ampm = document.getElementById('ampm')
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds()); 
    if(hr>12){
        ampm.innerHTML = 'AM'
        hr = hr - 12
    }
    else{
        ampm.innerHTML = 'PM'
    }
    hr = padZero(hr);
    document.getElementById('hours').innerHTML = hr;
    document.getElementById('mins').innerHTML = min;
    document.getElementById('secs').innerHTML = sec;    
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime, 500)