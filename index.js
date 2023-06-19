
document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const completedTasksButton = document.getElementById('completed-tasks-button');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
  });

  completedTasksButton.addEventListener('click', () => {
    const completedTasks = document.getElementsByClassName('completed');
    fetch('https://dummyjson.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([...completedTasks])
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        
        console.error(error);
      });
  });

  function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskTextElement = document.createElement('span');
    taskTextElement.className = 'task-text';
    taskTextElement.innerText = taskText;

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Completed';
    completeButton.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
    });

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => {
      const newTaskText = prompt('Enter new task text:', taskText);
      if (newTaskText !== null) {
        taskTextElement.innerText = newTaskText;
      }
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    taskActions.appendChild(completeButton);
    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(taskActions);

    taskList.appendChild(taskItem);
  }
});

