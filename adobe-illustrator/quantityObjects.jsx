/*
Author: Thiago Leoni Amaral
Copyright © 2024
https://heroleam.github.io/portfolio
*/

// Script: Reports the number of selected objects

function countItemsInSelection(selection) {
    var count = 0;

    for (var i = 0; i < selection.length; i++) {
        var item = selection[i];

        if (item.typename === "GroupItem") {
            count += countItemsInSelection(item.pageItems);
        } else {
            count++;
        }
    }

    return count;
}

var selection = app.activeDocument.selection;

if (selection.length > 0) {
    var numSelectedObjects = countItemsInSelection(selection);
    
    alert(numSelectedObjects);
} else {
    alert("Nenhum objeto selecionado.");
}
