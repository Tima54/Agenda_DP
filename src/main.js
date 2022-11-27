main();

function main(){
    let calendar,
    addButton;

    initCalendar();
}

function initCalendar(){
    document.addEventListener('DOMContentLoaded', function() {
        let calendarEl = document.getElementById('calendar');
        calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth'
        });
        calendar.render();
        addListeners();

    });
}

function addListeners() {
    let addButton = document.getElementById('addBtn');
    console.log(document);
    if (addButton) {
        addButton.addEventListener("click", addEvent, false);
    }
}

function addEvent(){
    let dateStr = prompt('Enter a date in YYYY-MM-DD format');
    let date = new Date(dateStr + 'T00:00:00');

    if (!isNaN(date.valueOf())) {
        calendar.addEvent({
            title: 'dynamic event',
            start: date,
            allDay: true
        });
        alert('évènement ajouté');
    } else {
        alert('date incorrect');
    }
}
