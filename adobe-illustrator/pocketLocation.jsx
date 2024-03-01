/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/herofield
*/

// Script: Localiza aplique para gabarito estilo bolso

var cm = 28.3465

if (app.selection.length > 1) {
  // Criação do painel de escolha
  var painel = new Window("dialog", "Painel de Escolha");

  var buttonOne = painel.add("button", undefined, "PB - MB - GB");
  buttonOne.onClick = function () {
    alignObjects();
    moveObject(-9.5);
    deleteObject();
    painel.close();
  };

  var buttonTwo = painel.add("button", undefined, "1 - 2 - 3");
  buttonTwo.onClick = function () {
    alignObjects();
    moveObject(-11.5);
    deleteObject();
    painel.close();
  };

  var buttonThree = painel.add("button", undefined, "4 - 6 - 8");
  buttonThree.onClick = function () {
    alignObjects();
    moveObject(-13);
    deleteObject();
    painel.close();
  };

  var buttonFour = painel.add("button", undefined, "10 - 12 - 14");
  buttonFour.onClick = function () {
    alignObjects();
    moveObject(-15.5);
    deleteObject();
    painel.close();
  };

  painel.show();

  function alignObjects() {
    var objectAlinhar = app.selection[1]; // Object selected from below
    var objectReferencia = app.selection[0]; // Object selected from above

    // Gets the position of reference objects
    var referenciaPosicaoX = objectReferencia.left + objectReferencia.width / 2;
    var referenciaPosicaoY = objectReferencia.top - objectReferencia.height / 2;

    // Gets the measurements of the objects to be aligned
    var larguraObjetoAlinhar = objectAlinhar.width;
    var alturaObjetoAlinhar = objectAlinhar.height;

    objectAlinhar.left = referenciaPosicaoX - larguraObjetoAlinhar / 2;
    objectAlinhar.top = referenciaPosicaoY + (alturaObjetoAlinhar - alturaObjetoAlinhar);

    app.redraw();
  }

  function moveObject(value) {
    var object = app.selection[1];
    var valueCM = value * cm;

    object.top += valueCM;

    app.redraw();
  }

  function deleteObject() {
    var object = app.selection[0];

    object.remove();
    alert("AVISO!!!\n Se for camiseta POLO deixar pelo menos 1cm afastado do pique!");
  }
} else {
  alert("Selecione um object para movê-lo para baixo!");
}
