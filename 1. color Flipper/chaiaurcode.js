let button =document.querySelector('button');
let body =document.querySelector('body')

let hex = '0123456789ABCDEF'


function hexCode(){
  let myHex = '#'
    for(let i=0; i<6; i++){
      myHex += hex.charAt(Math.random() *10)
    }
    return myHex;
}


button.addEventListener('click',function(){
    let code = document.querySelector('#code')
    console.log(hexCode());
    body.style.backgroundColor = hexCode();
    code.innerHTML = hexCode();
})