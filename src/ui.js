droptable.ui = {
    /*
        Creates the basic icon html
    */
    iconbase: function(x, y)
    {
        var icon = $('<div class="dropicon url"></div>');
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

        var artifact = null;
        var dropData = new DropData(dropEvent.pageX, dropEvent.pageY);
        if (types.contains('text/uri-list'))
        {
            dropData.data = dropEvent.dataTransfer.getData('text/uri-list');
            artifact = droptable.handlers.url(dropData);
        }

        // post-condition the artifact if we have one
        if (artifact !== null)
        {
            $('#droptable').append(artifact);
            $(artifact).draggable();
        }
    }
}
