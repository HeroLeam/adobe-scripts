/*
Author: Thiago Leoni Amaral
Copyright © 2024
https://heroleam.github.io/portfolio
*/

// Script: Insert text with the number of selected objects

if (app.selection.length === 0) {
    alert("Por favor, selecione um objeto.");
} else {
    var doc = app.activeDocument;
    var selectedCount = doc.selection.length;

    // Calculates the total width and average horizontal position of the selection
    var totalWidth = 0;
    var averageXPosition = 0;
    for (var i = 0; i < doc.selection.length; i++) {
        totalWidth += doc.selection[i].width;
        averageXPosition += doc.selection[i].position[0] + (doc.selection[i].width / 2);
    }
    averageXPosition /= doc.selection.length;

    // Positions text in the horizontal and vertical center of the selection
    var text = doc.textFrames.add();
    text.contents = selectedCount;
    text.textRange.characterAttributes.textFont = app.textFonts.getByName("ArialMT");
    text.textRange.paragraphAttributes.justification = Justification.CENTER;
    text.left = averageXPosition - (text.width / 2);
    text.top = doc.selection[0].position[1] + 10;
}