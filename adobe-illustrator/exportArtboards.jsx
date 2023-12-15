/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script para salvar imagens em jpg por artboard

// ----------------------------------------------------------------------------------- //

var arquivo = activeDocument.fullName;

function salvarArtboardsBotao1() {
  salvarArtboards([1], "_botao1");
  dialog.close();
}

function salvarArtboardsBotao2() {
  salvarArtboards([1, 7, 8], "_botao2");
  dialog.close();
}

function salvarArtboardsBotao3() {
  salvarArtboards([1, 4, 5, 6], "_botao3");
  dialog.close();
}

function salvarArtboards(artboardIndices, sufixo) {
  var jpgOpcoes = new ExportOptionsJPEG();
  jpgOpcoes.qualitySetting = 50;
  jpgOpcoes.artBoardClipping = true;

  var doc = app.activeDocument;

  for (var i = 0; i < artboardIndices.length; i++) {
    var index = artboardIndices[i] - 1; // Subtrai 1 porque os índices começam em 0
    var nomeArquivo = activeDocument.name.split(".")[0].replace(/\s/g, "_");
    var artboard = doc.artboards[index];
    var artboardNome = artboard.name.replace(/\s/g, "_").toLowerCase();
    var nomeArquivoFinal = nomeArquivo + "_" + artboardNome + "_";

    var jpgCaminho = new File(doc.path + "/" + nomeArquivoFinal + ".jpg");

    // Define a artboard ativa
    doc.artboards.setActiveArtboardIndex(index);

    // Exporta o arquivo em JPEG
    doc.exportFile(jpgCaminho, ExportType.JPEG, jpgOpcoes);
  }

  alert("Imagens salvas com sucesso!");
}

// Agora, você precisa criar botões para chamar as funções
// Por exemplo, usando o ScriptUI:

var dialog = new Window("dialog", "Salvar Artboards");

var botao1 = dialog.add("button", undefined, "Principal");
botao1.onClick = salvarArtboardsBotao1;

var botao2 = dialog.add("button", undefined, "2 Sortimentos");
botao2.onClick = salvarArtboardsBotao2;

var botao3 = dialog.add("button", undefined, "3 Sortimentos");
botao3.onClick = salvarArtboardsBotao3;

dialog.show();
