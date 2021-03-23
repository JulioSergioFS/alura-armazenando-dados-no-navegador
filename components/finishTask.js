const finishTask = (update, id) => {
    const registeredTasks = JSON.parse(localStorage.getItem('tasks'))

    registeredTasks[id].finished = !registeredTasks[id].finished
    localStorage.setItem('tasks', JSON.stringify(registeredTasks))

    update()
}

const ButtonFinish = (update, id) => { 
    const buttonFinish = document.createElement('button')  
    
    buttonFinish.classList.add('check-button')
    buttonFinish.innerText = 'Finish'

    buttonFinish.addEventListener('click', ()=> finishTask(update, id))

    return buttonFinish
}

export default ButtonFinish

