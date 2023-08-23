let btn = document.getElementById('btn');
let body =document.querySelector('body');

let hex ='0123456789ABCDEF'


btn.addEventListener('click',function(){
    let myRandomColor = '#';
    for(let i=0; i<6; i++){
        myRandomColor += hex[Math.floor(Math.random() *16)]; 
    }
    body.style.backgroundColor = myRandomColor;
    console.log(myRandomColor);
});
