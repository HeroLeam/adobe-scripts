/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Transforms text into a curve and renames it with its name

var doc = app.activeDocument;

if (doc.selection.length > 0) {
  var selection = doc.selection;

  for (var i = 0; i < selection.length; i++) {
    var object = selection[i];

    if (object instanceof TextFrame && object.kind == TextType.POINTTEXT) {
      var fontName = object.textRange.characterAttributes.textFont.name;
      var objectOutline = object.createOutline();
      objectOutline.name = "Fonte: " + fontName;
    }
  }
} else {
  alert("Selecione um texto para executar o script.");
}