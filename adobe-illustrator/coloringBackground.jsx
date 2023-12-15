/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Cria uma forma com 2 cm maior que o objeto selecionado

// ----------------------------------------------------------------------------------- //

// define o documento ativo
var doc = app.activeDocument;
if (app.selection.length === 0) {
  alert("Por favor, selecione um objeto.");
} else {
  // define o elemento
  var element = doc.selection[0];
  // armazena as coordenadas e dimensões do elemento
  var centimetros = 28.35;
  var elementX = element.left;
  var elementY = element.top;
  var elementWidth = element.width + centimetros * 2;
  var elementHeight = element.height + centimetros * 2;
  doc.selection = null;
  // cria um quadrado com as dimensões armazenadas nas mesmas coordenadas do elemento deletado
  var square = doc.activeLayer.pathItems.rectangle(
    elementY + (centimetros * 2) / 2,
    elementX - (centimetros * 2) / 2,
    elementWidth,
    elementHeight
  );
  square.filled = true; // Preenchimento
  square.stroke = true; // Contorno
  square.zOrder(ZOrderMethod.SENDTOBACK);
  square.selected = true;
}
