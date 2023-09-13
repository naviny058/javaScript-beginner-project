let second = document.querySelector('#sec')
let minute = document.querySelector('#min')
let hour = document.querySelector('#hrs')

function setDate(){
    const now = new Date()
    const sec = now.getSeconds()
    console.log(sec);
    const secDeg = ((sec / 60)*360 )+90
    second.style.transform =`rotate(${secDeg}deg)`

    const min = now.getMinutes()
    const minDeg = ((min / 60)*360)+90
    minute.style.transform = `rotate(${minDeg}deg)`

    const hrs = now.getHours()
    const hrsDeg = ((hrs /12)*360)+90
    hour.style.transform = `rotate(${hrsDeg}deg)`
}
setInterval(setDate,1000)