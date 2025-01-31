/*
Author: Thiago Leoni Amaral
Copyright © 2025
https://heroleam.github.io/portfolio
*/

// Check if there is an open document
if (app.documents.length === 0) {
    app.documents.add();
}

var doc = app.activeDocument;
var newLayer;

// Check if the layer "Tabela de Cores" exists
for (var i = 0; i < doc.layers.length; i++) {
    if (doc.layers[i].name === "Tabela de Cores") {
        newLayer = doc.layers[i];
        break;
    }
}

// If the layer does not exist, create it
if (!newLayer) {
    newLayer = doc.layers.add();
    newLayer.name = "Tabela de Cores";
    var lightBlueColor = new RGBColor();
    lightBlueColor.red = 79;
    lightBlueColor.green = 128;
    lightBlueColor.blue = 255;
    newLayer.color = lightBlueColor;
}

var cm = 28.35;

// Function to create a rectangle
function criarRetangulo(x, y, largura, altura, corRGB) {
    var retangulo = doc.pathItems.rectangle(y, x, largura, altura);
    retangulo.filled = true;
    retangulo.fillColor = corRGB;
    retangulo.stroked = false;
    return retangulo;
}

// Function to create a text
function criarTexto(conteudo, x, y, tamanhoFonte, alinhamento) {
    var texto = doc.textFrames.add();
    texto.contents = conteudo;
    texto.top = y;
    texto.left = x;
    texto.textRange.size = tamanhoFonte;
    texto.textRange.justification = alinhamento;
    return texto;
}

// Colors for rectangles
function criarCorRGB(r, g, b) {
    var cor = new RGBColor();
    cor.red = r;
    cor.green = g;
    cor.blue = b;
    return cor;
}

// Creation of the main square
var larguraPrincipal = 15 * cm;
var alturaPrincipal = 16 * cm;
var margemX = 100;
var margemY = 700;

// Groups all elements
var grupoPrincipal = newLayer.groupItems.add();
grupoPrincipal.name = "Tabela de Cores";

var retanguloPrincipal = criarRetangulo(margemX, margemY, larguraPrincipal, alturaPrincipal, criarCorRGB(255, 255, 255));
retanguloPrincipal.move(grupoPrincipal, ElementPlacement.PLACEATEND);

// Internal coordinates
var margemInternaX = margemX + 10;
var margemInternaY = margemY + 10;
var larguraColoracao = larguraPrincipal - 20;
var alturaLinha = 1.5 * cm;
var espacamento = 5;

// Creating numbered lines
var cores = [
    criarCorRGB(255, 255, 255),
    criarCorRGB(255, 255, 255),
    criarCorRGB(255, 255, 255),
    criarCorRGB(255, 255, 255),
    criarCorRGB(255, 255, 255),
    criarCorRGB(255, 255, 255),
    criarCorRGB(255, 255, 255),
    criarCorRGB(255, 255, 255),
];

for (var i = 0; i < 8; i++) {
    var posY = margemInternaY - (i + 1) * (alturaLinha + espacamento);
    var texto = criarTexto((i + 1) + ":", margemInternaX, posY - alturaLinha / 2 + -3, 40, Justification.LEFT);
    var retangulo = criarRetangulo(margemInternaX + 30, posY, larguraColoracao - 30, alturaLinha, cores[i]);
    texto.move(grupoPrincipal, ElementPlacement.PLACEATEND);
    retangulo.move(grupoPrincipal, ElementPlacement.PLACEATEND);
    retanguloPrincipal.move(grupoPrincipal, ElementPlacement.PLACEATEND);
}

// Get the active clipboard
var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];
var artboardBounds = artboard.artboardRect;

// Get the artboard bounds
var artboardLeft = artboardBounds[0];
var artboardBottom = artboardBounds[3];

// Get the group bounds
var groupBounds = grupoPrincipal.visibleBounds;
var groupHeight = groupBounds[1] - groupBounds[3];

// Sets the new position to the bottom left corner
grupoPrincipal.position = [artboardLeft, artboardBottom + groupHeight];
