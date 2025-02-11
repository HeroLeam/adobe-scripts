/*
Author: Thiago Leoni Amaral
Copyright © 2025
https://heroleam.github.io/portfolio
*/

// Script: Adds filename text, but only files with numbers, such as references

function addFilenameNumber() {
    if (app.documents.length === 0) {
        alert("Nenhum documento aberto.");
        return;
    }

    var doc = app.activeDocument;
    var filename = doc.name.replace(/\.ai$/i, ""); // Remove .ai extension
    var numberMatch = filename.match(/\d+/); // Captures only the numbers

    if (!numberMatch) {
        alert("Nenhum número encontrado no nome do arquivo.");
        return;
    }

    var numberOnly = numberMatch[0];
    var text = doc.textFrames.add();
    text.contents = numberOnly;
    text.textRange.characterAttributes.size = 150;
    text.textRange.characterAttributes.textFont = app.textFonts.getByName("ArialMT");
    text.textRange.characterAttributes.fillColor = new RGBColor();
    text.textRange.characterAttributes.fillColor.red = 255;
    text.textRange.characterAttributes.fillColor.green = 0;
    text.textRange.characterAttributes.fillColor.blue = 0;
    text.position = [doc.artboards[0].artboardRect[0] + 10, doc.artboards[0].artboardRect[1] - 10];
}

addFilenameNumber();