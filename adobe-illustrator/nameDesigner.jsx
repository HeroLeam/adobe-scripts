/*
Author: Thiago Leoni Amaral
Copyright © 2024
https://heroleam.github.io/portfolio
*/

// Script: Creates text with designer name
var doc = app.activeDocument;
var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex(1)];
var cm = 28.35;

var layerOpcoes = ["DANIEL", "ELIANE", "EVERTON", "THIAGO"];

var selectedDesenhista = "";

// Function to create text with the file name and designer name
function createText(nomeArquivo, nomeDesenhista) {
    var texto = app.activeDocument.textFrames.add();
    texto.contents = "Ref: " + nomeArquivo + "\nDesenhista: " + nomeDesenhista;
    texto.textRange.characterAttributes.fillColor = new RGBColor();
    texto.textRange.characterAttributes.fillColor.red = 255;
    texto.textRange.characterAttributes.fillColor.green = 0;
    texto.textRange.characterAttributes.fillColor.blue = 0;
    texto.textRange.characterAttributes.size = 25;
    texto.textRange.characterAttributes.textFont = app.textFonts.getByName("Arial-BoldMT");
    texto.textRange.paragraphAttributes.justification = Justification.CENTER;

    // Calculating the center of the artboard
    var centerX = (artboard.artboardRect[2] - artboard.artboardRect[0]) / 2 + artboard.artboardRect[0];
    var centerY = artboard.artboardRect[1] - cm;

    // Adjusting the x position based on the width of the text
    var textWidth = texto.width;
    var x = centerX - (textWidth / 2);

    // Setting the position of the text to the center of the artboard
    texto.position = [x, centerY];

    // Placing the text on the "Designer" layer
    var layerName = "Desenhista";
    var layer = getOrCreateLayer(layerName);
    texto.move(layer, ElementPlacement.PLACEATEND);
}

// Function to get or create a layer
function getOrCreateLayer(layerName) {
    var layerExists = false;
    for (var i = 0; i < doc.layers.length; i++) {
        if (doc.layers[i].name === layerName) {
            layerExists = true;
            break;
        }
    }

    if (!layerExists) {
        var newLayer = doc.layers.add();
        newLayer.name = layerName;
        var lightBlueColor = new RGBColor();
        lightBlueColor.red = 79;
        lightBlueColor.green = 128;
        lightBlueColor.blue = 255;
        newLayer.color = lightBlueColor;
        return newLayer;
    } else {
        return doc.layers[i];
    }
}

// Function to display dialog window with buttons
function mostrarDialogo() {
    var dialog = new Window("dialog", "Selecione o Desenhista");

    for (var i = 0; i < layerOpcoes.length; i++) {
        var btn = dialog.add("button", undefined, layerOpcoes[i]);
        btn.onClick = function () {
            selectedDesenhista = this.text;
            dialog.close();
        };
    }

    dialog.show();
}

mostrarDialogo();

if (selectedDesenhista !== "") {
    var nomeArquivo = app.activeDocument.name;
    nomeArquivo = nomeArquivo.split('.').slice(0, -1).join('.');
    createText(nomeArquivo, selectedDesenhista);
}