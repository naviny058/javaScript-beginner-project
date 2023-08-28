let timer =60;
let score =0;
let hitRn =0;
let clickNumber;

function hitScore(){
        score += 10;
        document.querySelector('#score').innerHTML = score;
}
function hit(){
     hitRn = Math.floor(Math.random() *10)
    document.querySelector("#hit-val").innerHTML = hitRn ;
}

function makeBubble(){

    let pbtm = document.querySelector('#pbtm');
    let clutter ="";
    for(let bubble=0; bubble<168; bubble++){
        let randomNumber = Math.floor(Math.random() *10)
        clutter += `<div class="bubble">${randomNumber}</div>`;
    }
    pbtm.innerHTML = clutter;
}

function runTimer(){
    let timerint =setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timer').innerHTML = timer;
        }else{
            document.querySelector('#pbtm').innerHTML = `<h1> Game Over</h1>`
            clearInterval(timerint);
        }
    },1000)
}

document.querySelector('#pbtm').addEventListener('click',function(details){
    clickNumber = parseInt(details.target.textContent);
    console.log(clickNumber);
    if(hitRn === clickNumber){
        hitScore();
        makeBubble();
    }
    hit()
})
makeBubble();
runTimer()