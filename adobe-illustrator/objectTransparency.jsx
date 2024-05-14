/*
Author: Thiago Leoni Amaral
Copyright © 2024
https://heroleam.github.io/portfolio
*/

// Script: Changes the transparency of the selected element

if (app.selection.length > 0) {
    var transparency = parseFloat(prompt('Digite o valor da transparência:'));

    if (transparency >= 0 && transparency <= 100) {
        for (var i = 0; i < app.selection.length; i++) {
            app.selection[i].opacity = transparency;
        }
    } else {
        alert('Por favor, insira um valor entre 0 e 100.');
    }
} else {
    alert('Nenhum objeto selecionado. Por favor, selecione um objeto e tente novamente.');
}