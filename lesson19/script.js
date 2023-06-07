const watch = () => {

    const spanDayTime = document.getElementsByTagName('div')[0]
    const spanDayWeek = document.getElementsByTagName('div')[1]
    const spanNewYearTimer = document.getElementsByTagName('div')[3]
    const timeHours = document.getElementById('timer-hours')
    const timeMinutes = document.getElementById('timer-minutes')
    const timeSeconds = document.getElementById('timer-seconds')
    let date = new Date


    const addDay = () => {

        let time = date.getHours()

        switch (true) {
            case time >= 6 && time <= 12:
                spanDayTime.textContent = 'Доброе утро'
                break;
            case time >= 12 && time <= 18:
                spanDayTime.textContent = 'Добрый день'
                break;
            case time >= 18 && time <= 0:
                spanDayTime.textContent = 'Добрый вечер'
                break;
            case time >= 0 && time <= 6:
                spanDayTime.textContent = 'Доброе утро'
                break;
        }


    }


    const addDayWeek = () => {

        let dayWeek = date.getDay()

        switch (true) {
            case dayWeek === 1:
                spanDayWeek.textContent = 'Сегодня: понедельник'
                break;
            case dayWeek === 2:
                spanDayWeek.textContent = 'Сегодня: вторник'
                break;
            case dayWeek === 3:
                spanDayWeek.textContent = 'Сегодня: среда'
                break;
            case dayWeek === 4:
                spanDayWeek.textContent = 'Сегодня: четверг'
                break;
            case dayWeek === 5:
                spanDayWeek.textContent = 'Сегодня: пятница'
                break;
            case dayWeek === 6:
                spanDayWeek.textContent = 'Сегодня: суббота'
                break;
            case dayWeek === 7:
                spanDayWeek.textContent = 'Сегодня: воскресение'
                break;
        
        }
    }


    const addTime = () => {

        let hourse = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        timeHours.textContent = hourse
        timeMinutes.textContent = minutes
        timeSeconds.textContent = seconds

        if (hourse >= 0 && hourse < 12) {
            timeSeconds.textContent = seconds + ' ' + 'AM'
        } else {
            timeSeconds.textContent = seconds +  ' ' + 'PM'
        }

    }


    const addNewYeartimer = () => {
        let dateStop = new Date('01 January 2024').getTime()
        let dateNow = date.getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)

        spanNewYearTimer.textContent = `До нового года осталось ${days} дней`
        
    }


    addDay()
    addDayWeek()
    addTime()
    addNewYeartimer()
}

watch()
