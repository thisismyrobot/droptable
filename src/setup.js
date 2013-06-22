/*
    Namespace setup as per:
    http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/
*/
var droptable = {
    ui: {},
    handlers: {}
}

/* Event hook-up */
$(document).ready(function()
{
    $("#droptable")
        .bind("dragover", false)
        .bind("dragenter", false)
        .bind("drop", function(e) {
            droptable.ui.handleDrop(e.originalEvent);
            return false;
    });
});