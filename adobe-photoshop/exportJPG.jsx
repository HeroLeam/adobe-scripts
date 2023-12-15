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
  var options = new ExportOptionsSaveForWeb();
  options.format = SaveDocumentType.JPEG;
  options.optimized = true;
  options.resolution = 72;
  options.quality = 100;

  var nomeArquivoComExtensao = novoNome + ".jpg";
  var caminhoCompleto = new File(pastaOrigem + "/" + nomeArquivoComExtensao);

  doc.exportDocument(caminhoCompleto, ExportType.SAVEFORWEB, options);
  alert("JPG exported successfully!");
}
