/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Exporta JPG

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
  var jpgOpcoes = new ExportOptionsJPEG();
  jpgOpcoes.qualitySetting = 100;
  jpgOpcoes.resolution = 150;

  var nomeArquivoComExtensao = novoNome + ".jpg";
  var caminhoCompleto = new File(pastaOrigem + "/" + nomeArquivoComExtensao);

  app.activeDocument.exportFile(caminhoCompleto, ExportType.JPEG, jpgOpcoes);
  alert("JPG exported successfully!");
}
