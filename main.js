import ButtonFinish from './components/finishTask.js'
import ButtonDelete from './components/deleteTask.js'
 
    const createTask = (event) => {

    event.preventDefault()

    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const value = input.value

    const task = document.createElement('li')
    task.classList.add('task')
    const conteudo = `<p class="content">${value}</p>`

    task.innerHTML = conteudo

    task.appendChild(ButtonFinish())
    task.appendChild(ButtonDelete())
    list.appendChild(task)
    input.value = " "

}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', createTask)