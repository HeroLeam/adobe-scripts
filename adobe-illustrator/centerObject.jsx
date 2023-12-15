/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Centraliza o elemento de cima ao de baixo

// ----------------------------------------------------------------------------------- //

// Verifica se dois objetos estão selecionados
if (app.selection.length > 1) {
    // Objeto selecionado por cima
    var objetoAlinhar = app.selection[0]
    // Objeto selecionado por baixo
    var objetoReferencia = app.selection[1]

    // Obtém a posição x do objeto de referência
    var referenciaPosicaoX = objetoReferencia.left + objetoReferencia.width / 2

    // Obtém a posição y do objeto de referência
    var referenciaPosicaoY = objetoReferencia.top - objetoReferencia.height / 2

    // Obtém a largura do objeto a ser alinhado
    var larguraObjetoAlinhar = objetoAlinhar.width

    // Obtém a altura do objeto a ser alinhado
    var alturaObjetoAlinhar = objetoAlinhar.height

    // Define a posição x e y do objeto a ser alinhado com base nas posições x e y do objeto de referência e nas dimensões do objeto a ser alinhado
    objetoAlinhar.left = referenciaPosicaoX - larguraObjetoAlinhar / 2
    objetoAlinhar.top = referenciaPosicaoY + alturaObjetoAlinhar / 2

    // Atualiza a tela para refletir o alinhamento
    app.redraw()
} else {
    alert("Selecione o objeto guia e o objeto a qual quer centralizar")
}
