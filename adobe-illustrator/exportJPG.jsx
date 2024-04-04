/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

var doc = app.activeDocument;
var fileName = doc.name;
var folderOrigin = doc.path;
var nameWithoutExtension = fileName.split(".")[0];

var newName = prompt("Digite o nome do arquivo:", nameWithoutExtension);
if (newName === null) {
  alert("Exportação cancelada");
} else {
  var exportOptions = new ExportOptionsJPEG();
  exportOptions.qualitySetting = 100;
  exportOptions.resolution = 150;

  var fileNameWIthExtension = newName + ".jpg";
  var fullPath = new File(folderOrigin + "/" + fileNameWIthExtension);

  app.activeDocument.exportFile(fullPath, ExportType.JPEG, exportOptions);
  alert("Exportado com sucesso!");
}
