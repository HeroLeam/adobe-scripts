/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Cria medidas do objeto selecionado

// ----------------------------------------------------------------------------------- //

if (app.selection.length === 0) {
  alert("Por favor, selecione um objeto.");
} else {
  var doc = app.activeDocument;
  var element = doc.selection[0];
  // armazena as coordenadas e dimensões do elemento
  var centimetros = 28.35;
  var elementX = element.left;
  var elementY = element.top;
  var elementWidth = element.width;
  var elementHeight = element.height;

  var square = doc.activeLayer.pathItems.rectangle(
    elementY,
    elementX,
    elementWidth,
    elementHeight
  );
  square.stroked = true;
  square.filled = false;
  doc.selection = null;
  square.selected = true;

  var newLayer = app.activeDocument.layers.add();
  newLayer.name = "Tamanho";
  var lightBlueColor = new RGBColor();
  lightBlueColor.red = 79;
  lightBlueColor.green = 128;
  lightBlueColor.blue = 255;
  newLayer.color = lightBlueColor;

  var selectedObject = app.selection[0];

  var width, height;

  if (selectedObject.typename === "GroupItem") {
    var groupBounds = selectedObject.geometricBounds;
    width = groupBounds[2] - groupBounds[0];
    height = groupBounds[3] - groupBounds[1];
  } else {
    width = selectedObject.width;
    height = selectedObject.height;
  }

  // ----------------------------------------------------------------------------------- //

  // Cria uma nova linha horizontal
  var horizontalLine = app.activeDocument.pathItems.add();
  horizontalLine.setEntirePath([
    [0, height],
    [width, height],
  ]);
  horizontalLine.stroked = true;
  horizontalLine.filled = false;
  horizontalLine.strokeWidth = 1.5;
  horizontalLine.strokeColor = new RGBColor();
  horizontalLine.strokeColor.red = 255;
  horizontalLine.strokeColor.green = 0;
  horizontalLine.strokeColor.blue = 0;

  var position = selectedObject.position;
  horizontalLine.position = [position[0], position[1] - height - centimetros];

  // ----------------------------------------------------------------------------------- //

  // Cria uma nova linha vertical
  var verticalLine = app.activeDocument.pathItems.add();
  verticalLine.setEntirePath([
    [width, 0],
    [width, height],
  ]);
  verticalLine.stroked = true;
  verticalLine.filled = false;
  verticalLine.strokeWidth = 1.5;
  verticalLine.strokeColor = new RGBColor();
  verticalLine.strokeColor.red = 255;
  verticalLine.strokeColor.green = 0;
  verticalLine.strokeColor.blue = 0;

  verticalLine.position = [position[0] - centimetros, position[1]];

  // ----------------------------------------------------------------------------------- //

  // Cria o texto para a linha horizontal
  var horizontalText = app.activeDocument.textFrames.add();
  horizontalText.contents = (width / centimetros).toFixed(1) + " cm";
  horizontalText.position = [
    position[0] + width / 2,
    position[1] - (height + centimetros * 2),
  ];
  horizontalText.textRange.characterAttributes.fillColor = new RGBColor();
  horizontalText.textRange.characterAttributes.fillColor.red = 255;
  horizontalText.textRange.characterAttributes.fillColor.green = 0;
  horizontalText.textRange.characterAttributes.fillColor.blue = 0;
  horizontalText.textRange.characterAttributes.size = 25;
  horizontalText.textRange.characterAttributes.textFont =
    app.textFonts.getByName("ArialMT");
  horizontalText.textRange.paragraphAttributes.justification =
    Justification.CENTER;

  // ----------------------------------------------------------------------------------- //

  // Cria o texto para a linha vertical
  var verticalText = app.activeDocument.textFrames.add();
  verticalText.contents = (height / centimetros).toFixed(1) + " cm";
  verticalText.position = [
    position[0] - centimetros * 2,
    position[1] - height / 2,
  ];
  verticalText.textRange.characterAttributes.fillColor = new RGBColor();
  verticalText.textRange.characterAttributes.fillColor.red = 255;
  verticalText.textRange.characterAttributes.fillColor.green = 0;
  verticalText.textRange.characterAttributes.fillColor.blue = 0;
  verticalText.textRange.characterAttributes.size = 25;
  verticalText.textRange.characterAttributes.textFont =
    app.textFonts.getByName("ArialMT");
  verticalText.textRange.paragraphAttributes.justification =
    Justification.CENTER;
  verticalText.rotate(90);

  // ----------------------------------------------------------------------------------- //

  // Deleta o quadrado temporário
  square.remove();
}
