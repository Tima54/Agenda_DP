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
            initialView: 'dayGridMonth', //timeGridWeek
            selectable: true,
            headerToolbar:{
                left:'prev,next,today',
                center:'title',
                right:'dayGridMonth,timeGridWeek'
            },
            dateClick: function(){
                document.getElementById('modal').style.display = 'block'
                //addEvent(info.dateStr);
            },
            eventClick: function(info){
                document.getElementById('modal_ModifEvent').style.display = 'block'
                document.getElementById('validerEdit').addEventListener("click",function(){editEvent(info)});
                //let val = prompt("Nouveau titre :");
                //info.event.setProp('title',val);
            }
        });
        calendar.render();
        addListeners();
    });
}

function addListeners() {
}

/**
 * Cette fonction permet la création d'un événement dans le calendrier
 */
function addEvent(){
    let title = document.getElementById('name').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    calendar.addEvent({
        title: title,
        start: startDate,
        end: endDate
    });
    fermerModal();
}

/**
 * Cette fonction permet la modification de l'événement selectionner auparavant
 * @param info : il s'agit de l'événement vers lequel on pointe
 */
function editEvent(info){
    let title = document.getElementById('editName').value;
    let startDate = document.getElementById('editStartDate').value;
    let endDate = document.getElementById('editEndDate').value;
    info.event.setProp('title',title);
    info.event.setStart(startDate);
    info.event.setEnd(endDate);
    fermerModalModifEvent();
}

/**
 * Cette fonction permet de fermer la pop-up de création d'un événement
 */
function fermerModal(){
    document.getElementById('modal').style.display = 'none'
}

/**
 * Cette fonction permet de fermer la pop-up de modification d'un événement
 */
function fermerModalModifEvent(){
    document.getElementById('modal_ModifEvent').style.display = 'none'
}