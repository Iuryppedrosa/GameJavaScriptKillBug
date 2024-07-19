# 🦟 Projeto Mata Mosquito 🦟

## 🌐 Acesse o Jogo Online! 🎮

Quer experimentar o **Mata Mosquito**? Clique no link abaixo para jogar online e ver quantos mosquitos você consegue matar! 🚀🦟

👉 [**Jogar Mata Mosquito**](https://killbugsiury.netlify.app) 👈

Bem-vindo ao **Mata Mosquito**, um projeto de estudo super divertido usando JavaScript puro! 🎮💻

## 📋 Descrição do Projeto

Este projeto é um joguinho simples onde os mosquitos aparecem aleatoriamente na tela e o objetivo é matá-los ao clicar neles! Vamos ver como tudo funciona.

## 🛠️ Estrutura do Projeto

### HTML

Nosso arquivo HTML define a estrutura básica do jogo. Aqui está um resumo do que ele contém:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./estilo.css" />
    <script src="./jogo.js"></script>
    <title>Mata Mosquito</title>
  </head>
  <body onresize="ajustaTamanhoPalcoJogo()">
    <div class="painel">
      <div class="vidas">
        <img src="./imagens/coracao_cheio.png" id="v1" />
        <img src="./imagens/coracao_cheio.png" id="v2" />
        <img src="./imagens/coracao_cheio.png" id="v3" />
      </div>
      <div class="cronometro">Tempo Restante:<span id="cronometro"></span></div>
    </div>
    <script>
      document.getElementById("cronometro").innerHTML = tempo;
      var criarMosca = setInterval(function () {
        posicaoRandomica();
      }, criaMosquitoTempo);
    </script>
  </body>
</html>
```

### CSS

O arquivo `estilo.css` é responsável por todo o estilo do jogo, incluindo a aparência dos mosquitos e o layout do painel de vidas e cronômetro.

### JavaScript

O coração do jogo está no arquivo `jogo.js`, onde toda a lógica para criar mosquitos aleatórios e tratá-los ao serem clicados é implementada.

## 🕹️ Funcionamento do Jogo

1. **Painel de Vidas e Cronômetro**:
   - No topo da tela, temos um painel mostrando quantas vidas você ainda tem, representadas por corações, e um cronômetro que conta o tempo restante do jogo.

2. **Gerar Mosquitos**:
   - Os mosquitos são gerados aleatoriamente na tela a intervalos regulares, definidos pelo `setInterval`.

3. **Matar Mosquitos**:
   - O jogador precisa clicar nos mosquitos para matá-los. Cada clique bem-sucedido remove o mosquito da tela.

4. **Ajustar Tamanho do Jogo**:
   - O jogo ajusta automaticamente o tamanho da área jogável quando a janela do navegador é redimensionada.

## 🌟 Recursos Futuros

Aqui estão algumas ideias para expandir o jogo:

- 🧪 **Níveis de Dificuldade**: Diferentes velocidades e tamanhos de mosquitos para desafiar ainda mais!
- 🎵 **Efeitos Sonoros**: Adicionar sons de "splat" ao matar os mosquitos.
- 📈 **Placar**: Manter um registro dos melhores tempos e pontuações.

## 🚀 Conclusão

O projeto **Mata Mosquito** é uma maneira divertida de aprender e praticar JavaScript puro, manipulando o DOM e trabalhando com eventos. Divirta-se jogando e programando! 😄🦟💥
