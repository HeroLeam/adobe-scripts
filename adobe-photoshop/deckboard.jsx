/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// ----------------------------------------------------------------------------------- //

// Obtém o documento ativo
var doc = app.activeDocument;
var nomeArquivo = doc.name;
var pastaOrigem = doc.path;

// Duplica o documento
var docDuplicado = doc.duplicate();

// Define as opções de exportação
var options = new ExportOptionsSaveForWeb();
options.format = SaveDocumentType.PNG;
// options.optimized = true;
options.PNG8 = false;

// Define as dimensões desejadas
var width = 120;
var height = 120;

// Redimensiona o documento duplicado para as dimensões desejadas
docDuplicado.resizeImage(UnitValue(width, "px"), UnitValue(height, "px"), null, ResampleMethod.NEARESTNEIGHBOR);

// Prompt para inserir o novo nome do arquivo
var novoNomeArquivo = prompt("Insira o novo nome do arquivo:", nomeArquivo.replace(/\.[^.]+$/, "_exportado"));

if (novoNomeArquivo !== null) {
  // Define o nome do arquivo exportado
  var nomeArquivoExportado = novoNomeArquivo + ".png";

  // Define o caminho completo para o arquivo exportado
  var caminhoCompletoExportado = new File(pastaOrigem + "/" + nomeArquivoExportado);

  // Exporta o documento duplicado como PNG
  docDuplicado.exportDocument(caminhoCompletoExportado, ExportType.SAVEFORWEB, options);

  // Fecha o documento duplicado sem salvar as alterações
  docDuplicado.close(SaveOptions.DONOTSAVECHANGES);

  alert("PNG exportado com sucesso!");
} else {
  // Fecha o documento duplicado sem salvar as alterações se o usuário cancelar
  docDuplicado.close(SaveOptions.DONOTSAVECHANGES);
}