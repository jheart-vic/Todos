import Task from '../modules/task.js';
import getFileContent from './getfile.js';

describe('Testing', () => {
  document.body.innerHTML = getFileContent('../src/index.html');
  const taskInput = document.getElementById('task-input');
  taskInput.value = 'New Task 1';
  const newList = new Task();
  test('Add New Task', () => {
    newList.addTasks();
    expect(newList.lists.length).toBe(1);
    expect(newList.lists[0].description).toBe('New Task 1');
  });
  test('Remove Task', () => {
    newList.deleteTask('btn-0');
    expect(newList.lists.length).toBe(0);
  });
  test('Edit Task Description', () => {
    taskInput.value = 'Task to be edited';
    newList.addTasks();
    newList.editTask('description-0', newList.lists[0].description);
    taskInput.value = 'Edited Task';
    newList.addTasks();
    expect(newList.lists[0].description).toBe('Edited Task');
  });
});
