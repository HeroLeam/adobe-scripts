/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

var doc = app.activeDocument;
var fileName = doc.name;
var folderOrigin = doc.path;
var nameWithoutExtension = fileName.split(".")[0];

var newName = prompt("Digite o nome do arquivo:", nameWithoutExtension);
if (newName === null) {
  alert("Exportação cancelada");
} else {
  var exportOptions = new ExportOptionsAutoCAD();
  exportOptions.exportFileFormat = AutoCADExportFileFormat.DXF;
  exportOptions.unit = AutoCADUnit.Centimeters;
  exportOptions.unitScaleRatio = 1.0;

  var fileNameWIthExtension = newName + ".dxf";
  var fullPath = new File(folderOrigin + "/" + fileNameWIthExtension);

  app.activeDocument.exportFile(fullPath, ExportType.AUTOCAD, exportOptions);
  alert("Exportado com sucesso!");
}
