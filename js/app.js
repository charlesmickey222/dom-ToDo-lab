const inputElement = document.querySelector('#input-field');
const submitBtn = document.querySelector('#submit-button');
const toDoList = document.querySelector('#todo-list');

submitBtn.addEventListener('click', function(){
  const newThing = document.createElement('li');
  newThing.innerText = inputElement.value;
  toDoList.appendChild(newThing);
  inputElement.value = '';
},);

document.querySelectorAll('li').addEventListener('click',function(){})