let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "up";

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

function start_game() {
    create_bg();
    create_snake();

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
    snake.pop();

    let new_head = {
        x: snake_x,
        y: snake_y
    }

    snake.unshift(new_head);


}

let game = setInterval(start_game,100);