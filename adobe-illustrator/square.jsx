/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Gera arquivo de gabarito

// ----------------------------------------------------------------------------------- //

// Define o documento ativo
var doc = app.activeDocument;
var centimetros = 28.35;
// Define o elemento
var element = doc.selection[0];
// Armazena as coordenadas e dimensões do elemento
var centimetros = 28.35;
var elementX = element.left;
var elementY = element.top;
var elementWidth = element.width;
var elementHeight = element.height;
// element.remove(); // Deleta o elemento
// Cria um quadrado com as dimensões armazenadas nas mesmas coordenadas do elemento deletado
var square = doc.activeLayer.pathItems.rectangle(
  elementY,
  elementX,
  elementWidth,
  elementHeight
);
square.stroked = true;
square.strokeColor = new RGBColor(0, 0, 0);
square.filled = false;