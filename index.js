document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });

    function addTask(taskText) {
      const taskItem = document.createElement('li');
      taskItem.className = 'task-item';

      const taskTextElement = document.createElement('span');
      taskTextElement.className = 'task-text';
      taskTextElement.innerText = taskText;

      const taskActions = document.createElement('div');
      taskActions.className = 'task-actions';

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

      taskActions.appendChild(editButton);
      taskActions.appendChild(deleteButton);

      taskItem.appendChild(taskTextElement);
      taskItem.appendChild(taskActions);

      taskList.appendChild(taskItem);
    }
  });