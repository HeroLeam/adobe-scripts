/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/herofield
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
  options.format = SaveDocumentType.COMPUSERVEGIF;
  options.optimized = true;
  options.colors = 256;
  options.dither = Dither.NOISE;
  options.transparency = true;

  var fileNameWithExtension = newName + ".gif";
  var fullPath = new File(folderOrigin + "/" + fileNameWithExtension);
  doc.exportDocument(fullPath, ExportType.SAVEFORWEB, options);
  doc.close(SaveOptions.DONOTSAVECHANGES);

  alert("GIF exportado com sucesso como '" + fileNameWithExtension + "'.");
}
