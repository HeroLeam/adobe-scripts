/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Cria uma nova camada no Adobe Illustrator

// ----------------------------------------------------------------------------------- //

// Seleciona o documento ativo
var doc = app.activeDocument;
// Obtém o número da próxima camada na sequência
var nextLayerNumber = doc.layers.length + 1;
// Solicita o nome da nova camada
var layerName = prompt("Digite o nome da Layer", "");
// Verifica se o nome está vazio
if (layerName === "") {
  // Define o nome da nova camada com a sequência numérica
  layerName = "Layer " + nextLayerNumber;
}

// Ajusta os nomes
function ajustarNomeCamada(nome) {
  if (nome.toLowerCase() === "fundo") {
    return "Fundo";
  } else if (nome.toLowerCase() === "peça" || nome.toLowerCase() === "peca") {
    return "Peça";
  }
  return nome;
}
// Ajusta o nome da camada
layerName = ajustarNomeCamada(layerName);
// Converte a primeira letra para maiúscula
layerName = layerName.charAt(0).toUpperCase() + layerName.slice(1);
// Cria a nova camada
var newLayer = doc.layers.add();
// Define o nome da camada
newLayer.name = layerName;
// Define a cor da camada como "light blue"
var lightBlueColor = new RGBColor();
lightBlueColor.red = 79;
lightBlueColor.green = 128;
lightBlueColor.blue = 255;
newLayer.color = lightBlueColor;

// Verifica se o nome é "Fundo" ou "Peça"
if (layerName.toLowerCase() === "fundo" || layerName.toLowerCase() === "peça") {
  // Move a nova camada para o início da pilha de camadas
  newLayer.zOrder(ZOrderMethod.SENDTOBACK);
}
