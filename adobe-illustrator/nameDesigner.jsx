/*
Author: Thiago Leoni Amaral
Copyright © 2024
https://heroleam.github.io/portfolio
*/

// Script: Creates text with designer name

var doc = app.activeDocument;
var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex(1)];
var centimetros = 28.35; // 1 cm

var layerOpcoes = ["DANIEL", "ELIANE", "EVERTON", "THIAGO",];

var selectedDesenhista = "";

// Function to create text with the file name and designer name
function createText(nomeArquivo, nomeDesenhista) {
    var texto = app.activeDocument.textFrames.add();
    texto.contents = nomeArquivo + " (" + nomeDesenhista + ")";
    texto.textRange.characterAttributes.fillColor = new RGBColor();
    texto.textRange.characterAttributes.fillColor.red = 255;
    texto.textRange.characterAttributes.fillColor.green = 0;
    texto.textRange.characterAttributes.fillColor.blue = 0;
    texto.textRange.characterAttributes.size = 25;
    texto.textRange.characterAttributes.textFont = app.textFonts.getByName("Arial-BoldMT");

    // Positioning the text in the upper left part of the artboard
    var x = artboard.artboardRect[0] + centimetros;
    var y = artboard.artboardRect[1] - centimetros;
    texto.position = [x, y];

    // Placing the text on the "Designer" layer
    var layerName = "Desenhista"
    var layer = app.activeDocument.layers.add();
    layer.name = layerName;
    var lightBlueColor = new RGBColor();
    lightBlueColor.red = 79;
    lightBlueColor.green = 128;
    lightBlueColor.blue = 255;
    layer.color = lightBlueColor;
    texto.move(layer, ElementPlacement.PLACEATEND);
}

// Function to display dialog window with buttons
function mostrarDialogo() {
    var dialog = new Window("dialog", "Selecione o Desenhista");

    for (var i = 0; i < layerOpcoes.length; i++) {
        var btn = dialog.add("button", undefined, layerOpcoes[i]);
        btn.onClick = function () {
            selectedDesenhista = this.text;
            dialog.close();
        }
    }

    dialog.show();
}

mostrarDialogo();

if (selectedDesenhista !== "") {
    var nomeArquivo = app.activeDocument.name;
    nomeArquivo = nomeArquivo.split('.').slice(0, -1).join('.');
    createText(nomeArquivo, selectedDesenhista);
}