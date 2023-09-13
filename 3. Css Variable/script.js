//will access the css variable inside the js file

const inputs = document.querySelectorAll('input')

function handleChanges(){
   const suffix = this.dataset.sizing || '';
   document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix)
}

inputs.forEach(input => {
   input.addEventListener('change', handleChanges) 
   input.addEventListener('mousemove',handleChanges)
});