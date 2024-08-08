const myArray = [{
  name: 'vann',
  dueDate: '2022-12-22'},
  {
  name: 'vann2',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  myArray.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-btn js-delete-btn">Delete</button> 
      `;

      todoListHTML += html;
  })

  // for(let i = 0; i < myArray.length; i++){
  //   const valueObject = myArray[i];
  //   // const name = valueObject.name;
  //   // const dueDate = valueObject.dueDate;
  //   const { name, dueDate } = valueObject;
  //   const html = `
  //     <div>${name}</div>
  //     <div>${dueDate}</div>
  //     <button onclick="
  //       myArray.splice(${i}, 1);
  //       renderTodoList();
  //     " class="delete-todo-btn">Delete</button> 
  //     `;
  //   todoListHTML += html;
  // }

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

console.log(document.querySelectorAll('.js-delete-btn'));

document.querySelectorAll('.js-delete-btn')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click',() => {
    myArray.splice(index, 1);
    renderTodoList();
    })
  });

}

document.querySelector('.js-add-btn')
 .addEventListener('click',() => {
  addedTodoList(); 
 })


function addedTodoList(){
  const todoList1 = document.querySelector('.js-todo-list2');
  const name = todoList1.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  myArray.push({
    name,
    dueDate});

  todoList1.value = '';
  
  renderTodoList();
}
