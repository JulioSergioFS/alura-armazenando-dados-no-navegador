const ButtonDelete = () => { 
    const buttonDelete = document.createElement('button')

    buttonDelete.innerText = 'Delete'
    buttonDelete.addEventListener('click', deleteTask)

    return buttonDelete
}

const deleteTask = (event) => { 
    const buttonDelete = event.target
    
    const finishedTask = buttonDelete.parentElement

    finishedTask.remove()

    return buttonDelete

}

export default ButtonDelete