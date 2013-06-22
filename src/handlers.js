/*
    Handlers for the different file types.

    Every handler takes the DropData object, returning an html element;
*/
droptable.handlers = {
    /*
        Handler for an URL - shows a clickable icon of the url
    */
    url: function(dropData)
    {
        var icon = droptable.ui.iconbase(dropData.x, dropData.y);
        console.log(icon);
        var link = $('<a href="" target="_new"></a>');
        link.text(dropData.data);
        icon.append(link);
        return icon;
    }
}