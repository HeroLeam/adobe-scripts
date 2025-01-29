/*
Author: Thiago Leoni Amaral
Copyright © 2024
https://heroleam.github.io/portfolio
*/

// Script: Creates objects that form a color legend

// Checks if the file is in CMYK
if (app.activeDocument.documentColorSpace == DocumentColorSpace.CMYK) {
    alert("Este script só funciona em documentos RGB. Converta o documento para RGB e tente novamente.");
} else {
    labelGenerator();
}

function labelGenerator() {
    var doc = app.activeDocument;
    var layer = doc.activeLayer;

    var cm = 28.35;

    // Create color shape
    var colorShape = layer.pathItems.rectangle(0, 0, cm * 4, cm * 3.5); // 4 x 3,5 cm
    colorShape.fillColor = new RGBColor();
    colorShape.fillColor.red = 255
    colorShape.strokeColor = new RGBColor();
    colorShape.strokeColor.red = 0
    colorShape.strokeColor.green = 0
    colorShape.strokeColor.blue = 0
    colorShape.stroked = true;
    colorShape.strokeWidth = cm / 20; // 0,05cm

    // Sets the position of the color shape
    var positionShape = -colorShape.height;

    // Create text shape
    var textShape = layer.pathItems.rectangle(positionShape, 0, cm * 4, cm * 1.5); // 4 x 1,5 cm
    textShape.fillColor = new RGBColor();
    textShape.fillColor.red = 255
    textShape.fillColor.green = 255
    textShape.fillColor.blue = 255
    textShape.strokeColor = new RGBColor();
    textShape.strokeColor.red = 0
    textShape.strokeColor.green = 0
    textShape.strokeColor.blue = 0
    textShape.stroked = true;
    textShape.strokeWidth = cm / 20; // 0,05cm

    // Create the text "TECHNIQUE"
    var techniqueText = layer.textFrames.add();
    techniqueText.contents = "TÉCNICA";
    techniqueText.textRange.characterAttributes.textFont = app.textFonts.getByName("Arial-Black");
    techniqueText.textRange.characterAttributes.size = cm / 2.5; // 0,4cm
    techniqueText.left = textShape.left + 8;
    techniqueText.top = positionShape - 6;

    // Create the text "CODE"
    var colorCodeText = layer.textFrames.add();
    colorCodeText.contents = "CÓDIGO";
    colorCodeText.textRange.characterAttributes.textFont = app.textFonts.getByName("Arial-BoldMT");
    colorCodeText.textRange.characterAttributes.size = cm / 2.5; // 0,4cm
    colorCodeText.left = textShape.left + 8;
    colorCodeText.top = positionShape - 22;

    // Group all elements
    var groupPathItems = layer.groupItems.add();
    groupPathItems.name = "Legenda";
    groupPathItems.move(layer, ElementPlacement.PLACEATEND);
    techniqueText.move(groupPathItems, ElementPlacement.PLACEATEND);
    colorCodeText.move(groupPathItems, ElementPlacement.PLACEATEND);
    colorShape.move(groupPathItems, ElementPlacement.PLACEATEND);
    textShape.move(groupPathItems, ElementPlacement.PLACEATEND);

        // Center the group on the artboard
    var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];
    var artboardBounds = artboard.artboardRect;
    var artboardCenterX = (artboardBounds[0] + artboardBounds[2]) / 2;
    var artboardCenterY = (artboardBounds[1] + artboardBounds[3]) / 2;

    var groupBounds = groupPathItems.visibleBounds;
    var groupCenterX = (groupBounds[0] + groupBounds[2]) / 2;
    var groupCenterY = (groupBounds[1] + groupBounds[3]) / 2;

    groupPathItems.position = [
    groupPathItems.position[0] + (artboardCenterX - groupCenterX),
    groupPathItems.position[1] + (artboardCenterY - groupCenterY)
    ];
}
