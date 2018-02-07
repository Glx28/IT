document.oncontextmenu = disableRightClick;
function disableRightClick(event) {
    event = event || window.event;

    if(event.preventDefault) {
        event.preventDefault();
    }
    else {
        event.returnValue = false;
    }
}