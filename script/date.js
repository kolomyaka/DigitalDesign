const dateInput = document.getElementById('date');
const dateButton = document.getElementById('getDate');
const dateInputInfo = document.getElementById('dateInputInfo');

dateButton.addEventListener('click', () => {
    getDate()
})

window.onload = function () {
    let date = new Date().toLocaleString({ month: 'numeric' });
    console.log(date);
    let dateForInput = date.toJSON();
    console.log(dateForInput);
    // Date.prototype.toDateInputValue = (function () {
    //     var local = new Date(this);
    //     console.log(local);
    //     local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    //     console.log(local.toJSON());
    //     return local.toJSON().slice(0, 10);
    // });
    new Date().toDateInputValue()


    document.getElementById('date').value = new Date().toDateInputValue();

}

const getDate = () => {

    dateInputValue = dateInput.value;

    let currentDate = dateInputValue.split('-');;
    [currentDate[0], currentDate[1], currentDate[2]] = [currentDate[1], currentDate[2], currentDate[0]];

    getDayInfo(currentDate);
}


const getDayInfo = (info) => {

    let currentDayOfWeek = new Date(info).toLocaleString('ru', { weekday: 'long' }); // День недели
    let currentMonthOfYear = new Date(info).toLocaleString('ru', { month: 'long' }); // Месяц
    let currentYearOfDate = new Date(info).toLocaleString('ru', { year: 'numeric' }); // Год

    // Определяем на какой день недели начинается месяц
    let firstWeekDay = new Date(new Date(info).getFullYear(), new Date(info).getMonth(), 1).getDay();
    // Определяем смещение
    let offsetDate = new Date(info).getDate() + firstWeekDay - 2;
    let weekOfMonth = 1 + Math.floor(offsetDate / 7);

    // Проверяем месяц для склонения
    if (info[0] == 8 || info[0] == 3) {
        currentMonthOfYear = currentMonthOfYear.replace(/.$/, 'та');
    } else {
        currentMonthOfYear = currentMonthOfYear.replace(/.$/, 'я');
    }

    let dayOfWeek = currentDayOfWeek[0].toUpperCase() + currentDayOfWeek.slice(1);
    let monthOfYear = currentMonthOfYear[0].toUpperCase() + currentMonthOfYear.slice(1);

    let dateInfo = dayOfWeek + ',' + weekOfMonth + ' неделя ' + monthOfYear + ' ' + currentYearOfDate + " года";
    console.log(dateInfo);
    dateInputInfo.value = dateInfo;

    return dayOfWeek + ',' + weekOfMonth + ' неделя ' + monthOfYear + ' ' + currentYearOfDate + " года";
}