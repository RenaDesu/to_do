import {
    addTask
} from './add-task';

const taskName = document.querySelector('[data-task-name]');
const taskDescription = document.querySelector('[data-task-description]');
const taskDate = document.querySelector('[data-task-date]');
const taskTime = document.querySelector('[data-task-time]');
const taskAddBtn = document.querySelector('[data-task-add]');
const form = document.querySelector('[data-form]');
const sortBtn = document.querySelector('[data-sort]');
const taskContainer = document.querySelector('[data-task-container]');

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

    addTask(data.name, data.description, data.date, data.time, localStorage.length - 1);
}

for (let i = 0; i < localStorage.length; i++) {
    let data;
    data = JSON.parse(localStorage.getItem(`item ${i}`));
    addTask(data.name, data.description, data.date, data.time, i);
}

sortBtn.addEventListener('click', () => {
    let dataArr = [];
    for (let i = 0; i < localStorage.length; i++) {
        let data;
        data = JSON.parse(localStorage.getItem(`item ${i}`));
        dataArr.push(data);
    }
    const sortedDataArr = dataArr.sort((x, y) => {
        if (x.date < y.date) {
            return -1;
        }
        if (x.date > y.date) {
            return 1;
        }

        if (x.time < y.time) {
            return -1;
        }
        if (x.time > y.time) {
            return 1;
        }
        return 0;
    });

    taskContainer.innerHTML = 
    `<li class="tasks__main-item">
        <h3 class="tasks__title">Задачи</h3>
        <button class="button button--small" data-sort type="button">Сортировать по дате</button>
     </li>`;

    sortedDataArr.forEach((elem, i) => {
        addTask(elem.name, elem.description, elem.date, elem.time, i);
    });

});
// localStorage.clear();