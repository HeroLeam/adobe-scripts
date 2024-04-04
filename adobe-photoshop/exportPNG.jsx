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
  var options = new ExportOptionsSaveForWeb();
  options.format = SaveDocumentType.PNG;
  options.includeProfile = true;
  options.optimized = true;
  options.PNG8 = false;
  options.quality = 100;

  var fileNameWithExtension = newName + ".png";
  var fullPath = new File(folderOrigin + "/" + fileNameWithExtension);

  doc.exportDocument(fullPath, ExportType.SAVEFORWEB, options);
  alert("Exportado com sucesso!");
}