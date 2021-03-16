import ButtonFinish from './finishTask.js'
import ButtonDelete from './deleteTask.js'


export const handleNewItem = (event) => {

    event.preventDefault()

    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const value = input.value

    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value)
    const formattedDate = date.format('DD/MM/YYYY')

    const data = {
        value,
        formattedDate
    }

    const createdTask = Task(data)

    const updatedTasks = [... tasks, data]
    
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))

    list.appendChild(createdTask)
    input.value = " "
}

const Task = ({value, formattedDate}) => {

    const task = document.createElement('li')
    task.classList.add('task')
    const conteudo = `<p class="content">${formattedDate} * ${value}</p>`

    task.innerHTML = conteudo

    task.appendChild(ButtonFinish())
    task.appendChild(ButtonDelete())

    return task
}