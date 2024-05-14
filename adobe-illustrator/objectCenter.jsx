/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://heroleam.github.io/portfolio
*/

// Script: Centers the element from top to bottom

if (app.selection.length > 1) {
    // Object up
    var alignObject = app.selection[0]
    // Objeto down
    var referenceObject = app.selection[1]

    // Gets the position of the reference object
    var objectPositionX = referenceObject.left + referenceObject.width / 2
    var objectPositionY = referenceObject.top - referenceObject.height / 2

    // Gets measurements of the object to be aligned
    var larguraalignObject = alignObject.width
    var alturaalignObject = alignObject.height

    alignObject.left = objectPositionX - larguraalignObject / 2
    alignObject.top = objectPositionY + alturaalignObject / 2

    app.redraw()
} else {
    alert("Selecione o objeto guia e o objeto a qual quer centralizar")
}