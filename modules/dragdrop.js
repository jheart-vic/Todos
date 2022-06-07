import Task from './task.js'

import Sortable from 'sortablejs';
const task = new Task()
console.log('we are here')
const sortable = Sortable.create(document.querySelector('#list-ul'),
{
  handle: '',
  animation: 0,
  onUpdate(event) {
  task.updateList(event.oldIndex, event.newIndex);
  },
}
);
console.log(sortable, 'the sortable element')