/*
    Adds a contains(item) method to arrays.
*/
Array.prototype.contains = function(item)
{
    return $.inArray(item, this) != -1;
}