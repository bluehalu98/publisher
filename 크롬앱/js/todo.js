const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

const TODOS_KEY = 'todos';

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

const deleteToDo = (event) => {
  const li = event.target.parentElement;
  toDos = toDos.filter(todo => todo.id != li.id)
  li.remove();
  saveToDos();
}

const paintToDo = (newToDoObj) => {
  const li = document.createElement('li');
  li.id = newToDoObj.id
  const span = document.createElement('span');
  span.innerText = newToDoObj.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li); 
}

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text : newToDo,
    id : Date.now(),
  }
  toDos.push(newToDoObj);
  saveToDos();
  paintToDo(newToDoObj);
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo)
}