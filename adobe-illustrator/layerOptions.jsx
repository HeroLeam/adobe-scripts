/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Create Layer according to selected option

var layerOptions = [
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

var dialog = new Window("dialog", "Qual layer deseja criar");
dialog.orientation = "column";

var panelButton = dialog.add("panel");
panelButton.orientation = "column";
panelButton.alignChildren = "center";

var buttons = [];
for (var i = 0; i < layerOptions.length; i++) {
  if (i % 3 === 0) {
    var rowPanel = panelButton.add("panel");
    rowPanel.orientation = "row";
    rowPanel.alignChildren = "center";
  }

  var button = rowPanel.add("button", undefined, layerOptions[i]);
  button.preferredSize = [200, 40];
  buttons.push(button);
}

dialog.add("button", undefined, "Cancelar").onClick = function () {
  dialog.close();
};

for (var j = 0; j < buttons.length; j++) {
  buttons[j].onClick = function () {
    var layerName = this.text;
    createLayer(layerName);
    dialog.close();
  };
}

dialog.show();

function createLayer(layerName) {
  var doc = app.activeDocument;
  var newLayer = doc.layers.add();

  if (layerName === "Fundo" || layerName === "Peça") {
    newLayer.zOrder(ZOrderMethod.SENDTOBACK);
    newLayer.name = layerName;
  } else {
    newLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
    newLayer.name = layerName;
  }

  var lightBlueColor = new RGBColor();
  lightBlueColor.red = 79;
  lightBlueColor.green = 128;
  lightBlueColor.blue = 255;
  newLayer.color = lightBlueColor;
}