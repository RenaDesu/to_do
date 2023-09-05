import {
    addTask
} from './add-task';

const taskName = document.querySelector('[data-task-name]');
const taskDescription = document.querySelector('[data-task-description]');
const taskDate = document.querySelector('[data-task-date]');
const taskTime = document.querySelector('[data-task-time]');
const taskAddBtn = document.querySelector('[data-task-add]');
const form = document.querySelector('[data-form]');

taskAddBtn.addEventListener('click', () => {
    getTask(taskName.value, taskDescription.value, taskDate.value, taskTime.value);
    form.reset();
});


function getTask(name, description, date, time) {
    let data;

    const tasksArray = [{
        name: `${name}`,
        description: `${description}`,
        date: `${date}`,
        time: `${time}`
    }, ];

    localStorage.setItem(`item ${localStorage.length}`, JSON.stringify(tasksArray[0]));
   
    data = JSON.parse(localStorage.getItem(`item ${localStorage.length - 1}`));

    addTask(data.name, data.description, data.date, data.time);
}

for (let i = 0; i < localStorage.length; i++) {
    let data;
    data = JSON.parse(localStorage.getItem(`item ${i}`));
    addTask(data.name, data.description, data.date, data.time);
}
// localStorage.clear();