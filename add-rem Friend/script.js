let btn =document.querySelector('#btn');
let isStatus =document.querySelector('h4');
let flag =0;

btn.addEventListener('click',function(){
    if(flag ==0){    
        btn.innerHTML ="Remove Friend"
        isStatus.innerHTML = "Friend";
        isStatus.style.color = '#3aff3d';
        flag =1;
    }else {
        btn.innerHTML ="Add Friend"
        isStatus.innerHTML = "Strange";
        isStatus.style.color = 'rgb(255, 70, 70)';
        flag =0;
    }
})