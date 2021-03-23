import { orderDates, removeRepeatedDates } from '../service/date.js'
import { createDate } from './createDate.js'

export const loadTask = () => {
    const list = document.querySelector('[data-list]')

    const registeredTasks = JSON.parse(localStorage.getItem('tasks')) || []

    list.innerHTML = " "
    const uniqueDates = removeRepeatedDates(registeredTasks)
    orderDates(uniqueDates)
    uniqueDates.forEach((day) => {
        list.appendChild(createDate(day))
    })
}