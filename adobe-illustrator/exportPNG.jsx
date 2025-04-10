/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Export PNG

var doc = app.activeDocument;
var fileName = doc.name;
var folderOrigin = doc.path;
var nameWithoutExtension = fileName.split(".")[0];

var newName = prompt("Digite o nome do arquivo:", nameWithoutExtension);
if (newName === null) {
  alert("Exportação cancelada");
} else {
  var exportOptions = new ExportOptionsPNG24();
  exportOptions.antiAliasing = true;
  exportOptions.transparency = true;
  exportOptions.artBoardClipping = true;

  var fileNameWIthExtension = newName + ".png";
  var fullPath = new File(folderOrigin + "/" + fileNameWIthExtension);

  app.activeDocument.exportFile(fullPath, ExportType.PNG24, exportOptions);
  alert("Exportado com sucesso!");
}