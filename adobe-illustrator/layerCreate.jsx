/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Create a new layer in Adobe Illustrator

var doc = app.activeDocument;
var nextLayerNumber = doc.layers.length + 1;
var layerName = prompt("Digite o nome da Layer", "");

if (layerName === "") {
  layerName = "Layer " + nextLayerNumber;
}

layerName = adjustLayerName(layerName);
layerName = layerName.charAt(0).toUpperCase() + layerName.slice(1);

var newLayer = doc.layers.add();
newLayer.name = layerName;

var lightBlueColor = new RGBColor();
lightBlueColor.red = 79;
lightBlueColor.green = 128;
lightBlueColor.blue = 255;
newLayer.color = lightBlueColor;

if (layerName.toLowerCase() === "fundo" || layerName.toLowerCase() === "peça") {
  newLayer.zOrder(ZOrderMethod.SENDTOBACK);
}

function adjustLayerName(newAdjustedLayer) {
  if (newAdjustedLayer.toLowerCase() === "fundo") {
    return "Fundo";
  } else if (newAdjustedLayer.toLowerCase() === "peça" || newAdjustedLayer.toLowerCase() === "peca") {
    return "Peça";
  }
  return newAdjustedLayer;
}