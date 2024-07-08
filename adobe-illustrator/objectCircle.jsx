/*
Author: Thiago Leoni Amaral
Copyright © 2024
https://heroleam.github.io/portfolio
*/

// Script: Creates a square the size of the selected object

var doc = app.activeDocument;
var cm = 28.35;
var element = doc.selection[0];
var elementX = element.left;
var elementY = element.top;
var elementWidth = element.width;
var elementHeight = element.height;
var square = doc.activeLayer.pathItems.ellipse(
  elementY,
  elementX,
  elementWidth,
  elementHeight
);
square.stroked = true;
square.strokeColor = new RGBColor(0, 0, 0);
square.filled = false;
square.strokeWidth = cm / 33.33; // 0,03 cm