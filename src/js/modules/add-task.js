const taskContainer = document.querySelector('[data-task-container]');
const taskTemplate = document.querySelector('#task-template').content
    .querySelector('.tasks__item');


export function addTask(taskName, taskDescr, taskDate, taskTime, id) {
    const taskElement = taskTemplate.cloneNode(true);
    taskElement.querySelector('.tasks__title').innerText = taskName;
    taskElement.querySelector('.tasks__description').innerText = taskDescr;
    taskElement.querySelector('.tasks__date').innerText = taskDate;
    taskElement.querySelector('.tasks__time').innerText = taskTime;
    taskElement.setAttribute('id', `${id}`);
    taskContainer.appendChild(taskElement);
}