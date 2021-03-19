import { Task } from './createTask.js'

export const loadTask = () => {
    const list = document.querySelector('[data-list]')

    const registeredTasks = JSON.parse(localStorage.getItem('tasks')) || []

    registeredTasks.forEach((task) => {
        list.appendChild(Task(task))
    })
}