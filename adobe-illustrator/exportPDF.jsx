/*
Author: Thiago Leoni Amaral
Copyright © 2024
https://linktr.ee/heroleam
*/

// Script: Export PDF

// ----------------------------------------------------------------------------------- //

var doc = app.activeDocument;
var fileName = doc.name;
var folderOrigin = doc.path;
var nameWithoutExtension = fileName.split(".")[0];

var newName = prompt("Digite o nome do arquivo:", nameWithoutExtension);
if (newName === null) {
  alert("Exportação cancelada");
} else {
  var exportOptions = new PDFSaveOptions();
  var fileNameWIthExtension = newName + ".pdf";
  var fullPath = new File(folderOrigin + "/" + fileNameWIthExtension);

  doc.saveAs(fullPath, exportOptions);
  alert("Exportado com sucesso!");
}