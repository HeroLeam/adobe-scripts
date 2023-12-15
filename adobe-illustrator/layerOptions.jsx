/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Cria Layer conforme opção selecionada

// ----------------------------------------------------------------------------------- //

// Cria um array com os textos adicionais
var layerOpcoes = [
  "Molde Base",
  "Molde Não Finalizado",
  "Molde Finalizado",
  "Arte",
  "Legenda",
  "Briefing",
  "Coloração",
  "3D",
  "Puff",
  "Glitter",
  "Foil",
  "Brilha Escuro",
  "Aviamento",
  "Liner",
  "Bordado",
  "Peça",
  "Fundo",
];

// Cria um diálogo com botões para escolher o texto adicional
var dialog = new Window("dialog", "Qual layer deseja criar");
dialog.orientation = "column";

// Cria um painel para os botões
var buttonPanel = dialog.add("panel");
buttonPanel.orientation = "column";
buttonPanel.alignChildren = "center";

// Cria os botões e adiciona-os ao painel
var buttons = [];
for (var i = 0; i < layerOpcoes.length; i++) {
  if (i % 3 === 0) {
    // Cria um novo painel para cada linha
    var rowPanel = buttonPanel.add("panel");
    rowPanel.orientation = "row";
    rowPanel.alignChildren = "center";
  }

  var button = rowPanel.add("button", undefined, layerOpcoes[i]);
  button.preferredSize = [200, 40];
  buttons.push(button);
}

dialog.add("button", undefined, "Cancelar").onClick = function () {
  dialog.close();
};

// Função para criar a camada com o texto selecionado
function createLayer(layerName) {
  var doc = app.activeDocument;
  var newLayer = doc.layers.add();

  // Verifica se a camada é "Fundo" ou "Peça" e a posiciona adequadamente
  if (layerName === "Fundo" || layerName === "Peça") {
    newLayer.zOrder(ZOrderMethod.SENDTOBACK);
    newLayer.name = layerName;
  } else {
    newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
    newLayer.name = layerName;
  }
  // Define a cor da camada como "light blue"
  var lightBlueColor = new RGBColor();
  lightBlueColor.red = 79;
  lightBlueColor.green = 128;
  lightBlueColor.blue = 255;
  newLayer.color = lightBlueColor;
}

// Atribui uma função para cada botão criado
for (var j = 0; j < buttons.length; j++) {
  buttons[j].onClick = function () {
    var layerName = this.text;
    createLayer(layerName);
    dialog.close();
  };
}

// Mostra o diálogo
dialog.show();
