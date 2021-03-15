import ButtonFinish from './components/finishTask.js'
import ButtonDelete from './components/deleteTask.js'

const handleNewItem = (event) => {

    event.preventDefault()

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

    const createdTask = createTask(data)    
    list.appendChild(createdTask)
    input.value = " "
}

const createTask = ({value, formattedDate}) => {

    const task = document.createElement('li')
    task.classList.add('task')
    const conteudo = `<p class="content">${formattedDate} * ${value}</p>`

    task.innerHTML = conteudo

    task.appendChild(ButtonFinish())
    task.appendChild(ButtonDelete())

    return task
}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', handleNewItem)