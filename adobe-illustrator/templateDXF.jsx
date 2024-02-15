/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/herofield
*/

// Script: Generate template file

var doc = app.activeDocument;
var cm = 28.35;
var element = doc.selection[0];
var elementX = element.left;
var elementY = element.top;
var elementWidth = element.width;
var elementHeight = element.height;

element.remove();
// Creates a square with dimensions stored in the same coordinates as the deleted element
var square = doc.activeLayer.pathItems.rectangle(
  elementY,
  elementX,
  elementWidth,
  elementHeight
);
square.stroked = true;
square.strokeColor = new RGBColor(0, 0, 0);
square.filled = false;

var fileName = doc.name;

var newFileName = fileName.replace("_", "").replace(/bordado/i, "").replace(/gabarito/i, "").replace(/aviamento/i, "").replace(".ai", "").replace(".dxf", "")

newFileName = "REF: " + newFileName;

var textFrame = doc.textFrames.add();

textFrame.contents = newFileName;
textFrame.textRange.characterAttributes.textFont = app.textFonts.getByName("ArialMT");
textFrame.textRange.characterAttributes.size = 20;

var artboardWidth = doc.artboards[0].artboardRect[2] - doc.artboards[0].artboardRect[0];
var artboardHeight = doc.artboards[0].artboardRect[1] - doc.artboards[0].artboardRect[3];

// Align the text in the center of the artboard
var textWidth = textFrame.width;
var textHeight = textFrame.height;
var textX = elementX + elementWidth / 2;
var textY = elementY - (elementHeight + cm / 2);
textFrame.position = [textX, textY];
// Align the text in the center of the artboard
textFrame.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;

var additionalTexts = [
  "PB - MB - GB",
  "PB - MB - GB - 1T - 2T - 3T",
  "1T - 2T - 3T",
  "1T - 2T - 3T - 4 - 6 - 8",
  "1T - 2T - 3T - 4 - 6 - 8 - 10 - 12 - 14",
  "1T - 2T - 3T - 4 - 6 - 8 - 10 - 12 - 14 - 16 - 18",
  "4 - 6 - 8",
  "4 - 6 - 8 - 10",
  "4 - 6 - 8 - 10 - 12 - 14",
  "4 - 6 - 8 - 10 - 12 - 14 - 16 - 18",
  "10 - 12 - 14",
  "12 - 14 - 16 - 18",
  "12 - 14 - 16 - 18 - 20",
];

var dialog = new Window("dialog", "Qual a linha de grade?");
dialog.orientation = "column";

var panelButton = dialog.add("panel");
panelButton.orientation = "column";
panelButton.alignChildren = "center";

var buttons = [];
for (var i = 0; i < additionalTexts.length; i++) {
  if (i % 3 === 0) {
    var rowPanel = panelButton.add("panel");
    rowPanel.orientation = "row";
    rowPanel.alignChildren = "center";
  }

  var button = rowPanel.add("button", undefined, additionalTexts[i]);
  button.preferredSize = [300, 40];
  buttons.push(button);
}

dialog.add("button", undefined, "Cancelar").onClick = function () {
  dialog.close();
};

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onClick = function () {
    // Remove previous additional text, if any
    if (doc.textFrames.length > 2) {
      doc.textFrames[1].remove();
    }
    var additionalTextFrame = doc.textFrames.add();
    additionalTextFrame.contents = this.text;
    additionalTextFrame.textRange.characterAttributes.textFont = app.textFonts.getByName("ArialMT");
    additionalTextFrame.textRange.characterAttributes.size = 20;

    var additionalTextX = textX;
    var additionalTextY = textY - additionalTextFrame.height - 5;
    additionalTextFrame.position = [additionalTextX, additionalTextY];
    additionalTextFrame.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
    dialog.close();
  };
}
dialog.show();

var allItems = doc.pageItems;

for (var i = 0; i < allItems.length; i++) {
  allItems[i].selected = true;
}

var sel = doc.selection;
if (sel.length > 0) {
  var group = doc.groupItems.add();
  for (var i = 0; i < sel.length; i++) {
    sel[i].move(group, ElementPlacement.PLACEATEND);
  }
  group.rotate(90);
}

if (doc.selection.length > 0) {
  var selectedItem = doc.selection[0];
  var selectedItemHeight = selectedItem.height;
  var duplicatedItem = selectedItem.duplicate();
  duplicatedItem.top = selectedItem.top - selectedItemHeight - cm;
  doc.selection = null;
  duplicatedItem.selected = true;
}

// Set export options
var exportOptions = new ExportOptionsAutoCAD();
exportOptions.exportFileFormat = AutoCADExportFileFormat.DXF;
exportOptions.unit = AutoCADUnit.Centimeters;
exportOptions.unitScaleRatio = 1.0;
var docName = app.activeDocument.name;
var exportFileName = docName.substring(0, docName.lastIndexOf(".")) + ".dxf";
var exportFolder = app.activeDocument.path;
try {
  var dxfPath = new File(exportFolder + "/" + exportFileName.replace("_", "").replace(" ", "").replace(/bordado/i, "_gabarito").replace(/gabarito/i, "_gabarito").replace(/aviamento/i, "_gabarito"));
  app.activeDocument.exportFile(dxfPath, ExportType.AUTOCAD, exportOptions);
  // alert("Arquivo " + exportFileName.replace("_", "").replace(/bordado/i, "_Gabarito") + " exportado com sucesso!");
} catch (e) {
  alert("Erro ao exportar arquivo: " + e);
}

// ----------------------------------------------------------------------------------- //

alert("Gabarito exportado com sucesso!");
// Close the document without saving changes
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);