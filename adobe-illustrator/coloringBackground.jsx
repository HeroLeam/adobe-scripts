/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Creates a shape 2 cm larger than the selected object

var doc = app.activeDocument;
if (app.selection.length === 0) {
  alert("Por favor, selecione um objeto.");
} else {
  var element = doc.selection[0];
  var cm = 28.35;
  var elementX = element.left;
  var elementY = element.top;
  var elementWidth = element.width + cm * 2;
  var elementHeight = element.height + cm * 2;

  doc.selection = null;

  var square = doc.activeLayer.pathItems.rectangle(
    elementY + (cm * 2) / 2,
    elementX - (cm * 2) / 2,
    elementWidth,
    elementHeight
  );
  square.filled = true;
  square.stroke = true;
  square.zOrder(ZOrderMethod.SENDTOBACK);
  square.selected = true;
}