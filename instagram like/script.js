let con =document.querySelector('.continer');
let love =document.querySelector('i');

con.addEventListener('dblclick',function(){

    love.style.transform ='scale(1)'
    love.style.opacity ='0.9'
    
    setTimeout(function(){
        love.style.opacity ='0';
    },1000)
})