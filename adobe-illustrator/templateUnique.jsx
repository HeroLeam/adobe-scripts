/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Generate unique template file

// Defines the active document
var doc = app.activeDocument;
var cm = 28.35;
var pathObject = doc.selection[0];
var pathObjectX = pathObject.left;
var pathObjectY = pathObject.top;
var pathObjectWidth = pathObject.width;
var pathObjectHeight = pathObject.height;

// Creates an array with additional texts
var moldSizeOptions = [
  "U",
  "RN - PB - MB - GB",
  "PB - MB - GB - 1T - 2T - 3T",
  "PB - MB - GB - 1T - 2T - 3T - 4 - 6 - 8",
  "1T - 2T",
  "1T - 2T - 3T",
  "1T - 2T - 3T - 4 - 6",
  "1T - 2T - 3T - 4 - 6 - 8",
  "1T - 2T - 3T - 4 - 6 - 8 - 10",
  "1T - 2T - 3T - 4 - 6 - 8 - 10 - 12 - 14",
  "1T - 2T - 3T - 4 - 6 - 8 - 10 - 12 - 14 - 16 - 18",
  "3T - 4",
  "4 - 6",
  "4 - 6 - 8",
  "4 - 6 - 8 - 10",
  "4 - 6 - 8 - 10 - 12 - 14",
  "4 - 6 - 8 - 10 - 12 - 14 - 16 - 18",
  "6 - 8",
  "8 - 10",
  "8 - 10 - 12",
  "12 - 14",
  "10 - 12 - 14",
  "12 - 14 - 16 - 18",
  "12 - 14 - 16 - 18 - 20",
  "14 - 16 - 18",
  "P - M - G"
];

// Create a dialog with buttons to choose additional text
var dialog = new Window("dialog", "Qual a linha de grade?");
dialog.orientation = "column";

// Create a panel for the buttons
var buttonPanel = dialog.add("panel");
buttonPanel.orientation = "column";
buttonPanel.alignChildren = "center";

// Create the buttons and add them to the panel
var buttons = [];
for (var i = 0; i < moldSizeOptions.length; i++) {
  if (i % 3 === 0) {
    // Create a new panel for each row
    var rowPanel = buttonPanel.add("panel");
    rowPanel.orientation = "row";
    rowPanel.alignChildren = "center";
  }

  var button = rowPanel.add("button", undefined, moldSizeOptions[i]);
  button.preferredSize = [300, 40];
  buttons.push(button);
}

dialog.add("button", undefined, "Cancelar").onClick = function () {
  dialog.close();
};

// ----------------------------------------------------------------------------------- //

// Defines the button action
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onClick = function () {
    if (this.text !== "Cancelar") {
      // Remove previous additional text, if any
      if (doc.textFrames.length > 2) {
        doc.textFrames[1].remove();
      }
      // Create text as the adjusted file name
      var moldSizeNameFrame = doc.textFrames.add();
      moldSizeNameFrame.contents = this.text;
      moldSizeNameFrame.textRange.characterAttributes.textFont = app.textFonts.getByName("ArialMT");
      moldSizeNameFrame.textRange.characterAttributes.size = 20;
      var moldSizeNameX = pathObjectX + pathObjectWidth / 2;
      var moldSizeNameY = pathObjectY - (pathObjectHeight + cm / 2) - moldSizeNameFrame.height;
      moldSizeNameFrame.position = [moldSizeNameX, moldSizeNameY];
      moldSizeNameFrame.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
      var fileName = doc.name;
      var adjustedFileName = fileName.replace("_", "").replace(/bordado/i, "").replace(/gabarito/i, "").replace(/aviamento/i, "").replace(/aplique/i, "").replace(".ai", "").replace(".dxf", "");
      adjustedFileName = "REF: " + adjustedFileName;
      // Create a text with the name of the sizes
      var textFrame = doc.textFrames.add();
      textFrame.contents = adjustedFileName;
      textFrame.textRange.characterAttributes.textFont = app.textFonts.getByName("ArialMT");
      textFrame.textRange.characterAttributes.size = 20;
      var textWidth = textFrame.width;
      var textHeight = textFrame.height;
      var textX = pathObjectX + pathObjectWidth / 2;
      var textY = pathObjectY - (pathObjectHeight + cm / 2);
      textFrame.position = [textX, textY];
      textFrame.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;

      pathObject.remove();

      // Creates a square from the size of the selected object
      var square = doc.activeLayer.pathItems.rectangle(pathObjectY, pathObjectX, pathObjectWidth, pathObjectHeight);
      square.stroked = true;
      square.strokeColor = new RGBColor(0, 0, 0);
      square.filled = false;

      // Select all objects in the document
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

      // Checks if there is at least one item selected
      if (doc.selection.length > 0) {
        var selectedItem = doc.selection[0];
        var selectedItemHeight = selectedItem.height;
        var duplicatedItem = selectedItem.duplicate();
        duplicatedItem.top = selectedItem.top - selectedItemHeight - cm;
        doc.selection = null;
        duplicatedItem.selected = true;
      }

      // Define export options
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
      } catch (e) {
        alert("Erro ao exportar arquivo: " + e);
      }

      alert("Gabarito exportado com sucesso!");
      // Close the document without saving changes
      app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
    dialog.close();
  };
}
dialog.show();