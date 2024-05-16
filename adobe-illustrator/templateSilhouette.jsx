/*
Author: Thiago Leoni Amaral
Copyright © 2024
https://heroleam.github.io/portfolio
*/

// Script: Shaped template generator

// Defines the active document
var doc = app.activeDocument;
var cm = 28.35;
var pathObject = doc.selection[0];
var pathObjectX = pathObject.left;
var pathObjectY = pathObject.top;
var pathObjectWidth = pathObject.width;
var pathObjectHeight = pathObject.height;

// Creates an array with additional texts
var submenus = {
  "ÚNICO\n(Tamanhos únicos)":
    [
      "U"
    ],
  "BEBÊ\n(№12 | №14 | №20 | №30)":
    [
      "RN - PB - MB - GB",
      "PB - MB - GB",
    ],
  "PRIMEIROS PASSOS\n(№17 | №19 | №21 | №31)":
    [
      "1T - 2T",
      "1T - 2T - 3T",
      "1T - 2T - 3T - 4 - 6",
      "1T - 2T - 3T - 4 - 6 - 8",
      "3T - 4",
      "4 - 6",
      "4 - 6 - 8",
    ],
  "INFANTIL\n(№22 | №32 | №43 | №46)":
    [
      "4 - 6 - 8 - 10",
      "4 - 6 - 8 - 10 - 12 - 14",
    ],
  "JUVENIL\n(№56 | №61)":
    [
      "12 - 14 - 16 - 18",
      "12 - 14 - 16 - 18 - 20",
      "14 - 16 - 18",
      "16 - 18",
      "20",
      "P - M - G"
    ],
  "TODOS\n(Todas as numerações)":
    [
      "PB - MB - GB - 1T - 2T - 3T",
      "PB - MB - GB - 1T - 2T - 3T - 4 - 6 - 8",
      "1T - 2T - 3T - 4 - 6 - 8 - 10",
      "1T - 2T - 3T - 4 - 6 - 8 - 10 - 12 - 14",
      "1T - 2T - 3T - 4 - 6 - 8 - 10 - 12 - 14 - 16 - 18",
    ]
};

// ----------------------------------------------------------------------------------- //

// Create a dialog with buttons to choose additional text
var mainDialog = new Window("dialog", "Gerador de gabarito em forma");
mainDialog.orientation = "column";

// Description text
var descriptionText = "Esse gerador é usado quando a arte precisa estar presente, sendo assim é convertido toda a arte em contorno mantendo a silhueta.\nEscolhe a linha da grade abaixo:";
var description = mainDialog.add("statictext", undefined, descriptionText);
description.justify = "center";
description.preferredSize.height = 50;

// Create a panel for the buttons
var buttonPanel = mainDialog.add("panel");
buttonPanel.orientation = "column";
buttonPanel.alignChildren = "center";

// Create buttons and add them to the panel
var buttons = [];
for (var label in submenus) {
  var button = buttonPanel.add("button", undefined, label);
  button.preferredSize = [250, 60];
  button.alignment = "center";
  buttons.push(button);
}

mainDialog.add("button", undefined, "Cancelar").onClick = function () {
  mainDialog.close();
};

// ----------------------------------------------------------------------------------- //

// Defines the button action
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onClick = function () {
    var submenuDialog = new Window("dialog", "Escolha o tamanho:");
    submenuDialog.orientation = "column";

    var selectedSizes = submenus[this.text];

    // Description text
    var descriptionText = "Escolhe o tamanho da grade abaixo:";
    var description = submenuDialog.add("statictext", undefined, descriptionText);
    description.justify = "center";
    description.preferredSize.height = 50;

    var selectedSizes = submenus[this.text];

    // Cria um painel para os botões
    var buttonPanel = submenuDialog.add("panel");
    buttonPanel.orientation = "column";
    buttonPanel.alignChildren = "center";


    // Create buttons and add them to the panel
    for (var i = 0; i < selectedSizes.length; i++) {
      var button = buttonPanel.add("button", undefined, selectedSizes[i]);
      button.preferredSize = [300, 40];
      button.onClick = function () {
        if (this.text !== "Cancelar") {
          // Remove o texto adicional anterior, se houver
          if (doc.textFrames.length > 2) {
            doc.textFrames[1].remove();
          }

          // ----------------------------------------------------------------------------------- //

          // Function to transform into black outline
          function transformToOutline(item) {
            if (item.typename === "GroupItem") {
              // Transforms each item within the group
              for (var i = 0; i < item.pageItems.length; i++) {
                transformToOutline(item.pageItems[i]);
              }
            } else if (item.typename === "CompoundPathItem") {
              var compoundPath = item.pathItems;
              for (var j = 0; j < compoundPath.length; j++) {
                compoundPath[j].stroked = true;
                compoundPath[j].filled = false;
                compoundPath[j].strokeColor = new RGBColor();
              }
            } else if (item.typename === "PathItem") {
              item.stroked = true;
              item.filled = false;
              item.strokeColor = new RGBColor();
            }
          }

          // Transforms all selected objects
          var selectedItems = doc.selection;
          for (var i = 0; i < selectedItems.length; i++) {
            transformToOutline(selectedItems[i]);
          }

          // ----------------------------------------------------------------------------------- //

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

          // Seleciona todos os objetos no documento
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
          } catch (e) {
            alert("Erro ao exportar arquivo: " + e);
          }

          alert("Gabarito exportado com sucesso!");
          // Close the document without saving changes
          mainDialog.close();
          app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        submenuDialog.close();
      };
    }
    submenuDialog.add("button", undefined, "Cancelar").onClick = function () {
      submenuDialog.close();
    };
    submenuDialog.show();
  };
}
mainDialog.show();