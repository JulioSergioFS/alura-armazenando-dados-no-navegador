import { createDate } from './createDate.js'

export const loadTask = () => {
    const list = document.querySelector('[data-list]')

    const registeredTasks = JSON.parse(localStorage.getItem('tasks')) || []

    list.innerHTML = " "
    registeredTasks.forEach((task) => {
        const day = moment(task.formattedDate, 'DD/MM/YYYY')
        list.appendChild(createDate(day))
    })
}