/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Export PDF

var doc = app.activeDocument;
var fileName = doc.name;
var folderOrigin = doc.path;
var nameWithoutExtension = fileName.split(".")[0];
var newName = prompt("Digite o nome do arquivo:", nameWithoutExtension);

if (newName === null) {
  alert("Exportação cancelada");
} else {
  var options = new PDFSaveOptions();
  options.mode = PDFSaveOptions.SAVEFULL;
  options.bitsPerChannel = BitsPerChannelType.EIGHT;
  options.quality = 12;
  options.jpegQuality = 12;
  options.embedColorProfile = true;
  options.layers = true;
  options.spotColors = true;

  var fileNameWithExtension = newName + ".pdf";
  var fullPath = new File(folderOrigin + "/" + fileNameWithExtension);

  doc.saveAs(fullPath, options);
  alert("Exportado com sucesso!");
}