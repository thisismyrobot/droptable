/*
    Handlers for the different file types.

    Every handler takes the DropData object, rendering something in the
    #droptable div.
*/

function url(dropData)
{
    var icon = $('<div class="dropicon url"></div>');
    icon.text(dropData.data);
    icon.css({
        top: dropData.y,
        left: dropData.x 
    });
    $('#droptable').append(icon);
}