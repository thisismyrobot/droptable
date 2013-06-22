droptable.ui = {
    /*
        Creates the basic icon html
    */
    iconbase: function(x, y)
    {
        var icon = $('<div class="dropped icon url"></div>');
        icon.css({
            top: y,
            left: x
        });
        return icon;
    },

    /*
        Creates the basic snippet html
    */
    snippetbase: function(x, y)
    {
        var icon = $('<div class="dropped snippet text"></div>');
        icon.css({
            top: y,
            left: x
        });
        return icon;
    },

    /*
        Handles drop events.
    */
    handleDrop: function (dropEvent)
    {
        dropEvent.preventDefault();
        x = dropEvent.pageX;
        y = dropEvent.pageY;

        types = dropEvent.dataTransfer.types;
        if(types.length == 0)
        {
            return;
        }

        var artefact = null;
        var dropData = new DropData(dropEvent.pageX, dropEvent.pageY);
        if (types.contains('text/uri-list'))
        {
            dropData.data = dropEvent.dataTransfer.getData('text/uri-list');
            artefact = droptable.handlers.url(dropData);
        }
        else if (types.contains('text/plain') || types.contains('text'))
        {
            dropData.data = dropEvent.dataTransfer.getData('text/plain');
            dropData.data = dropData.data || dropEvent.dataTransfer.getData('text/');
            artefact = droptable.handlers.text(dropData);
        }

        // post-condition the artefact if we have one
        if (artefact !== null)
        {
            $('#droptable').append(artefact);
            $(artefact).draggable();
        }
    }
}
