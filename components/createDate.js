import { Task } from "./createTask.js"

export const createDate = (date) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const dateMoment = moment(date, 'DD/MM/YYYY')
    const dateOnTop = document.createElement('li')
    const content = `<p class="content-data" style="color: white">${dateMoment.format('DD/MM/YYYY')}</p>`

    dateOnTop.innerHTML = content

    tasks.forEach(task => {
        const day = moment(task.formattedDate, 'DD/MM/YYYY')
        const diff = dateMoment.diff(day)

        if (diff === 0) {
            dateOnTop.appendChild(Task(task))
        }
    })

    return dateOnTop
}