/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/herofield
*/

// Script: Finds appliqué for pocket style template

// ----------------------------------------------------------------------------------- //

var cm = 28.3465;

if (app.selection.length > 1) {
  var painel = new Window("dialog", "Painel de Tamanhos");

  var button1 = painel.add("button", undefined, "PB - MB");
  button1.onClick = function () {
    alignObjects();
    moveObject(-9);
    deleteObject();
    painel.close();
  };

  var button2 = painel.add("button", undefined, "GB - 1");
  button2.onClick = function () {
    alignObjects();
    moveObject(-10);
    deleteObject();
    painel.close();
  };

  var button3 = painel.add("button", undefined, "2");
  button3.onClick = function () {
    alignObjects();
    moveObject(-11);
    deleteObject();
    painel.close();
  };

  var button4 = painel.add("button", undefined, "3");
  button4.onClick = function () {
    alignObjects();
    moveObject(-12);
    deleteObject();
    painel.close();
  };

  var button5 = painel.add("button", undefined, "4");
  button5.onClick = function () {
    alignObjects();
    moveObject(-13);
    deleteObject();
    painel.close();
  };

  var button6 = painel.add("button", undefined, "6");
  button6.onClick = function () {
    alignObjects();
    moveObject(-14);
    deleteObject();
    painel.close();
  };

  var button7 = painel.add("button", undefined, "8");
  button7.onClick = function () {
    alignObjects();
    moveObject(-15);
    deleteObject();
    painel.close();
  };

  var button8 = painel.add("button", undefined, "10");
  button8.onClick = function () {
    alignObjects();
    moveObject(-16);
    deleteObject();
    painel.close();
  };

  var button9 = painel.add("button", undefined, "12");
  button9.onClick = function () {
    alignObjects();
    moveObject(-17);
    deleteObject();
    painel.close();
  };

  var button10 = painel.add("button", undefined, "14");
  button10.onClick = function () {
    alignObjects();
    moveObject(-18);
    deleteObject();
    painel.close();
  };

  var button11 = painel.add("button", undefined, "16");
  button11.onClick = function () {
    alignObjects();
    moveObject(-19);
    deleteObject();
    painel.close();
  };

  var button12 = painel.add("button", undefined, "18");
  button12.onClick = function () {
    alignObjects();
    moveObject(-20);
    deleteObject();
    painel.close();
  };

  var button13 = painel.add("button", undefined, "20");
  button13.onClick = function () {
    alignObjects();
    moveObject(-21);
    deleteObject();
    painel.close();
  };

  painel.show();

  // Function to align objects
  function alignObjects() {
    var objectAlign = app.selection[1];
    var objectReference = app.selection[0];
    var referencePositionX = objectReference.left + objectReference.width / 2;
    var referencePositionY = objectReference.top - objectReference.height / 2;
    var widthObjectAlign = objectAlign.width;
    var heightObjectAlign = objectAlign.height;

    objectAlign.left = referencePositionX - widthObjectAlign / 2;
    objectAlign.top = referencePositionY + (heightObjectAlign - heightObjectAlign);

    app.redraw();
  }

  // Function to move the object down
  function moveObject(distance) {
    var object = app.selection[1];
    var distanceCM = distance * cm;

    object.top += distanceCM;

    app.redraw();
  }

  // Function to delete the object
  function deleteObject() {
    var object = app.selection[0];

    object.remove();
    alert(
      "AVISO!!!\n Se for camiseta POLO deixar pelo menos 1cm afastado do pique!"
    );
  }


} else {
  alert("Selecione um object para movê-lo para baixo!");
}