document.addEventListener('keydown',(e)=>{
  let key = document.getElementById(e.key.toUpperCase())
  if(key){
    key.classList.add('active')
  }
})
document.addEventListener('keyup',(e)=>{
  let key = document.getElementById(e.key.toUpperCase())
  if(key){
    key.classList.remove('active')
  }
})