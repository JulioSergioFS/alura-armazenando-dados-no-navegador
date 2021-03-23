import ButtonFinish from './finishTask.js'
import ButtonDelete from './deleteTask.js'
import { loadTask } from './loadTask.js'


export const handleNewItem = (event) => {

    event.preventDefault()

    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const value = input.value

    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value)
    const formattedDate = date.format('DD/MM/YYYY')
    const finished = false

    const data = {
        value,
        formattedDate,
        finished
    }

    const createdTask = Task(data)

    const updatedTasks = [...tasks, data]

    localStorage.setItem('tasks', JSON.stringify(updatedTasks))

    list.appendChild(createdTask)
    input.value = " "
}

export const Task = ({ value, formattedDate, finished }, id) => {

    const task = document.createElement('li')
    const conteudo = `<p class="content">${formattedDate} * ${value}</p>`
    if (finished) {
        task.classList.add('done')
    }
    task.classList.add('task')

    task.innerHTML = conteudo

    task.appendChild(ButtonFinish(loadTask, id))
    task.appendChild(ButtonDelete(loadTask, id))

    return task
}