/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Duplicate a layer and move the entered distance

var dialog = new Window("dialog", "Digite as Informações");
dialog.orientation = "column";

var larguraInput = dialog.add("edittext", undefined, "Largura (cm)");
larguraInput.characters = 10;

var alturaInput = dialog.add("edittext", undefined, "Altura (cm)");
alturaInput.characters = 10;

var repetirInput = dialog.add("edittext", undefined, "Repetições");
repetirInput.characters = 10;

var botoes = dialog.add("group");
var okButton = botoes.add("button", undefined, "OK");
var cancelButton = botoes.add("button", undefined, "Cancelar");

okButton.onClick = function() {
    var larguraAjustada = parseFloat(larguraInput.text.replace(",", ".")) || 0;
    var alturaAjustada = parseFloat(alturaInput.text.replace(",", ".")) || 0;

    var repetir = parseInt(repetirInput.text) || 1;

    for (var index = 0; index < repetir; index++) {
        var camadaAtual = app.activeDocument.activeLayer;

        var duplicatedLayer = camadaAtual.duplicate();
        duplicatedLayer.translate(larguraAjustada, alturaAjustada);
        duplicatedLayer.name = camadaAtual.name;

        app.activeDocument.activeLayer = duplicatedLayer;
    }
    dialog.close();
};

cancelButton.onClick = function() {
    dialog.close();
};

dialog.show();