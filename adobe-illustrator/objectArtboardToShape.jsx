/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Creates a shape with the selected color in the artboard size

var doc = app.activeDocument;
var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];

var x = artboard.artboardRect[0];
var y = artboard.artboardRect[1];
var width = artboard.artboardRect[2] - artboard.artboardRect[0];
var height = artboard.artboardRect[1] - artboard.artboardRect[3];

var square = doc.pathItems.rectangle(y, x, width, height);
square.filled = true;
square.stroked = false;

// Get the active layer and set it as the square layer
var activeLayer = doc.activeLayer;
square.move(activeLayer, ElementPlacement.PLACEATBEGINNING);
square.selected = true;