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
  options.format = SaveDocumentType.COMPUSERVEGIF;
  options.optimized = true;
  options.colors = 256;
  options.dither = Dither.NOISE;
  options.transparency = true;

  var nomeArquivoGIF = novoNome + ".gif";
  var caminhoCompleto = new File(pastaOrigem + "/" + nomeArquivoGIF);

  doc.exportDocument(caminhoCompleto, ExportType.SAVEFORWEB, options);
  doc.close(SaveOptions.DONOTSAVECHANGES);

  alert("GIF successfully exported as '" + nomeArquivoGIF + "'.");
}
