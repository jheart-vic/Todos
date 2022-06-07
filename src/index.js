import './style.css';
import Task from '../modules/task.js';
import '../modules/dragdrop.js';

const task = new Task();
window.addEventListener('load', task.showLists());

const btn = document.querySelectorAll('.del-btn');
const clearBtn = document.querySelector('#btn');
const listWrapper = document.querySelectorAll('.check');
const addTaskInput = document.getElementById('task-input');
const completed = document.querySelectorAll('.completed');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => task.addList());

addTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    task.addList();
  }
});

completed.forEach((item) => {
  item.addEventListener('click', task.completed);
});
clearBtn.addEventListener('click', () => task.clearComplete());
listWrapper.forEach((item) => {
  item.addEventListener('click', () => {
    task.editTask(item.id, item.innerText);
  });
});
btn.forEach((item) => item.addEventListener('click', () => task.delete(item.classList[item.classList.length - 1])));
