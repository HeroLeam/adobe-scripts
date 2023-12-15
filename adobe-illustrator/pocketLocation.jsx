/*
Author: Thiago Leoni Amaral
Copyright © 2023
https://linktr.ee/heroleam
*/

// Script: Localiza aplique para gabarito estilo bolso

// ----------------------------------------------------------------------------------- //

// Verifica se dois objetos estão selecionados
if (app.selection.length > 1) {
  // Criação do painel de escolha
  var painel = new Window("dialog", "Painel de Escolha");

  // Botão 1
  var botao1 = painel.add("button", undefined, "PB - MB - GB");
  botao1.onClick = function () {
    alinharObjetos();
    moverObjeto(-9.5);
    excluirObjeto();
    painel.close();
  };

  // Botão 2
  var botao2 = painel.add("button", undefined, "1 - 2 - 3");
  botao2.onClick = function () {
    alinharObjetos();
    moverObjeto(-11.5);
    excluirObjeto();
    painel.close();
  };

  // Botão 3
  var botao3 = painel.add("button", undefined, "4 - 6 - 8");
  botao3.onClick = function () {
    alinharObjetos();
    moverObjeto(-13);
    excluirObjeto();
    painel.close();
  };

  // Botão 4
  var botao4 = painel.add("button", undefined, "10 - 12 - 14");
  botao4.onClick = function () {
    alinharObjetos();
    moverObjeto(-15.5);
    excluirObjeto();
    painel.close();
  };

  // Mostra o painel
  painel.show();

  // Função para alinhar objetos
  function alinharObjetos() {
    // Objeto selecionado por baixo
    var objetoAlinhar = app.selection[1];
    // Objeto selecionado por cima
    var objetoReferencia = app.selection[0];

    // Obtém a posição x do objeto de referência
    var referenciaPosicaoX = objetoReferencia.left + objetoReferencia.width / 2;

    // Obtém a posição y do objeto de referência
    var referenciaPosicaoY = objetoReferencia.top - objetoReferencia.height / 2;

    // Obtém a largura do objeto a ser alinhado
    var larguraObjetoAlinhar = objetoAlinhar.width;

    // Obtém a altura do objeto a ser alinhado
    var alturaObjetoAlinhar = objetoAlinhar.height;

    // Define a posição x e y do objeto a ser alinhado com base nas posições x e y do objeto de referência e nas dimensões do objeto a ser alinhado
    objetoAlinhar.left = referenciaPosicaoX - larguraObjetoAlinhar / 2;
    objetoAlinhar.top =
      referenciaPosicaoY + (alturaObjetoAlinhar - alturaObjetoAlinhar);

    // Atualiza a tela para refletir o alinhamento
    app.redraw();
  }

  // Função para mover o objeto para baixo
  function moverObjeto(distancia) {
    // Objeto a ser movido
    var objeto = app.selection[1];

    // Converte a distância de centímetros para pontos
    var distanciaPontos = distancia * 28.3465;

    // Move o objeto para baixo
    objeto.top += distanciaPontos;

    // Atualiza a tela para refletir o movimento
    app.redraw();
  }

  // Função para excluir o objeto
  function excluirObjeto() {
    // Objeto a ser excluído
    var objeto = app.selection[0];

    // Exclui o objeto
    objeto.remove();
    alert(
      "AVISO!!!\n Se for camiseta POLO deixar pelo menos 1cm afastado do pique!"
    );
  }
} else {
  alert("Selecione um objeto para movê-lo para baixo!");
}
