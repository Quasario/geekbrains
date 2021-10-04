//1
let tempCelsius = +prompt("Введите температуру в градусах Цельсия");
let tempFahrenheit = 1.8 * tempCelsius + 32;
alert("1) Температура в градусах по Фаренгейту: " + tempFahrenheit + "\u00B0F");


//2
let firstNumber = +prompt("Введите первое число");
let secondNumber = +prompt("Введите второе число");

firstNumber = firstNumber + secondNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber;
alert("2) Числа поменялись местами:\nпервое - " + firstNumber + "\nвторое - " + secondNumber);


//3
let name_ = "Василий";
let admin = name_;
alert("3) " + admin);


//4
let variable = 1000 + "108"
alert("4) " + variable);
