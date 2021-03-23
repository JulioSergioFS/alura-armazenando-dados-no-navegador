const deleteTask = (update, id) => { 
    const registeredTasks = JSON.parse(localStorage.getItem('tasks'))

    registeredTasks.splice(id, 1)
    localStorage.setItem('tasks', JSON.stringify(registeredTasks))
    
    update()
}

const ButtonDelete = (update, id) => { 
    const buttonDelete = document.createElement('button')

    buttonDelete.innerText = 'Delete'
    buttonDelete.addEventListener('click', ()=> deleteTask(update, id))

    return buttonDelete
}

export default ButtonDelete