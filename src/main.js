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
            locale: 'fr',
            selectable: true,
            editable: true,
            timeZone: 'UTC+1',
            headerToolbar:{
                left:'prev,next',
                center:'title',
                right:'dayGridDay,dayGridWeek,dayGridMonth'
            },
            dateClick: function(info){
                document.getElementById('modal').style.display = 'block'
                document.getElementById('startDate').value = info.dateStr;
            },
            select: function(info){
                document.getElementById('modal').style.display = 'block'
                document.getElementById('startDate').value = info.startStr;
                document.getElementById('endDate').value = decrementDate(info.endStr);
            },
            eventClick: function(info){
                document.getElementById('modal_ModifEvent').style.display = 'block'
                document.getElementById('validerEdit').addEventListener("click",function(){editEvent(info)});
                document.getElementById('validerRemove').addEventListener("click",function(){removeEvent(info)});
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
    let startDuration = document.getElementById('startDuration').value;
    if(startDuration != ''){
        startDate = startDate+'T'+startDuration+':00.000Z';
    }

    let endDate = document.getElementById('endDate').value;
    let endDuration = document.getElementById('endDuration').value;
    if(endDuration != ''){
        endDate = endDate+'T'+endDuration+':00.000Z';
    }

    let colorPicker = document.getElementById('modal_color_picker').value;

    calendar.addEvent({
        title: title,
        start: startDate,
        end: endDate,
        color: colorPicker
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
    let startDuration = document.getElementById('editStartDuration').value;
    if(startDuration != ''){
        startDate = startDate+'T'+startDuration+':00.000Z';
    }

    let endDate = document.getElementById('editEndDate').value;
    let endDuration = document.getElementById('editEndDuration').value;
    if(endDuration != ''){
        endDate = endDate+'T'+endDuration+':00.000Z';
    }

    let color = document.getElementById('modal_edit_color_picker').value;

    info.event.setProp( 'color', color );
    info.event.setProp('title',title);
    info.event.setStart(startDate);
    info.event.setEnd(endDate);
    fermerModalModifEvent();
}

/**
 * Cette fonction permet la modification de l'événement selectionner auparavant
 * @param info : il s'agit de l'événement vers lequel on pointe
 */
function removeEvent(info){
    info.event.remove();
    fermerModalModifEvent();
}

/**
 * Cette fonction permet de fermer la pop-up de création d'un événement
 */
function fermerModal(){
    document.getElementById('modal').style.display = 'none';
    //document.getElementById('name').value = '';
    //document.getElementById('startDate').value = '';
    //document.getElementById('endDate').value = '';
}

/**
 * Cette fonction permet de fermer la pop-up de modification d'un événement
 */
function fermerModalModifEvent(){
    document.getElementById('modal_ModifEvent').style.display = 'none';
    //document.getElementById('editName').value = '';
    //document.getElementById('editStartDate').value = '';
    //document.getElementById('editEndDate').value = '';
}

/**
 * Cette fonction permet de décrementer de 1 une date sous la forme MM-JJ-YYYY
 */
function decrementDate(date){
    const finalDate = new Date(date);
    finalDate.setDate(finalDate.getDate() - 1);
    return finalDate.toISOString().substring(0, 10);
} 