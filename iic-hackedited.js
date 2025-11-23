let todoList = [];

function print() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const html = `
      <div>${todo.name}</div>
      <div>${todo.duedate}</div>
      <button class="delete" onclick="
        todoList.splice(${i}, 1);
        print();
      ">Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo').innerHTML = todoListHTML;
}


function AddList() {
  const inputElement = document.querySelector('.input');
  const duedateElement = document.querySelector('.duedate');

  const input = inputElement.value;
  const duedate = duedateElement.value;

  todoList.push({
    name: input,
    duedate: duedate
  });

  // Clear fields correctly
  inputElement.value = '';
  duedateElement.value = '';

  print();
}
