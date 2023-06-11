const timer = (deadline) => {

    const timeHours = document.getElementById('timer-hours')
    const timeMinutes = document.getElementById('timer-minutes')
    const timeSeconds = document.getElementById('timer-seconds')
    const timeDays = document.getElementById('timer-days')

    const getTimeRemaining = () => {

        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hourse = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return {timeRemaining, days, hourse, minutes, seconds}
    }

    const addZero = (num) => {
        if (num <= 9) {
            num = '0' + num
        } 
        return num
    }

    const updateClock = () => {
        let idTimeOut
        let getTime = getTimeRemaining()

        timeDays.textContent = addZero(getTime.days)
        timeHours.textContent = addZero(getTime.hourse)
        timeMinutes.textContent = addZero(getTime.minutes)
        timeSeconds.textContent = addZero(getTime.seconds)

        if (getTime.timeRemaining > 0) {
            idTimeOut = setTimeout(updateClock, 1000)
        } else  {
            timeDays.textContent = '00'
            timeHours.textContent = '00'
            timeMinutes.textContent = '00'
            timeSeconds.textContent = '00'
        }

    }
    updateClock()
}

export default timer