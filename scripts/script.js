let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let cscore = document.getElementById('cscore');
let hscore = document.getElementById('hscore');
let audio = new Audio('audio/eat_food.mp3');


let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "none";
let food = {
    x:Math.floor(Math.random() * 15 + 1) * box,
    y:Math.floor(Math.random() * 15 + 1) * box
}
//let high_score = 0;
let score = snake.length;
let high_score_saved = 0;

function create_bg() {
    context.fillStyle = "#242323";
    context.fillRect(0, 0, 16*box, 16*box);
}

function create_snake() {
    for(i=0; i < snake.length; i++){
        if(i == 0 ){
            context.fillStyle = "#00EB00";
            context.fillRect(snake[i].x, snake[i].y, box, box);
        }else{
            context.fillStyle = "#00b100";
            context.fillRect(snake[i].x, snake[i].y, box, box);
        }
        
    }
}
function create_fruit() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//marcando pontos
function scored() {
    cscore.innerHTML = (snake.length);
}
// LOCAL STORAGE
function read_LocalStorage() {
    //tratamento de erro
    if (!window.localStorage) {
      return;
    }
    //obtendo valor salvo e adicionado no site
    high_score_saved = window.localStorage.getItem('high-score');
    if (high_score_saved) {
        hscore.innerHTML = high_score_saved;
    }
  
}
function write_to_Localstorage() {
    window.localStorage.setItem('high-score', high_score_saved);
}
// function de limpar local storage

document.addEventListener('keydown', update);

function update(event) {
    //verificar erro de teclas pressionadas juntas (up + left) e vice versa
    // eixo X
    // move right
    if(event.keyCode == 39 && direction != 'left'){
        // evitando conflito na transferencia do eixo y
        if(snake[0].y > 15 * box && direction == "down") return;
        if(snake[0].y < 0 && direction == "up") return;

        direction = 'right';
    }
    // move to left
    if(event.keyCode == 37 && direction != 'right'){ 
        if(snake[0].y > 15 * box && direction == "down") return;
        if(snake[0].y < 0 && direction == "up") return;

        direction = 'left';
    }
    
    // eixo Y
    //move to up
    if(event.keyCode == 38 && direction != 'down') {
        // evitando conflito na transferencia do eixo x
        if (snake[0].x > 15 * box && direction == "right") return;
        if(snake[0].x < 0 && direction =="left") return;
    
        direction = 'up';
    }
    // move to down
    if(event.keyCode == 40 && direction != 'up') {
        if (snake[0].x > 15 * box && direction == "right") return;
        if(snake[0].x < 0 && direction =="left") return;

        direction = 'down';
    }
}

// leitura do local de armazenamento
read_LocalStorage(); 

function start_game() {
    
    // Lógica da transferencia do personagem(plano cartesiano)

    //Eixo X
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction =="left") snake[0].x = 16 * box;

    //Eixo Y
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    // Verificação de choque entre cabeça e corpo do personagem (fim de jogo)
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert("Game Over");
            window.location.reload();   
        }
        
    }

    create_bg();
    create_snake();
    create_fruit();
    
    // alocando valor para acrescimo/decrescimo
    let snake_x = snake[0].x;
    let snake_y = snake[0].y;

    // escolha de direção
    switch(direction){
        case "right":
            snake_x += box;
            break;
        case "left":
            snake_x -= box;
            break;
        case "up":
            snake_y -= box;
            break;
        case "down":
            snake_y += box;
            break;
    }

    // criando base de movimento (remover e adicionar)
    if(snake_x != food.x || snake_y != food.y){
        snake.pop();
    }
    else {
        audio.play(); //som
        scored();       // pontuação
        // comparação de score
        if(snake.length > high_score_saved) {
            high_score_saved = snake.length;
            hscore.innerHTML = high_score_saved;
            write_to_Localstorage();
        }
        //reposicionamento da fruta
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }
    

    let new_head = {
        x: snake_x,
        y: snake_y
    }

    //adiciona na primeira posição
    snake.unshift(new_head);


}

let game = setInterval(start_game,100);

