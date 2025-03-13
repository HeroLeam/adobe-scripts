/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Saves all Artboards in .jpg

var fileName = activeDocument.fullName;

function salvarArtboardsButtonOne() {
  salvarArtboards([1], "_buttonOne");
  dialog.close();
}

function salvarArtboardsButtonTwo() {
  salvarArtboards([1, 3, 4, 5], "_buttonTwo");
  dialog.close();
}

function salvarArtboardsButtonThree() {
  salvarArtboards([1, 3, 4, 5, 6], "_buttonThree");
  dialog.close();
}

function salvarArtboardsButtonFour() {
  salvarArtboards([1, 3, 4, 5, 6, 7], "_buttonFour");
  dialog.close();
}

function salvarArtboardsButtonFive() {
  salvarArtboards([1, 3, 4, 5, 6, 7, 8], "_buttonFive");
  dialog.close();
}

function salvarArtboardsButtonSix() {
  salvarArtboards([1, 3, 4, 5, 6, 7, 8], "_buttonSix");
  dialog.close();
}

function salvarArtboards(artboardIndices, sufixo) {
  var jpgOptions = new ExportOptionsJPEG();
  jpgOptions.qualitySetting = 50;
  jpgOptions.artBoardClipping = true;

  var doc = app.activeDocument;

  for (var i = 0; i < artboardIndices.length; i++) {
    var index = artboardIndices[i] - 1;
    var newFileName = activeDocument.name.split(".")[0].replace(/\s/g, "_");
    var artboard = doc.artboards[index];
    var artboardNome = artboard.name.replace(/\s/g, "_").toLowerCase();
    var newFileNameFinal = newFileName + "_" + artboardNome + "_";

    var jpgCaminho = new File(doc.path + "/" + newFileNameFinal + ".jpg");
    doc.artboards.setActiveArtboardIndex(index);
    doc.exportFile(jpgCaminho, ExportType.JPEG, jpgOptions);
  }

  alert("Imagens salvas com sucesso!");
}

var dialog = new Window("dialog", "Salvar Artboards");

var buttonOne = dialog.add("button", undefined, "Principal");
buttonOne.onClick = salvarArtboardsButtonOne;

var buttonTwo = dialog.add("button", undefined, "2 Sortimentos");
buttonTwo.onClick = salvarArtboardsButtonTwo;

var buttonThree = dialog.add("button", undefined, "3 Sortimentos");
buttonThree.onClick = salvarArtboardsButtonThree;

var buttonFour = dialog.add("button", undefined, "4 Sortimentos");
buttonFour.onClick = salvarArtboardsButtonFour;

var buttonFive = dialog.add("button", undefined, "5 Sortimentos");
buttonFive.onClick = salvarArtboardsButtonFive;

var buttonSix = dialog.add("button", undefined, "6 Sortimentos");
buttonSix.onClick = salvarArtboardsButtonSix;

dialog.show();
