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
var element = doc.selection[0];
var elementX = element.left;
var elementY = element.top;
var elementWidth = element.width;
var elementHeight = element.height;
// deleta o elemento
element.remove();
// cria um quadrado com as dimensões armazenadas nas mesmas coordenadas do elemento deletado
var square = doc.activeLayer.pathItems.rectangle(
  elementY,
  elementX,
  elementWidth,
  elementHeight
);
square.stroked = true; // habilita a borda
square.strokeColor = new RGBColor(0, 0, 0); // Define a cor
square.filled = false; // desabilita o preenchimento
// obtém o nome do arquivo
var fileName = doc.name;
// Digita nome do arquivo
var newFileName = fileName.replace("_", "").replace(/bordado/i, "").replace(/gabarito/i, "").replace(/aviamento/i, "").replace(".ai", "").replace(".dxf", "")

newFileName = "REF: " + newFileName;
// cria um novo objeto TextFrame com o nome do arquivo modificado
var textFrame = doc.textFrames.add();
textFrame.contents = newFileName;
// define a fonte e o tamanho do texto
textFrame.textRange.characterAttributes.textFont =
  app.textFonts.getByName("ArialMT");
textFrame.textRange.characterAttributes.size = 20;
// armazena as dimensões da artboard
var artboardWidth =
  doc.artboards[0].artboardRect[2] - doc.artboards[0].artboardRect[0];
var artboardHeight =
  doc.artboards[0].artboardRect[1] - doc.artboards[0].artboardRect[3];
// alinha o texto no centro da artboard
var textWidth = textFrame.width;
var textHeight = textFrame.height;
var textX = elementX + elementWidth / 2; // define a posição X do texto
var textY = elementY - (elementHeight + centimetros / 2); // define a posição Y do texto
textFrame.position = [textX, textY];
// alinha o texto no centro da artboard
textFrame.paragraphs[0].paragraphAttributes.justification =
  Justification.CENTER;

// cria um array com os textos adicionais
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
// cria um diálogo com botões para escolher o texto adicional
var dialog = new Window("dialog", "Qual a linha de grade?");
dialog.orientation = "column";

// Cria um painel para os botões
var buttonPanel = dialog.add("panel");
buttonPanel.orientation = "column";
buttonPanel.alignChildren = "center";

// Cria os botões e adiciona-os ao painel
var buttons = [];
for (var i = 0; i < additionalTexts.length; i++) {
  if (i % 3 === 0) {
    // Cria um novo painel para cada linha
    var rowPanel = buttonPanel.add("panel");
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

// Define a ação dos botões
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onClick = function () {
    // Remove o texto adicional anterior, caso exista
    if (doc.textFrames.length > 2) {
      doc.textFrames[1].remove();
    }
    // Cria um novo objeto TextFrame com o texto do botão clicado
    var additionalTextFrame = doc.textFrames.add();
    additionalTextFrame.contents = this.text;
    // Define a fonte e o tamanho do texto adicional
    additionalTextFrame.textRange.characterAttributes.textFont =
      app.textFonts.getByName("ArialMT");
    additionalTextFrame.textRange.characterAttributes.size = 20;
    // Define a posição do texto adicional abaixo do nome do arquivo
    var additionalTextX = textX;
    var additionalTextY = textY - additionalTextFrame.height - 5; // adiciona um espaço de 5 pontos entre o texto adicional e o nome do arquivo
    additionalTextFrame.position = [additionalTextX, additionalTextY];
    // Justifica o texto adicional à direita
    additionalTextFrame.paragraphs[0].paragraphAttributes.justification =
      Justification.CENTER;
    dialog.close();
  };
}
dialog.show();

// Seleciona todos os elementos do documento
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
  // Rotaciona o grupo em 90 graus
  group.rotate(90);
}

// Verifica se há pelo menos um item selecionado
if (doc.selection.length > 0) {
  var selectedItem = doc.selection[0];
  var selectedItemHeight = selectedItem.height;

  // Duplica o item selecionado
  var duplicatedItem = selectedItem.duplicate();

  // Move o item duplicado para cima
  duplicatedItem.top = selectedItem.top - selectedItemHeight - centimetros;

  doc.selection = null;
  duplicatedItem.selected = true;
}

// ----------------------------------------------------------------------------------- //

// Define as opções de exportação
var exportOptions = new ExportOptionsAutoCAD();
exportOptions.exportFileFormat = AutoCADExportFileFormat.DXF; // alterado para DXF
exportOptions.unit = AutoCADUnit.Centimeters;
exportOptions.unitScaleRatio = 1.0;
// Cria o nome do arquivo de exportação
var docName = app.activeDocument.name;
var exportFileName = docName.substring(0, docName.lastIndexOf(".")) + ".dxf"; // adicionado a extensão ".dxf"
// Define a pasta de exportação
var exportFolder = app.activeDocument.path;
// Exporta o arquivo
try {
  var dxfPath = new File(exportFolder + "/" + exportFileName.replace("_", "").replace(" ", "").replace(/bordado/i, "_gabarito").replace(/gabarito/i, "_gabarito").replace(/aviamento/i, "_gabarito"));
  app.activeDocument.exportFile(dxfPath, ExportType.AUTOCAD, exportOptions);
  // alert("Arquivo " + exportFileName.replace("_", "").replace(/bordado/i, "_Gabarito") + " exportado com sucesso!");
} catch (e) {
  alert("Erro ao exportar arquivo: " + e);
}

// ----------------------------------------------------------------------------------- //

alert("Gabarito exportado com sucesso!");
// Fecha o documento sem salvar alterações
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);