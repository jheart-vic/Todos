import Sortable from 'sortablejs';
import Task from './task.js';

const task = new Task();
Sortable.create(document.querySelector('#list-ul'),
  {
    handle: '',
    animation: 150,
    onUpdate(event) {
      task.updateList(event.oldIndex, event.newIndex);
    },
  });