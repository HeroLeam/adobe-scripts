/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Duplicate a layer and move the entered distance

var dialog = new Window("dialog", "Digite as Informações");
dialog.orientation = "column";

var valueHorizontally = dialog.add("edittext", undefined, "Horizontal");
valueHorizontally.characters = 10;

var valueVertically = dialog.add("edittext", undefined, "Vertical");
valueVertically.characters = 10;

var repeatInput = dialog.add("edittext", undefined, "Repetições");
repeatInput.characters = 10;

var buttons = dialog.add("group");
var okButton = buttons.add("button", undefined, "OK");
var cancelButton = buttons.add("button", undefined, "Cancelar");

okButton.onClick = function() {
    var horizontallyAdjustedValue = parseFloat(valueHorizontally.text.replace(",", ".")) || 0;
    var verticallyAdjustedValue = parseFloat(valueVertically.text.replace(",", ".")) || 0;

    var repeat = parseInt(repeatInput.text) || 1;

    for (var index = 0; index < repeat; index++) {
        var currentLayer = app.activeDocument.activeLayer;

        var duplicatedLayer = currentLayer.duplicate();
        duplicatedLayer.translate(horizontallyAdjustedValue, verticallyAdjustedValue);
        duplicatedLayer.name = currentLayer.name;

        app.activeDocument.activeLayer = duplicatedLayer;
    }
    dialog.close();
};

cancelButton.onClick = function() {
    dialog.close();
};

dialog.show();