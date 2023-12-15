/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Transforma texto em curva e renomeia com o nome da mesma

// ----------------------------------------------------------------------------------- //

var doc = app.activeDocument;

// Verifica se algum objeto de texto está selecionado
if (doc.selection.length > 0) {
  var selection = doc.selection;

  // Loop através de todos os objetos selecionados
  for (var i = 0; i < selection.length; i++) {
    var obj = selection[i];

    // Verifica se o objeto é um objeto de texto
    if (obj instanceof TextFrame && obj.kind == TextType.POINTTEXT) {
      // Obtém o nome da fonte do objeto de texto
      var fontName = obj.textRange.characterAttributes.textFont.name;
      // Cria uma cópia do objeto de texto como um contorno
      var outlinedObj = obj.createOutline();
      // Renomeia o objeto de texto convertido em curva com o nome da fonte
      outlinedObj.name = "Fonte: " + fontName;
    }
  }
} else {
  alert("Selecione um objeto de texto para executar o script.");
}
