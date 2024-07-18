var alturaDaPagina = 0;
var larguraDaPagina = 0;
var vidas = 1;
var tempo = 30;
var criaMosquitoTempo = 1500;

var nivelAqui = window.location.search; //retorna a query string da URL com tudo que vem depois do ?
nivelAqui = nivelAqui.replace("?", ""); //substitui o ? por nada

if (nivelAqui === "Fácil") {
  criaMosquitoTempo = 1500;
} else if (nivelAqui === "Normal") {
  criaMosquitoTempo = 1000;
} else if (nivelAqui === "Difícil") {
  criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo() {
  alturaDaPagina = window.innerHeight;
  larguraDaPagina = window.innerWidth;
}
ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criarMosca);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

function posicaoRandomica() {
  if (!document.getElementById("mosquito")) {
    var posicaoX = Math.floor(Math.random() * alturaDaPagina) - 200;
    var posicaoY = Math.floor(Math.random() * larguraDaPagina) - 100;

    var mosquito = document.createElement("img");

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    mosquito.src = "./imagens/mosca.png";
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();

    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = "absolute";
    mosquito.id = "mosquito";

    mosquito.onclick = function () {
      this.remove();
    };
  } else {
    document.getElementById("mosquito").remove();
    document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";

    if (vidas < 3) {
      vidas++;
    } else {
      window.location.href = "fim_de_jogo.html";
    }
  }
  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);
  switch (classe) {
    case 0:
      return "mosca1";
    case 1:
      return "mosca2";
    case 2:
      return "mosca3";
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);
  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
