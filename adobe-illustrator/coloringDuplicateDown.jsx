/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Duplica o objeto selecinado para direita 1 cm

// ----------------------------------------------------------------------------------- //

var doc = app.activeDocument;
var centimetros = 28.35;

// Verifica se há pelo menos um item selecionado
if (doc.selection.length > 0) {
var selectedItem = doc.selection[0];
var selectedItemHeight = selectedItem.height;

// Duplica o item selecionado
var duplicatedItem = selectedItem.duplicate();

// Move o item duplicado para a direita
duplicatedItem.top = selectedItem.top - selectedItemHeight - centimetros;
doc.selection = null;
duplicatedItem.selected = true;
} else {
alert("Nenhum item selecionado. Selecione um item e tente novamente.");
}
