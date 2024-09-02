/*
Author: Thiago Leoni Amaral
Copyright © 2024
https://heroleam.github.io/portfolio
*/

// Script: Select "dirt" (empty spots)

var tolerance = 0.02 * 28.35;

function selectSmallItems() {
    var doc = app.activeDocument;
    var items = doc.pageItems;
    var smallItems = [];

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var width = item.width;
        var height = item.height;

        if (width < tolerance && height < tolerance) {
            smallItems.push(item);
        }
    }

    doc.selection = null;

    for (var j = 0; j < smallItems.length; j++) {
        smallItems[j].selected = true;
    }
}

selectSmallItems();