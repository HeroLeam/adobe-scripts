/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Saves all Artboards in .jpg

var doc = app.activeDocument;
var file = activeDocument.fullName;
var dialog = new Window("dialog", "Salvar Artboards");

var buttonOne = dialog.add("button", undefined, "Principal");
buttonOne.onClick = saveArtboardOne;

var buttonTwo = dialog.add("button", undefined, "2 Sortimentos");
buttonTwo.onClick = saveArtboardTwo;

var buttonThree = dialog.add("button", undefined, "3 Sortimentos");
buttonThree.onClick = saveArtboardThree;

dialog.show();

function saveArtboardOne() {
  saveArtboards([1], "_buttonOne");
  dialog.close();
}

function saveArtboardTwo() {
  saveArtboards([1, 7, 8], "_buttonTwo");
  dialog.close();
}

function saveArtboardThree() {
  saveArtboards([1, 4, 5, 6], "_buttonThree");
  dialog.close();
}

function saveArtboards(artboardIndex, suffix) {
  var jpgOptions = new ExportOptionsJPEG();
  jpgOptions.qualitySetting = 50;
  jpgOptions.artBoardClipping = true;

  for (var i = 0; i < artboardIndex.length; i++) {
    var index = artboardIndex[i] - 1; // Subtract 1 because indices start at 0
    var fileName = activeDocument.name.split(".")[0].replace(/\s/g, "_");
    var artboard = doc.artboards[index];
    var artboardName = artboard.name.replace(/\s/g, "_").toLowerCase();
    var fileFinalName = fileName + "_" + artboardName + "_";

    var jpgPath = new File(doc.path + "/" + fileFinalName + ".jpg");

    doc.artboards.setActiveArtboardIndex(index);

    doc.exportFile(jpgPath, ExportType.JPEG, jpgOptions);
  }
  alert("Imagens salvas com sucesso!");
}