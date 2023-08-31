let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let reset = document.querySelector('#reset')
let button = document.querySelector('.button')
let count = document.querySelector('#count')

let currCount =0;

button.addEventListener('click',function(e){
    if(e.target.id == 'reset'){
        currCount =0;
        count.innerHTML = currCount
    }else if(e.target.id == 'inc'){
        currCount++;
        count.innerHTML = currCount;
    }else{
        currCount--
        count.innerHTML = currCount;
    }
    if(currCount <0){
        count.style.color = 'red';
    }else if(currCount == 0){
        count.style.color = 'white';
    }else{
        count.style.color = 'green';
    }
})