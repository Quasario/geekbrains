// |--------- Задание 4 ---------|
//1
function transform(number) {
    var obj = {};
    if (!parseInt(number) && parseInt(number) != 0) {
        return alert("Введите число");
    } else if (number.length >= 4) {
        alert("Число должно быть в диапозоне 0-999");
        return console.log(obj);
    }

    obj["Сотни"] = number[number.length - 3]; //будет undefined при number<100
    obj["Десятки"] = number[number.length - 2]; //будет undefined при number<10
    obj["Единицы"] = number[number.length - 1];
    return obj;
}

var numbers = transform(prompt("Введите число 0-999"));
alert("Сотни: " + (numbers["Сотни"] == undefined ? numbers["Сотни"] = 0 : numbers["Сотни"]) + "\nДесятки: " + (numbers["Десятки"] == undefined ? numbers["Десятки"] = 0 : numbers["Десятки"]) + "\nЕдиницы: " + numbers["Единицы"]);



//2
var action, ok;
var answersList = [];
var countTryes = 0;

function scenario(question, tries, ...answers) {//c
    do {
        ok = false;
        action = +prompt(question + answers.join("") + '-1 - Выход из игры');

        if (action == -1) {
            return;
        }
        else {
            ok = isAnswer(tries, action, answers);
        }
    } while (!ok);
}

function isAnswer(q, action, answers) {
    if (isNaN(action) || !isFinite(action)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (action < 1 || action > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    answersList.push(answers[action - 1]);
    countTryes++
    return true;
}

scenario(works.question1, works.tries1, works.answer11, works.answer12);
switch (action) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        scenario(works.question2, works.tries2, works.answer21, works.answer22);
        switch (action) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                scenario(works.question4, works.tries4, works.answer41, works.answer42);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                scenario(works.question4, works.tries4, works.answer41, works.answer42);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие  Если в 1 окне ввели 2 то переходим к 3 окну
        scenario(works.question3, works.tries3, works.answer31, works.answer32);
        switch (action) {
            case 1: // Второе действие
                scenario(works.question4, works.tries4, works.answer41, works.answer42);
                break;
            case 2:
                scenario(works.question4, works.tries4, works.answer41, works.answer42);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1:
        break;
    default:
        alert("Ошибка");
}

while (1) {
    questionNumber = prompt("Введите номер вопроса, который хотите пересмотреть: (или end для завершения игры)");
    if (questionNumber == "end") {
        break;
    } else if (questionNumber > countTryes || questionNumber < 1 || isNaN(questionNumber)) {
        alert("Некорректный номер вопроса!");
    } else {
        var keys = Object.keys(works);
        alert((questionNumber == 1 ? works[keys[0]] : works[keys[(questionNumber - 1) * 4]]) + "\nВаш ответ: \n" + answersList[questionNumber - 1]);
    }
}





