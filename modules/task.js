export default class Task {
  constructor() {
    this.lists = JSON.parse(localStorage.getItem('list')) || [];
    this.editId = null;
  }

  addList() {
    const taskInput = document.getElementById('task-input');
    const list = { description: '', completed: false, index: 0 };
    list.description = taskInput.value;
    if (this.editId) {
      const index = this.editId[this.editId.length - 1];
      this.lists.splice(index, 1, list);
      localStorage.setItem('list', JSON.stringify(this.lists));
    } else {
      list.index = this.lists.length + 1;
      this.lists.push(list);
      localStorage.setItem('list', JSON.stringify(this.lists));
      this.showLists([list]);
      taskInput.value = '';
    }
    window.location.reload();
    this.isEditing = null;
  }

  showLists(list) {
    const renderedList = list || this.lists;
    renderedList.forEach((item, index) => {
      const wrapper = document.getElementById('list-ul');
      wrapper.innerHTML += `<li class="list-li" id="collection-${index}">
      <div class="list-input">
      <div class="input-box">
      <input type="checkbox" class="completed" required ${
  item.completed ? 'checked' : ''
}>
      <label class="check ${
  item.completed ? 'checked' : ''
}" id="description-${index}">${item.description}</label>
      </div>
      <span><i class="fa fa-trash-o del-btn btn-${index}" aria-hidden="true"></i></i></span>
      </div>
      </li>`;
    });
  }

  editTask(id, description) {
    const input = document.getElementById('task-input');
    input.value = description;
    this.editId = id;
  }

  delete(deleteClass) {
    const delList = document.querySelectorAll('.del-btn');
    delList.forEach((item) => {
      if (item.classList.contains(deleteClass)) {
        const index = deleteClass[deleteClass.length];
        this.lists.splice(index, 1);
        this.lists.forEach((value, index) => {
          value.index = index + 1;
        });
        localStorage.setItem('list', JSON.stringify(this.lists));
        item.parentElement.parentElement.parentElement.remove();
      }
    });
  }

  completed() {
    const listId = this.parentElement.parentElement.parentElement.id;
    const index = listId[listId.length - 1];
    const isElementChecked = this.checked;
    this.nextElementSibling.classList.toggle('checked');
    const lists = JSON.parse(localStorage.getItem('list'));
    lists.splice(index, 1, {
      description: this.nextElementSibling.innerHTML,
      completed: isElementChecked,
      index,
    });
    localStorage.setItem('list', JSON.stringify(lists));
  }

  clearComplete() {
    const completedTasks = document.querySelectorAll('.checked');
    completedTasks.forEach((task) => {
      const { parentElement } = task.parentElement.parentElement;
      const elementId = parentElement.id;
      const index = elementId[elementId.length - 1];
      this.lists[index].completed = true;
      const filteredList = this.lists.filter((task) => task.completed !== true);
      localStorage.setItem('list', JSON.stringify(filteredList));
      window.location.reload();
    });
  }
}
