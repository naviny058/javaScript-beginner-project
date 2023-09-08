
const accordion = document.getElementsByClassName('content-container');

for(let i= 0; i<accordion.length; i++){
  accordion[i].addEventListener('click',function(){
    // now link this active to style.css file
    this.classList.toggle('active')
  })
}