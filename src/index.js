document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
const input = document.getElementById('new-task-description').value;

const taskList = document.getElementById('tasks');

const todoList = document.getElementById('list');


const form = document.getElementById('create-task-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = e.target.new.value;
  // const task = document.new-task-description.value;
  const listItem = document.createElement('li');
  listItem.innerText = task;
  taskList.append(listItem);



    
  //listItem.appendChild(input);
  //taskList.appendChild(listItem);
})
});
//DOMContentLoaded() will  wait until the DOM is loaded before callback  is runc

//we want to:
//1.create a 'submit' event listener on 'creat new task', and preventDefault so that the oage doesnt refresh
//const newTask = form.addEventListener('submit',function that adds value of id'new-task-description' to the ul 'tasks')
//2. then we want to take the 'text' from the input text box 'new-task-description' and move it to the unordered list 
//   'tasks' inside div is 'list'





//3. adds an 'X' button that will remove the list item 

