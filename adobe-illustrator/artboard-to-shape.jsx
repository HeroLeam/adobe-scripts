/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Cria uma forma com a cor selecionada no tamanho da artboard 2 cm maior

// ----------------------------------------------------------------------------------- //

// Seleciona o documento ativo
var doc = app.activeDocument;
// Seleciona a camada ativa
var layer = doc.activeLayer;
var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex(1)];
var centimetros = 28.35;

var fundoLayer = doc.layers.add(); // Cria uma nova camada
fundoLayer.name = "Fundo"; // Define o nome da camada como "Fundo"
var lightBlueColor = new RGBColor();
lightBlueColor.red = 79;
lightBlueColor.green = 128;
lightBlueColor.blue = 255;
fundoLayer.color = lightBlueColor;
fundoLayer.zOrder(ZOrderMethod.SENDTOBACK);

// Cria o retângulo
var width =
  artboard.artboardRect[2] - artboard.artboardRect[0] + centimetros * 2; // adiciona 2cm à largura
var height =
  artboard.artboardRect[1] - artboard.artboardRect[3] + centimetros * 2; // adiciona 2cm à altura

// Centraliza o retângulo
var x = artboard.artboardRect[0] - (centimetros * 2) / 2;
var y = artboard.artboardRect[1] + (centimetros * 2) / 2;
var square = fundoLayer.pathItems.rectangle(y, x, width, height);
square.filled = true; // Preenchimento
square.stroked = false; // Contorno
square.selected = true; // seleciona o retângulo criado

// Ajusta a artboard no tamanho do retângulo criado
doc.fitArtboardToSelectedArt(0); // ajusta a artboard no tamanho do retângulo criado
