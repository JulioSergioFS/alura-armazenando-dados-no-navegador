export const removeRepeatedDates = (dates) => {
    const uniqueDates = []
    dates.forEach(date => {
        if(uniqueDates.indexOf(date.formattedDate) === -1){
            uniqueDates.push(date.formattedDate)
        }
    })
    return uniqueDates
}