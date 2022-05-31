export default class Task {
  constructor () {
    this.lists = [];
  }

  addList(description, completed, index) {
    this.lists.push ({description, completed, index});
    this.showLists();
    this.lists.length = 0;
  }
  showLists () {
    const wrapper = document.getElementById ('list-ul');
    for (let index of this.lists) {
      wrapper.innerHTML += `<li class="list-li">
        <div class="list-input">
        <div>
        <input type="checkbox">
        <label>${index.description}</label>
        </div>
        <span class="v-dots"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
        </div>
        </li>
        <hr>`;
    }
  }
}
