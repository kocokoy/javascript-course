const myArray = JSON.parse(localStorage.getItem('todo')) || [{
  name: 'vann',
  dueDate: '2022-12-22'},
  {
  name: 'vann2',
  dueDate: '2022-12-22'
  }];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < myArray.length; i++){
    const valueObject = myArray[i];
    // const name = valueObject.name;
    // const dueDate = valueObject.dueDate;
    const { name, dueDate } = valueObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        myArray.splice(${i}, 1);
        renderTodoList();
        localStorage.removeItem('todo');
      "class="delete-todo-btn">Delete</button> 
      `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addedTodoList(){
  const todoList1 = document.querySelector('.js-todo-list2');
  const name = todoList1.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  myArray.push({
    name,
    dueDate});
  todoList1.value = '';
  localStorage.setItem('todo',JSON.stringify(myArray));

  console.log(typeof JSON.parse(localStorage.getItem('todo')));
  renderTodoList();
}
