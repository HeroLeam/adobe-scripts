/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Cria uma forma com a cor selecionada no tamanho da artboard

var doc = app.activeDocument;
var layer = doc.activeLayer;
var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex(1)];
var centimetros = 28.35;

var fundoLayer = doc.layers.add();
fundoLayer.name = "Fundo";
var lightBlueColor = new RGBColor();
lightBlueColor.red = 79;
lightBlueColor.green = 128;
lightBlueColor.blue = 255;
fundoLayer.color = lightBlueColor;
fundoLayer.zOrder(ZOrderMethod.SENDTOBACK);

var width = artboard.artboardRect[2] - artboard.artboardRect[0] + centimetros;
var height = artboard.artboardRect[1] - artboard.artboardRect[3] + centimetros;

var x = artboard.artboardRect[0] - (centimetros * 2) / 2;
var y = artboard.artboardRect[1] + (centimetros * 2) / 2;
var square = fundoLayer.pathItems.rectangle(y, x, width, height);
square.filled = true;
square.stroked = false;
square.selected = true;

doc.fitArtboardToSelectedArt(0);