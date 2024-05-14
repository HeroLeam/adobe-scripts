/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Positions object to the top and 1 cm outside the artboard

var doc = app.activeDocument;

if (app.selection.length === 0) {
  alert("Por favor, selecione um objeto.");
} else {
  var element = doc.selection[0];

  var cm = 28.35;
  var elementWidth = element.width;
  var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex(1)];

  var artboardTop = artboard.artboardRect[1];
  var artboardWidth = artboard.artboardRect[2];

  element.top = artboardTop;
  element.left = artboardWidth + cm;
}