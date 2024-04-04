/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Centers the element from top to bottom

if (app.selection.length > 1) {
    // Object up
    var objetoAlinhar = app.selection[0]
    // Objeto down
    var objetoReferencia = app.selection[1]

    // Gets the position of the reference object
    var referenciaPosicaoX = objetoReferencia.left + objetoReferencia.width / 2
    var referenciaPosicaoY = objetoReferencia.top - objetoReferencia.height / 2

    // Gets measurements of the object to be aligned
    var larguraObjetoAlinhar = objetoAlinhar.width
    var alturaObjetoAlinhar = objetoAlinhar.height

    objetoAlinhar.left = referenciaPosicaoX - larguraObjetoAlinhar / 2
    objetoAlinhar.top = referenciaPosicaoY + alturaObjetoAlinhar / 2

    app.redraw()
} else {
    alert("Selecione o objeto guia e o objeto a qual quer centralizar")
}
