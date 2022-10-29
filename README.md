<div align="center">
    <img src="img/capa.png">
</div>
<br>
<p align="center">
  <img src="https://img.shields.io/static/v1?label=JavaScript&message=Language&color=yellow&style=for-the-badge&logo=JAVASCRIPT"/>
  <img src="https://img.shields.io/static/v1?label=Netlify&message=deploy&color=blue&style=for-the-badge&logo=netlify"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/gknpp23/the_snake_game?style=for-the-badge&logo=GITHUB">
  <img alt="W3C Validation" src="https://img.shields.io/w3c-validation/html?style=for-the-badge&targetUrl=https%3A%2F%2Fabout.validator.nu%2F&logo=W3C">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
 
</p>

<h3>Tópicos</h3> 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

<hr>

## Descrição do projeto 

<p align="justify">
  O clássico jogo da cobrinha ! 
  Só que feito em JS
  :snake:
  :video_game:  
</p>

<hr>

## Funcionalidades

:heavy_check_mark: Garantir diversão

:heavy_check_mark: Causar nostalgia

<hr>

## Deploy 
Layout/Deploy da Aplicação :zap:

> Link do deploy da aplicação: https://snakearcadegame.netlify.app/

<hr>

## Pré-requisitos 

:earth_americas: [Navegador WEB](https://www.google.com/intl/pt-BR/chrome/)

<hr>

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/gknpp23/the_snake_game/
```
<hr> 

## Casos de Uso

Explique com mais detalhes como a sua aplicação poderia ser utilizada. O uso de **gifs** aqui seria bem interessante. 

Exemplo: Caso a sua aplicação tenha alguma funcionalidade de login apresente neste tópico os dados necessários para acessá-la.

## Resolvendo Problemas :exclamation:

### Erro
Quando o personagem atravessava de um lado para o outro, era possivel desloca-lo no eixo oposto fazendo com que ele fosse reposicionado em locais inesperados.
<br>
<i>Ex:</i> Ao se atravessar do lado direito para o lado esquerdo, se fosse pressionado as teclas cima/baixo o personagem poderia sair no lado superior/inferior.

### Solução
Adicionei uma verificação na função responsável pela leitura das teclas. A cada vez que uma tecla era pressionada era feita uma verificação se o personagem não se encontrada na borda do eixo oposto 

## Tarefas em aberto

:memo: Possibilidade de zerar o high_score.

<hr>

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2022 - The Snake Game

<hr>

<h2 align="center"> Desenvolvido com :hearts: por Gabriel Knupp</h2>
