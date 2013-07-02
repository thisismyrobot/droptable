/*
    Handlers for the different file types.

    Every handler takes the DropData object, returning an html element;
*/
droptable.handlers = {
    /*
        Handler for a URL - shows a clickable icon of the url
    */
    url: function(dropData)
    {
        var icon = droptable.ui.iconbase(dropData.x, dropData.y);
        var link = $('<a href="" target="_new"></a>');
        link.text(dropData.data);
        link.attr('href', dropData.data);
        icon.append(link);
        return icon;
    },

    /*
        Handler for a block of plain text - shows a preview
    */
    text: function(dropData)
    {
        var snippet = droptable.ui.snippetbase(dropData.x, dropData.y);
        var pre = $('<pre></pre>');
        pre.text(dropData.data);
        snippet.append(pre);
        return snippet;
    }
}