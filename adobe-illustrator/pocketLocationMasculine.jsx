/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Pocket style template location

// ----------------------------------------------------------------------------------- //

var cm = 28.35;

// Checks if two objects are selected
if (app.selection.length > 1) {
  var menuPanel = new Window("dialog", "Localização", undefined, { resizeable: true });
  menuPanel.orientation = "column";
  menuPanel.preferredSize.width = 300;

  // Add a group to the description
  var descriptionGroup = menuPanel.add("group");
  descriptionGroup.orientation = "column";
  descriptionGroup.alignChildren = ["center", "top"]; // Align the group content to the center

  // Add a description with line breaks
  var descriptionText = "AVISO!!!\nSe for camiseta POLO deixar pelo menos 1cm afastado do pique!";
  var description = descriptionGroup.add("statictext", undefined, descriptionText, { multiline: true });

  // Button to open the Type 1 submenu
  var buttonSubMenuNormal = menuPanel.add("button", undefined, "Localização Normal");
  buttonSubMenuNormal.onClick = function () {
    openSubMenuNormal();
  };

  // Button to open the Type 2 submenu
  var buttonSubMenuRaglan = menuPanel.add("button", undefined, "Localização Raglan");
  buttonSubMenuRaglan.onClick = function () {
    openSubMenuRaglan();
  };

  menuPanel.add("button", undefined, "Cancelar").onClick = function () {
    menuPanel.close();
  };

  menuPanel.show();

  // Function to open the Type 1 submenu
  function openSubMenuNormal() {
    var subMenuNormal = new Window("dialog", "Medidas Normais", undefined, { resizeable: true });
    subMenuNormal.orientation = "column";
    subMenuNormal.preferredSize.width = 300;
    subMenuNormal.alignChildren = "fill";

    var button01 = subMenuNormal.add("button", undefined, "RN");
    button01.onClick = function () {
      alignObjects();
      moveObjects(-8);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button02 = subMenuNormal.add("button", undefined, "PB - MB");
    button02.onClick = function () {
      alignObjects();
      moveObjects(-9);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button03 = subMenuNormal.add("button", undefined, "GB - 1");
    button03.onClick = function () {
      alignObjects();
      moveObjects(-10);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button04 = subMenuNormal.add("button", undefined, "2");
    button04.onClick = function () {
      alignObjects();
      moveObjects(-11);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button05 = subMenuNormal.add("button", undefined, "3");
    button05.onClick = function () {
      alignObjects();
      moveObjects(-12);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button06 = subMenuNormal.add("button", undefined, "4");
    button06.onClick = function () {
      alignObjects();
      moveObjects(-13);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button07 = subMenuNormal.add("button", undefined, "6");
    button07.onClick = function () {
      alignObjects();
      moveObjects(-14);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button08 = subMenuNormal.add("button", undefined, "8");
    button08.onClick = function () {
      alignObjects();
      moveObjects(-15);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button09 = subMenuNormal.add("button", undefined, "10");
    button09.onClick = function () {
      alignObjects();
      moveObjects(-16);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button10 = subMenuNormal.add("button", undefined, "12");
    button10.onClick = function () {
      alignObjects();
      moveObjects(-17);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button11 = subMenuNormal.add("button", undefined, "14");
    button11.onClick = function () {
      alignObjects();
      moveObjects(-18);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button12 = subMenuNormal.add("button", undefined, "16");
    button12.onClick = function () {
      alignObjects();
      moveObjects(-19);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button13 = subMenuNormal.add("button", undefined, "18 - P");
    button13.onClick = function () {
      alignObjects();
      moveObjects(-20);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button14 = subMenuNormal.add("button", undefined, "20 - M");
    button14.onClick = function () {
      alignObjects();
      moveObjects(-21);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button15 = subMenuNormal.add("button", undefined, "G");
    button15.onClick = function () {
      alignObjects();
      moveObjects(-22);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button16 = subMenuNormal.add("button", undefined, "GG");
    button16.onClick = function () {
      alignObjects();
      moveObjects(-23);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button17 = subMenuNormal.add("button", undefined, "XGG");
    button17.onClick = function () {
      alignObjects();
      moveObjects(-24);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    var button18 = subMenuNormal.add("button", undefined, "XXGG");
    button18.onClick = function () {
      alignObjects();
      moveObjects(-25);
      deleteObject();
      subMenuNormal.close();
      menuPanel.close();
    };

    subMenuNormal.add("button", undefined, "Voltar").onClick = function () {
      subMenuNormal.close();
    };

    subMenuNormal.show();
  }

  // Function to open the Type 2 submenu
  function openSubMenuRaglan() {
    var subMenuRaglan = new Window("dialog", "Medidas Raglan", undefined, { resizeable: true });
    subMenuRaglan.orientation = "column";
    subMenuRaglan.preferredSize.width = 300;
    subMenuRaglan.alignChildren = "fill";

    var button01 = subMenuRaglan.add("button", undefined, "RN");
    button01.onClick = function () {
      alignObjects();
      moveObjects(-8);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button02 = subMenuRaglan.add("button", undefined, "PB - MB");
    button02.onClick = function () {
      alignObjects();
      moveObjects(-9);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button03 = subMenuRaglan.add("button", undefined, "GB - 1");
    button03.onClick = function () {
      alignObjects();
      moveObjects(-10);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button04 = subMenuRaglan.add("button", undefined, "2");
    button04.onClick = function () {
      alignObjects();
      moveObjects(-11);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button05 = subMenuRaglan.add("button", undefined, "3");
    button05.onClick = function () {
      alignObjects();
      moveObjects(-12);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button06 = subMenuRaglan.add("button", undefined, "4");
    button06.onClick = function () {
      alignObjects();
      moveObjects(-13);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button07 = subMenuRaglan.add("button", undefined, "6");
    button07.onClick = function () {
      alignObjects();
      moveObjects(-14);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button08 = subMenuRaglan.add("button", undefined, "8");
    button08.onClick = function () {
      alignObjects();
      moveObjects(-15);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button09 = subMenuRaglan.add("button", undefined, "10");
    button09.onClick = function () {
      alignObjects();
      moveObjects(-16);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button10 = subMenuRaglan.add("button", undefined, "12");
    button10.onClick = function () {
      alignObjects();
      moveObjects(-17);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button11 = subMenuRaglan.add("button", undefined, "14");
    button11.onClick = function () {
      alignObjects();
      moveObjects(-18);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button12 = subMenuRaglan.add("button", undefined, "16");
    button12.onClick = function () {
      alignObjects();
      moveObjects(-19);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button13 = subMenuRaglan.add("button", undefined, "18 - P");
    button13.onClick = function () {
      alignObjects();
      moveObjects(-20);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button14 = subMenuRaglan.add("button", undefined, "20 - M");
    button14.onClick = function () {
      alignObjects();
      moveObjects(-21);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button15 = subMenuRaglan.add("button", undefined, "G");
    button15.onClick = function () {
      alignObjects();
      moveObjects(-22);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button16 = subMenuRaglan.add("button", undefined, "GG");
    button16.onClick = function () {
      alignObjects();
      moveObjects(-23);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button17 = subMenuRaglan.add("button", undefined, "XGG");
    button17.onClick = function () {
      alignObjects();
      moveObjects(-24);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    var button18 = subMenuRaglan.add("button", undefined, "XXGG");
    button18.onClick = function () {
      alignObjects();
      moveObjects(-25);
      deleteObject();
      subMenuRaglan.close();
      menuPanel.close();
    };

    subMenuRaglan.add("button", undefined, "Voltar").onClick = function () {
      subMenuRaglan.close();
    };

    subMenuRaglan.show();
  }

  // Function to align objects
  function alignObjects() {
    // Object selected below
    var objetoAlinhar = app.selection[1];
    // Object selected from above
    var objetoReferencia = app.selection[0];

    // Gets the position of the reference object
    var referenciaPosicaoX = objetoReferencia.left + objetoReferencia.width / 2;
    var referenciaPosicaoY = objetoReferencia.top - objetoReferencia.height / 2;

    // Gets the width x height of the object to be aligned
    var larguraObjetoAlinhar = objetoAlinhar.width;
    var alturaObjetoAlinhar = objetoAlinhar.height;

    // Sets the x and y position of the object to be aligned based on the x and y positions of the reference object and the dimensions of the object to be aligned
    objetoAlinhar.left = referenciaPosicaoX - larguraObjetoAlinhar / 2;
    objetoAlinhar.top = referenciaPosicaoY + (alturaObjetoAlinhar - alturaObjetoAlinhar);

    app.redraw();
  }

  // Function to move the object down
  function moveObjects(distancia) {
    var objeto = app.selection[1];
    var distanciaPontos = distancia * cm;
    objeto.top += distanciaPontos;
    objeto.left += cm;
    app.redraw();
  }

  // Function to move raglan
  function raglan() {
    var objeto = app.selection[0];
    var moverDireita = cm / 2;
    var moverCima = cm * 4;
    objeto.top += moverCima;
    objeto.left += moverDireita;
  }

  // Function to delete the object
  function deleteObject() {
    var objeto = app.selection[0];
    objeto.remove();
  }

} else {
  alert("Selecione um objeto para localiza-lo!");
}