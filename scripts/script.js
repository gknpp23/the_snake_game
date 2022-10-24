let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
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

function create_bg() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}

function create_snake() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "darkgreen";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
function create_fruit() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}
document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

function start_game() {
    // Lógica da transferencia do personagem(plano cartesiano)
    //Eixo X
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction =="left") snake[0].x = 16 * box;
    //Eixo Y
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

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
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }
    

    let new_head = {
        x: snake_x,
        y: snake_y
    }

    snake.unshift(new_head);


}

let game = setInterval(start_game,100);