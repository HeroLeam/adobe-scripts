/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Localiza aplique para gabarito estilo bolso

// ----------------------------------------------------------------------------------- //

var cm = 28.35;

// Verifica se dois objetos estão selecionados
if (app.selection.length > 1) {
  var menuPanel = new Window("dialog", "Localização", undefined, { resizeable: true });
  menuPanel.orientation = "column";
  menuPanel.preferredSize.width = 300;

  // Adiciona um grupo para a descrição
  var descriptionGroup = menuPanel.add("group");
  descriptionGroup.orientation = "column";
  descriptionGroup.alignChildren = ["center", "top"]; // Alinha o conteúdo do grupo ao centro

  // Adiciona uma descrição com quebras de linha
  var descriptionText = "AVISO!!!\nSe for camiseta POLO deixar pelo menos 1cm afastado do pique!";
  var description = descriptionGroup.add("statictext", undefined, descriptionText, { multiline: true });

  // Botão para abrir o submenu Tipo 1
  var buttonSubMenuNormal = menuPanel.add("button", undefined, "Localização Normal");
  buttonSubMenuNormal.onClick = function () {
    openSubMenuNormal();
  };

  // Botão para abrir o submenu Tipo 2
  var buttonSubMenuRaglan = menuPanel.add("button", undefined, "Localização Raglan");
  buttonSubMenuRaglan.onClick = function () {
    openSubMenuRaglan();
  };

  menuPanel.add("button", undefined, "Cancelar").onClick = function () {
    menuPanel.close();
  };

  menuPanel.show();

  // Função para abrir o submenu Tipo 1
  function openSubMenuNormal() {
    var subMenuNormal = new Window("dialog", "Medidas Normais", undefined, { resizeable: true });
    subMenuNormal.orientation = "column";
    subMenuNormal.preferredSize.width = 300;
    subMenuNormal.alignChildren = "fill";

    var buttonOne = subMenuNormal.add("button", undefined, "PB - MB");
    buttonOne.onClick = function () {
      alignObjects();
      moveObjects(-9);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonTwo = subMenuNormal.add("button", undefined, "GB - 1");
    buttonTwo.onClick = function () {
      alignObjects();
      moveObjects(-10);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonThree = subMenuNormal.add("button", undefined, "2");
    buttonThree.onClick = function () {
      alignObjects();
      moveObjects(-11);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonFour = subMenuNormal.add("button", undefined, "3");
    buttonFour.onClick = function () {
      alignObjects();
      moveObjects(-13);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonFive = subMenuNormal.add("button", undefined, "4");
    buttonFive.onClick = function () {
      alignObjects();
      moveObjects(-13);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonSix = subMenuNormal.add("button", undefined, "6");
    buttonSix.onClick = function () {
      alignObjects();
      moveObjects(-14);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonSeven = subMenuNormal.add("button", undefined, "8");
    buttonSeven.onClick = function () {
      alignObjects();
      moveObjects(-15);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonEight = subMenuNormal.add("button", undefined, "10");
    buttonEight.onClick = function () {
      alignObjects();
      moveObjects(-16);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonNine = subMenuNormal.add("button", undefined, "12");
    buttonNine.onClick = function () {
      alignObjects();
      moveObjects(-17);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonTen = subMenuNormal.add("button", undefined, "14");
    buttonTen.onClick = function () {
      alignObjects();
      moveObjects(-18);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonEleven = subMenuNormal.add("button", undefined, "16");
    buttonEleven.onClick = function () {
      alignObjects();
      moveObjects(-19);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonTwelve = subMenuNormal.add("button", undefined, "18");
    buttonTwelve.onClick = function () {
      alignObjects();
      moveObjects(-20);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var buttonThirteen = subMenuNormal.add("button", undefined, "20");
    buttonThirteen.onClick = function () {
      alignObjects();
      moveObjects(-21);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    subMenuNormal.add("button", undefined, "Voltar").onClick = function () {
      subMenuNormal.close();
    };

    subMenuNormal.show();
  }

  // Função para abrir o submenu Tipo 2
  function openSubMenuRaglan() {
    var subMenuRaglan = new Window("dialog", "Medidas Raglan", undefined, { resizeable: true });
    subMenuRaglan.orientation = "column";
    subMenuRaglan.preferredSize.width = 300;
    subMenuRaglan.alignChildren = "fill";

    var buttonOne = subMenuRaglan.add("button", undefined, "PB - MB");
    buttonOne.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-9);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonTwo = subMenuRaglan.add("button", undefined, "GB - 1");
    buttonTwo.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-10);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonThree = subMenuRaglan.add("button", undefined, "2");
    buttonThree.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-11);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonFour = subMenuRaglan.add("button", undefined, "3");
    buttonFour.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-13);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonFive = subMenuRaglan.add("button", undefined, "4");
    buttonFive.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-13);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonSix = subMenuRaglan.add("button", undefined, "6");
    buttonSix.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-14);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonSeven = subMenuRaglan.add("button", undefined, "8");
    buttonSeven.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-15);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonEight = subMenuRaglan.add("button", undefined, "10");
    buttonEight.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-16);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonNine = subMenuRaglan.add("button", undefined, "12");
    buttonNine.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-17);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonTen = subMenuRaglan.add("button", undefined, "14");
    buttonTen.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-18);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonEleven = subMenuRaglan.add("button", undefined, "16");
    buttonEleven.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-19);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonTwelve = subMenuRaglan.add("button", undefined, "18");
    buttonTwelve.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-20);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var buttonThirteen = subMenuRaglan.add("button", undefined, "20");
    buttonThirteen.onClick = function () {
      raglan();
      alignObjects();
      moveObjects(-21);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    subMenuRaglan.add("button", undefined, "Voltar").onClick = function () {
      subMenuRaglan.close();
    };

    subMenuRaglan.show();
  }

  // Função para alinhar objetos
  function alignObjects() {
    // Objeto selecionado por baixo
    var objetoAlinhar = app.selection[1];
    // Objeto selecionado por cima
    var objetoReferencia = app.selection[0];

    // Obtém a posição do objeto de referência
    var referenciaPosicaoX = objetoReferencia.left + objetoReferencia.width / 2;
    var referenciaPosicaoY = objetoReferencia.top - objetoReferencia.height / 2;

    // Obtém a largura x altura do objeto a ser alinhado
    var larguraObjetoAlinhar = objetoAlinhar.width;
    var alturaObjetoAlinhar = objetoAlinhar.height;

    // Define a posição x e y do objeto a ser alinhado com base nas posições x e y do objeto de referência e nas dimensões do objeto a ser alinhado
    objetoAlinhar.left = referenciaPosicaoX - larguraObjetoAlinhar / 2;
    objetoAlinhar.top = referenciaPosicaoY + (alturaObjetoAlinhar - alturaObjetoAlinhar);

    app.redraw();
  }

  // Função para mover o objeto para baixo
  function moveObjects(distancia) {
    var objeto = app.selection[1];
    var distanciaPontos = distancia * cm;
    objeto.top += distanciaPontos;

    app.redraw();
  }

  // Função para mover raglan
  function raglan() {
    var objeto = app.selection[0];
    var moverDireita = cm / 2;
    var moverCima = cm * 4;
    objeto.top += moverCima;
    objeto.left += moverDireita;
  }

  // Função para excluir o objeto
  function deleteObject() {
    var objeto = app.selection[0];
    objeto.remove();
  }

} else {
  alert("Selecione um objeto para localiza-lo!");
}