/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Posiciona objeto para o topo e 1 cm para fora da artboard

// ----------------------------------------------------------------------------------- //

// Define o documento ativo
var doc = app.activeDocument;

if (app.selection.length === 0) {
  alert("Por favor, selecione um objeto.");
} else {
  // Define o elemento
  var element = doc.selection[0];

  // Armazena dimensão do elemento
  var centimetros = 28.35; // 1 cm
  var elementWidth = element.width;
  var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex(1)];

  // Obtém a posição superior da artboard
  var artboardTop = artboard.artboardRect[1];
  var artboardWidth = artboard.artboardRect[2];

  // Move o elemento para o topo da artboard
  element.top = artboardTop;

  // Move o elemento para a direita
  element.left = artboardWidth + centimetros;
}
