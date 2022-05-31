import './style.css';
import Task from '../modules/task.js';

const task = new Task();
task.addList('Dance with Sanja', true, 0);
task.addList('Dance with Toma', false, 1);
task.addList('Dance with Waleed', true);
task.addList('Dance with max', true, 3);
// task.addList({description: 'Dance with Sanja', completed: true, index: 1});
