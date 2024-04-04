/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

var doc = app.activeDocument;
var element = doc.selection[0];
var elementX = element.left;
var elementY = element.top;
var elementWidth = element.width;
var elementHeight = element.height;
// element.remove();

var square = doc.activeLayer.pathItems.rectangle(
  elementY,
  elementX,
  elementWidth,
  elementHeight
);
square.stroked = true;
square.strokeColor = new RGBColor(0, 0, 0);
square.filled = false;