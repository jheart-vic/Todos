import Task from "../modules/task.js"
import getFileContent from "./getfile.js"

describe('Testing', () => {
    document.body.innerHTML = getFileContent('../src/index.html');
    const taskInput = document.getElementById('task-input');
    taskInput.value = "New Task 1";
    let newList = new Task();
    test('Add New Task', () => {
        newList.addTasks();
        expect(newList.lists.length).toBe(1);
        expect(newList.lists[0].description).toBe("New Task 1");
    })
});
