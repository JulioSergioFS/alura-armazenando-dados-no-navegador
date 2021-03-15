const ButtonFinish = () => { 
    const buttonFinish = document.createElement('button')  
    
    buttonFinish.classList.add('check-button')
    buttonFinish.innerText = 'Finish'

    buttonFinish.addEventListener('click', finishTask)

    return buttonFinish

}

const finishTask = (evento) => {
    const buttonFinish = evento.target

    const finishedTask = buttonFinish.parentElement

    finishedTask.classList.toggle('done')
}

export default ButtonFinish

