/*
Author: Thiago Leoni Amaral
Copyright © 2025
https://heroleam.github.io/portfolio
*/

// Script: Adds filename text, but only files with numbers, such as references

function addFilenameNumber() {
  if (!app.documents.length) {
      alert("Nenhum documento aberto.");
      return;
  }

  var doc = app.activeDocument;
  var filename = doc.name.replace(/\.psd$/i, ""); // Remove .psd extension
  var numberMatch = filename.match(/\d+/); // Captura apenas os números

  if (!numberMatch) {
      alert("Nenhum número encontrado no nome do arquivo.");
      return;
  }

  var numberOnly = numberMatch[0];
  var textLayer = doc.artLayers.add();
  textLayer.kind = LayerKind.TEXT;
  textLayer.textItem.contents = numberOnly;
  textLayer.textItem.size = 150;
  textLayer.textItem.font = "ArialMT";
  textLayer.textItem.color.rgb.hexValue = "ff0000";
  
  textLayer.textItem.position = [2, 6];
}

addFilenameNumber();