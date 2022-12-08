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
            initialView: 'dayGridMonth',
            selectable: true,
            dateClick: function (info){
                addEvent(info.dateStr);
            }
        });
        calendar.render();
        addListeners();
    });
}

function addListeners() {
    let cells = document.querySelectorAll('[role="gridcell"]');
}

function addEvent(date){
    calendar.addEvent({
        title: 'dynamic event',
        start: date,
        allDay: true
    });
}
