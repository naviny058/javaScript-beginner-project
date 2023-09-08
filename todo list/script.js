const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')

addTask.addEventListener('click',function(){
  const inputTask = document.getElementById('input-task');
  
  let task = document.createElement('div')
  task.classList.add('task')

  let li =document.createElement('li')
  li.innerText = inputTask.value;
  task.appendChild(li)

  
  let checkbutton = document.createElement('button');
  checkbutton.innerHTML= 'check'
  checkbutton.classList.add('checkbutton')
  task.appendChild(checkbutton)

  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML= 'Delete'
  deleteBtn.classList.add('deleteBtn')
  task.appendChild(deleteBtn)

  if(inputTask.value == ''){
    alert('input task cannot be empty')
  }else{
    taskContainer.appendChild(task);
  }
  inputTask.value = ""

  checkbutton.addEventListener('click',function(){
    checkbutton.parentElement.style.textDecoration= 'line-through'
  })
  deleteBtn.addEventListener('click',function(e){
   let target = e.target

   target.parentElement.parentElement.remove();
  })
})