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
            dateClick: function(info){
                addEvent(info.dateStr);
            },
            eventClick: function(info){
                let val = prompt("Nouveau titre :");
                info.event.setProp('title',val);
            }
        });
        calendar.render();
        addListeners();
    });
}

function addListeners() {
}

function addEvent(date){
    let desc = prompt("Titre de l'événement :");
    calendar.addEvent({
        title: desc,
        start: date,
        allDay: true
    });
}
