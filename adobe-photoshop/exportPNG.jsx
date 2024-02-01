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
  var options = new ExportOptionsSaveForWeb();
  options.format = SaveDocumentType.JPEG;
  options.includeProfile = true;
  options.optimized = true;
  options.quality = 100;

  var fileNameWithExtension = newName + ".png";
  var fullPath = new File(folderOrigin + "/" + fileNameWithExtension);

  doc.exportDocument(fullPath, ExportType.SAVEFORWEB, options);
  alert("Exportado com sucesso!");
}