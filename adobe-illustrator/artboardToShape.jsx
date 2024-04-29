/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Creates a shape with the selected color in the artboard size

var doc = app.activeDocument;
var layer = doc.activeLayer;
var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex(1)];
var layerName = "Fundo"

var backgroundLayer = doc.layers.add();
backgroundLayer.name = layerName;
var lightBlueColor = new RGBColor();
lightBlueColor.red = 79;
lightBlueColor.green = 128;
lightBlueColor.blue = 255;
backgroundLayer.color = lightBlueColor;
backgroundLayer.zOrder(ZOrderMethod.SENDTOBACK);

var x = artboard.artboardRect[0];
var y = artboard.artboardRect[1];

var width = artboard.artboardRect[2] - artboard.artboardRect[0];
var height = artboard.artboardRect[1] - artboard.artboardRect[3];

var square = backgroundLayer.pathItems.rectangle(y, x, width, height);
square.filled = true;
square.stroked = false;
square.selected = true;