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
        var x = dropEvent.pageX;
        var y = dropEvent.pageY;

        var types = dropEvent.dataTransfer.types;
        if(types.length == 0)
        {
            return;
        }

        // Parse out the data from the event
        var artefactHandler = data = type = null;
        if (types.contains('text/uri-list'))
        {
            data = dropEvent.dataTransfer.getData('text/uri-list');
            type = 'text/uri-list';
            artefactHandler = droptable.handlers.url;
        }
        else if (types.contains('text/plain') || types.contains('text'))
        {
            data = dropEvent.dataTransfer.getData('text/plain');
            data = data || dropEvent.dataTransfer.getData('text/');
            type = 'text/plain';
            artefactHandler = droptable.handlers.text;
        }

        // Get and process the data if we have a handler
        if (artefactHandler !== null)
        {
            var dropData = new DropData(dropEvent.pageX, dropEvent.pageY,
                                        data, type);
            var artefact = artefactHandler(dropData);
            $('#droptable').append(artefact);
            $(artefact).draggable();
        }
    }
}
