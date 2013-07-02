droptable.storage = {
    /*
        Return (or create) the objects store.
    */
    getObjects: function()
    {
        var storedobjects = localStorage.getItem('objects');
        if (storedobjects === null)
        {
            storedobjects = localStorage['objects'] = JSON.stringify([]);
        }
        return JSON.parse(storedobjects);
    },

    setObjects: function(objects)
    {
        localStorage.setItem('objects', JSON.stringify(objects));
    },

    newItem: function(dropData)
    {
        var storedobjects = this.getObjects();
        storedobjects.push(dropData);
        this.setObjects(storedobjects);
    }
}