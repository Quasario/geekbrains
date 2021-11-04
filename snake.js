// Глобальные переменные:                            
var FIELD_SIZE_X = 20;// Количество столбцов
var FIELD_SIZE_Y = 20;// Количество строк
var SNAKE_SPEED = 150; // Интервал между перемещениями змейки (скорость змейки)
var snake = []; // Сама змейка
var barrier = [] // Препятствия
var direction = 'y-'; // Направление движения змейки
var food; // Результат
var foodExist = false; // Результат
var score = 0; // Результат
var assigned = false; // Эта переменная нужна, чтобы направление движения можно было поменять только после перемещения головы

function createField() {
    for (i = 1; i <= FIELD_SIZE_X; i++) {
        var column = document.createElement('ul');
        for (j = 1; j <= FIELD_SIZE_Y; j++) {
            var row = document.createElement('li');
            row.className = 'cell cell-' + i + '-' + j;
            column.appendChild(row);
        }
        document.querySelector('.battlefield').appendChild(column);
    }
}

function createSnake() {
    //змейка начинает движние из центра
    var xCenter = Math.floor(FIELD_SIZE_X / 2);
    var yCenter = Math.floor(FIELD_SIZE_Y / 2);

    var snakeHead = document.querySelector('.cell-' + xCenter + '-' + yCenter);
    var snakeBody = document.querySelector('.cell-' + xCenter + '-' + (yCenter + 1));
    var snakeTail = document.querySelector('.cell-' + xCenter + '-' + (yCenter + 2));
    snakeHead.classList.add('snake');
    snakeBody.classList.add('snake');
    snakeTail.classList.add('snake');

    snake.push(snakeHead, snakeBody, snakeTail);
}

function createFood() {
    while (!foodExist) {
        var xFood = Math.floor(Math.random() * (FIELD_SIZE_X) + 1);
        var yFood = Math.floor(Math.random() * (FIELD_SIZE_Y) + 1);
        food = document.querySelector('.cell-' + xFood + '-' + yFood);
        if (!snake.includes(food) && !barrier.includes(food)) { // чтобы избежать создания еды внутри змейки или препятствия
            food.classList.add('food');
            foodExist = true;
        }
    }
}

function createBarrier() {
    if (barrier.length >= Math.floor(FIELD_SIZE_X * FIELD_SIZE_Y / 20)) { // ограничиваем количество препятствии на карте (5% от поля)
        for (var i = 0; i < barrier.length; i++) {
            barrier[i].classList.remove('barrier');
        }
        barrier.splice(0);
    }
    var xBarrier = Math.floor(Math.random() * (FIELD_SIZE_X) + 1);
    var yBarrier = Math.floor(Math.random() * (FIELD_SIZE_Y) + 1);
    var barrierUnit = document.querySelector('.cell-' + xBarrier + '-' + yBarrier);
    if (!snake.includes(barrierUnit) && barrierUnit != food) { // чтобы избежать создания барьера внутри змейки или еды
        barrierUnit.classList.add('barrier');
        barrier.push(barrierUnit);
    }
}

function snakeMove() {
    var oldHead = snake[0].classList[1].split("-");

    if (direction == "y-") {
        var newHead = document.querySelector('.cell-' + oldHead[1] + '-' + (oldHead[2] - 1));
        if (newHead == undefined) {
            newHead = document.querySelector('.cell-' + oldHead[1] + '-20');
        }
    } else if (direction == "y+") {
        var newHead = document.querySelector('.cell-' + oldHead[1] + '-' + (parseInt(oldHead[2]) + 1));
        if (newHead == undefined) {
            newHead = document.querySelector('.cell-' + oldHead[1] + '-1');
        }
    } else if (direction == "x-") {
        var newHead = document.querySelector('.cell-' + (oldHead[1] - 1) + '-' + oldHead[2]);
        if (newHead == undefined) {
            newHead = document.querySelector('.cell-20-' + oldHead[2]);
        }
    } else if (direction == "x+") {
        var newHead = document.querySelector('.cell-' + (parseInt(oldHead[1]) + 1) + '-' + oldHead[2]);
        if (newHead == undefined) {
            newHead = document.querySelector('.cell-1-' + oldHead[2]);
        }
    }
    assigned = true;

    if (snake.includes(newHead) | barrier.includes(newHead)) {
        alert('Игра окончена\nВаш счет: ' + score);
        location.reload();
    }

    if (newHead == food) {
        score++;
        document.querySelector('.score').innerText = 'Score: ' + score;
        foodExist = false;
        food.classList.remove('food');
        newHead.classList.add('snake');
        snake.unshift(newHead);
        wave(food);
    } else {
        snake[snake.length - 1].classList.remove('snake'); //удаляем хвост
        snake.splice(snake.length - 1, 1);
        newHead.classList.add('snake');
        snake.unshift(newHead);
    }
}


function changeDirection(key) {
    if (assigned) {
        assigned = false;
        switch (key.keyCode) {
            case 37: // Клавиша влево
                if (direction != 'x+') {
                    direction = 'x-'
                }
                break;
            case 38: // Клавиша вверх
                if (direction != 'y+') {
                    direction = 'y-'
                }
                break;
            case 39: // Клавиша вправо
                if (direction != 'x-') {
                    direction = 'x+'
                }
                break;
            case 40: // Клавиша вниз
                if (direction != 'y-') {
                    direction = 'y+'
                }
                break;
        }
    }
}

function gameRunning() {
    ++click
    if (click == 1) {
        button.innerText = 'Stop';
        button.classList.add('red-button');
    } else {
        alert('Игра окончена\nВаш счет: ' + score);
        location.reload();
    }
    setInterval(createFood, 3000);
    addEventListener('keydown', changeDirection);
    setInterval(snakeMove, SNAKE_SPEED);
    setInterval(createBarrier, 5000);
}

function wave(obj) { // создаем эффект от исчезновения еды
    var list = obj.classList[1].split("-");
    var mass = [];
    for (let j = -1; j <= 1; j++) {
        upMini = document.querySelector('.cell-' + (parseInt(list[1]) + j) + '-' + (parseInt(list[2]) - 1)); // клетки располагающиеся сверху от еды
        downMini = document.querySelector('.cell-' + (parseInt(list[1]) + j) + '-' + (parseInt(list[2]) + 1)); // клетки располагающиеся снизу от еды
        leftMini = document.querySelector('.cell-' + (parseInt(list[1]) - 1) + '-' + (parseInt(list[2]) + j)); // клетки располагающиеся слева от еды
        rightMini = document.querySelector('.cell-' + (parseInt(list[1]) + 1) + '-' + (parseInt(list[2]) + j)); // клетки располагающиеся справа от еды
        if (upMini != undefined) {
            upMini.classList.add('up');
            mass.push(upMini);
        }
        if (downMini != undefined) {
            downMini.classList.add('down');
            mass.push(downMini);
        }
        if (leftMini != undefined) {
            leftMini.classList.add('left');
            mass.push(leftMini);
        }
        if (rightMini != undefined) {
            rightMini.classList.add('right');
            mass.push(rightMini);
        }

        setTimeout(function wait() { // очищаем поле от эффекта через 100мс
            for (k = 0; k < mass.length; k++) {
                mass[k].classList.remove("up");
                mass[k].classList.remove("down");
                mass[k].classList.remove("left");
                mass[k].classList.remove("right");
            }
            mass.splice(0);
        }, 100);
    }


}



// начало игры
createField();
createSnake();

var click = 0; // после первого клика кнопка Start превращается в Stop
var button = document.querySelector("button");
button.addEventListener('click', gameRunning);



