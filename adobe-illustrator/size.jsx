/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Creates measurements of the selected object

if (app.selection.length === 0) {
  alert("Please select an object.");
} else {
  var doc = app.activeDocument;
  var element = doc.selection[0];
  var cm = 28.35;
  var elementX = element.left;
  var elementY = element.top;
  var elementWidth = element.width;
  var elementHeight = element.height;
  var layerName = "Size"

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
  newLayer.name = layerName;
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

  // Creates and sets a new horizontal line
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
  horizontalLine.position = [position[0], position[1] - height - cm];

  // Creates and sets a new vertical line
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

  verticalLine.position = [position[0] - cm, position[1]];

  // Creates the text for the horizontal line
  var horizontalText = app.activeDocument.textFrames.add();
  horizontalText.contents = (width / cm).toFixed(1) + " cm";
  horizontalText.position = [
    position[0] + width / 2,
    position[1] - (height + cm * 2),
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

  // Creates the text for the vertical line
  var verticalText = app.activeDocument.textFrames.add();
  verticalText.contents = (height / cm).toFixed(1) + " cm";
  verticalText.position = [position[0] - cm * 2, position[1] - height / 2];
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

  square.remove();
}