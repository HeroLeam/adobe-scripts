/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Duplicate the selected object to the right 1 cm

var doc = app.activeDocument;
var cm = 28.35;

if (doc.selection.length > 0) {
  var selectedItem = doc.selection[0];
  var selectedItemWidth = selectedItem.width;

  var duplicatedItem = selectedItem.duplicate();

  duplicatedItem.left = selectedItem.left + selectedItemWidth + cm;
  doc.selection = null;
  duplicatedItem.selected = true;
} else {
  alert("Nenhum item selecionado. Selecione um item e tente novamente.");
}