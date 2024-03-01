/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/herofield
*/

var doc = app.activeDocument;
var fileName = doc.name;
var folderOrigin = doc.path;
var duplicateDocument = doc.duplicate();
var options = new ExportOptionsSaveForWeb();
options.format = SaveDocumentType.PNG;
options.PNG8 = false;

var width = 120;
var height = 120;

duplicateDocument.resizeImage(UnitValue(width, "px"), UnitValue(height, "px"), null, ResampleMethod.NEARESTNEIGHBOR);

var newFileName = prompt("Insira o novo nome do arquivo:", fileName.replace(/\.[^.]+$/, "_exportado"));

if (newFileName !== null) {
  var exportedFileName = newFileName + ".png";
  var fullPathExported = new File(folderOrigin + "/" + exportedFileName);
  duplicateDocument.exportDocument(fullPathExported, ExportType.SAVEFORWEB, options);
  duplicateDocument.close(SaveOptions.DONOTSAVECHANGES);

  alert("PNG exportado com sucesso!");
} else {
// Closes the duplicate document without saving changes if the user cancels
  duplicateDocument.close(SaveOptions.DONOTSAVECHANGES);
}