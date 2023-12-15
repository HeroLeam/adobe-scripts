/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// ----------------------------------------------------------------------------------- //

var doc = app.activeDocument;
var nomeArquivo = doc.name;
var pastaOrigem = doc.path;

var nomeSemExtensao = nomeArquivo.split(".")[0];

var novoNome = prompt(
  "Enter the file name (without extension):",
  nomeSemExtensao
);
if (novoNome === null) {
  alert("Export cancelled.");
} else {
  var exportOptions = new ExportOptionsAutoCAD();
  exportOptions.exportFileFormat = AutoCADExportFileFormat.DXF;
  exportOptions.unit = AutoCADUnit.Centimeters;
  exportOptions.unitScaleRatio = 1.0;

  var nomeArquivoComExtensao = novoNome + ".dxf";
  var caminhoCompleto = new File(pastaOrigem + "/" + nomeArquivoComExtensao);

  app.activeDocument.exportFile(
    caminhoCompleto,
    ExportType.AUTOCAD,
    exportOptions
  );
  alert("exported successfully!");
}
