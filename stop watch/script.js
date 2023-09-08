let startStopBtn = document.querySelector('#startStopBtn')
let resetBtn = document.querySelector('#resetBtn')

let seconds = 0
let min = 0; 
let hour = 0;

let leadingSecond = 0
let leadingMin =0
let leadingHour =0

function stopWatch(){

  seconds++

  if(seconds/60 == 1){
    seconds =0;
    min++
  }
  if(min/60 ==1){
    min = 0;
    hour++
  }
  if(seconds<10){
    leadingSecond = "0"+seconds.toString();
  }else{
    leadingSecond =seconds
  }

  if(min <10){
    leadingMin = "0"+min.toString();
  }else{
    leadingMin = min
  }

  if(hour<10){
    leadingHour = "0"+hour.toString()
  }else{
    leadingHour = hour
  }
   let displayTimer = document.querySelector('#timer').textContent = leadingHour+":"+leadingMin+":"+leadingSecond
}

let play=true
startStopBtn.addEventListener('click',function(){
  if(play){
    timeInterval =window.setInterval(stopWatch,1000)
    startStopBtn.textContent = "stop"
    play=false
  }else{
    timeInterval= window.clearInterval(timeInterval)
    startStopBtn.textContent = "start"
    play=true
  }
})
resetBtn.addEventListener('click',function(){
  window.clearInterval(timeInterval)

   seconds = 0
   min = 0; 
   hour = 0;
   startStopBtn.textContent = "start"
  document.querySelector("#timer").textContent = "00:00:00"
  
})