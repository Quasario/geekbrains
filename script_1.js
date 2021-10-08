// // |--------- Задание 1 ---------|
// //1
// let tempCelsius = +prompt("Введите температуру в градусах Цельсия");
// let tempFahrenheit = 1.8 * tempCelsius + 32;
// alert("1) Температура в градусах по Фаренгейту: " + tempFahrenheit + "\u00B0F");


// //2
// let firstNumber = +prompt("Введите первое число");
// let secondNumber = +prompt("Введите второе число");

// firstNumber = firstNumber + secondNumber;
// secondNumber = firstNumber - secondNumber;
// firstNumber = firstNumber - secondNumber;
// alert("2) Числа поменялись местами:\nпервое - " + firstNumber + "\nвторое - " + secondNumber);


// //3
// let name_ = "Василий";
// let admin = name_;
// alert("3) " + admin);


// //4
// let variable = 1000 + "108"
// alert("4) " + variable);



// |--------- Задание 2 ---------|
// 1
alert("var a = 1, b = 1, c, d;" +
    '\nc = ++a; alert(c); =2 (префиксная форма записи - значенине "a" увеличивется, затем присваивается к "c")' +
    '\nd = b++; alert(d); =1 (постфиксная форма записи - значенине "b" присваивается к "с", затем увеличивается)' +
    '\nc = (2+ ++a); alert(c); =5 (значения внутри скобок, поэтому форма инкремента не важна в данном случае)' +
    '\nd = (2+ b++); alert(d); =4 (значения внутри скобок, поэтому форма инкремента не важна в данном случае)' +
    '\nalert(a); =3 (результат предыдущих увеличений)' +
    '\nalert(b); =3 (результат предыдущих увеличений)'
)


// 2
var a = 2;
var x = 1 + (a *= 2);
alert("x = " + x);


//3
var random1 = Math.round(Math.random() * (200) - 100);
var random2 = Math.round(Math.random() * (200) - 100);
if (random1 >= 0 && random2 >= 0) {
    alert(random1 + ' - ' + random2 + " = " + (random1 - random2));
} else if (random1 <= 0 && random2 <= 0) {
    alert(random1 + ' * ' + random2 + " = " + (random1 * random2));
} else {
    alert(random1 + ' + ' + random2 + " = " + (random1 + random2));
}

//4
var a = Math.round(Math.random() * 15);
switch (a) {
    case 0:
        alert(0);
        a++;
    case 1:
        alert(1);
        a++;
    case 2:
        alert(2);
        a++;
    case 3:
        alert(3);
        a++;
    case 4:
        alert(4);
        a++;
    case 5:
        alert(5);
        a++;
    case 6:
        alert(6);
        a++;
    case 7:
        alert(7);
        a++;
    case 8:
        alert(8);
        a++;
    case 9:
        alert(9);
        a++;
    case 10:
        alert(10);
        a++;
    case 11:
        alert(11);
        a++;
    case 12:
        alert(12);
        a++;
    case 13:
        alert(13);
        a++;
    case 14:
        alert(14);
        a++;
    case 15:
        alert(15);
}

//5
function addition(a, b) {
    return +a + +b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}


//6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            return ("Используйте корректный символ для операции (+, -, *, /)");
    }
}

arg1 = prompt("Введите значение первой переменной")
arg2 = prompt("Введите значение второй переменной")
operation = prompt("Введите значение математической операции (+, -, *, /)")
alert(mathOperation(arg1, arg2, operation))

//7
alert("Почитал на Хабре про абстрактный алгоритм сравнения для отношений")

//8
function exponentiation(number, degree, sum = 1) {
    if (degree == 0) {
        return sum;
    } else if (degree == 0 && sum == 1) {
        return 1;
    }
    degree -= 1;
    sum = number * sum;
    return exponentiation(number, degree, sum);
}

var number = +prompt("Введите число");
var degree = +prompt("Введите степень");
var res = exponentiation(number, degree);
alert(res);


