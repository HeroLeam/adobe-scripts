/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Exporta PNG

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
  var pngOpcoes = new ExportOptionsPNG24();
  pngOpcoes.antiAliasing = true;
  pngOpcoes.transparency = true;

  var nomeArquivoComExtensao = novoNome + ".png";
  var caminhoCompleto = new File(pastaOrigem + "/" + nomeArquivoComExtensao);

  app.activeDocument.exportFile(caminhoCompleto, ExportType.PNG24, pngOpcoes);
  alert("PNG exported successfully!");
}
