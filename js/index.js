// Таски на переменные:
// 1) Создайте две переменные a и b. Выведите в консоль результ их умножения.

// let a;
// let b;
// console.log('a*b :>>', a * b);

// 2) Создайте две переменные c и d. Выведите в консоль результат деления.

// let c;
// let d;
// console.log('c/d :>>', c / d);

// 3) Создайте две переменные e и f. Выведите в консоль результат сложения.

// let e;
// let f;
// console.log('e+f :>>', e + f);

// 4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

// let number = 11;
// let value = true;
// let string = "java script";
// let numStrig = "100";
// console.log(number, value, string, numStrig);


// 5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --

// let num = 1;
// num += 11;
// num -= 11;
// num *= 11;
// num /= 11;
// num = ++num;
// num = --num;
// console.log(num);

// /******************************************************************/
// Таски на prompt:
// 1) Запросить число у пользователя, возвести его в квадрат и вывести

//Вариант 1.
// let userNumber = prompt('Введите необходимое число:');
// let newUserNumber = Number(userNumber) ** 2;
// alert('А вот Ваш квадрат : ' + newUserNumber);

//Вариант 2.
// let userNumber = prompt('Введите необходимое число:');
// userNumber *= userNumber;
// alert(userNumber);


// 2) Вывести среднее арифметическое двух чисел.Числа спрашивать у пользователя.

// let numberA = prompt('Введите первое число:');
// let numberB = prompt('Введите второе число:');
// let answer = (+numberA + +numberB) / 2;
// alert('Ваш результат: ' + answer);

// 3) Перевести число минут в секунды.Число спрашивать у пользователя.

// let input = prompt('Введите кол.минут');
// alert('держите свои ' + (input * 60) + ' секунд');

// 4) Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName.Спросите имя пользователя и занесите данное значение в переменную userName.С помощью диалога выведите сообщение с приветствием.Например, 'Hello, Vasya!'.

// let greeting = 'Hello ';
// let userName = prompt('Приветствую! Как тебя зовут?');
// alert(greeting + userName + '!');

/******************************************************************/
// Таски на условия:
// 1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.

// let userPassword = prompt('Введите свой пароль');
// if (userPassword === '10') {
//    alert('Верно!');
// } else {
//    alert('Неверно!');
// }

// 2) Напишите две проверки.
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
// Проверьте работу скрипта при test, равном true, false.

// let test = Boolean(true);
// if (test) {
//    alert('Верно!');
// } else {
//    alert('Неверно!');
// }

// let test = false;
// if (test != true) {
//    alert('Верно!');
// } else {
//    alert('Неверно!');
// }

// 3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

// let userCheck = prompt('Введите сумму Вашу покупки');
// if (500 < userCheck || userCheck < 800) {
//    userCheck = userCheck - (userCheck * 0.03);
//    alert('Скидка -3% с Вас ' + userCheck + 'грн.');
// } else if (userCheck > 800) {
//    userCheck = userCheck - (userCheck * 0.05);
//    alert('Скидка -5% с Вас ' + userCheck + 'грн.');
// } else {
//    alert('C Вас ' + userCheck + 'грн.');
// }

/******************************************************************/
// Таски на циклы. Каждую задачу решить всеми тремя циклами!

// 1) Вывод чисел от 25 до 0 (порядок уменьшения)

// Цикл «while»
// let start = 25;
// let end = -1;
// while (start > end) {
//    console.log(start)
//    start--;
// }

// Цикл «do…while»
// let NumStart = 25;
// do {
//    console.log(NumStart);
//    NumStart--;
// } while (NumStart > -1);

// Цикл «for»
// for (let userNumber = 25; userNumber >= 0; userNumber--) {
//    console.log(userNumber)
// }

// 2) Вывод чисел от 10 до 50, которые кратны 5

// Цикл «while»
// let iStart = 10;
// let iEnd = 50;
// while (iStart <= iEnd) {
//    console.log(iStart);
//    iStart = iStart + 5;
// }

// Цикл «do…while»
// let aStart = 10;
// do {
//    console.log(aStart);
//    aStart = aStart + 5;
// } while (aStart <= 50);

// Цикл «for»
// for (let i = 10; i <= 50; i = i + 5) {
//    console.log(i);
// }

// 3) Найти сумму чисел в пределах от 1 до 100.

// Цикл «while»
// let bStart = 1;
// let bResult = 0;
// while (bStart <= 100) {
//    bResult = bResult + bStart;
//    bStart++;
// }
// console.log(bResult);

// Цикл «do…while»
// let eStart = 1;
// let eResult = 0;
// do {
//    eResult = eStart + eResult;
//    eStart++;
// } while (eStart <= 100);
// console.log(eResult);

// Цикл «for»
// let sResult = 0;
// for (let s = 1; s <= 100; s++) {
//    sResult = sResult + s;
// }
// console.log(sResult);

// 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

// Цикл «while»
// let trueAnswer = 6;
// let clientAnswer = Number(prompt('Сколько будет 2+2*2'));
// while (trueAnswer !== clientAnswer) {
//    clientAnswer = Number(prompt('Сколько будет 2+2*2'));
// }
// alert('Верно!');

// Цикл «do…while»
// const answer = 6;
// let userAnswer;
// do {
//    userAnswer = Number(prompt('Сколько будет 2+2*2'));
// } while (userAnswer !== answer);

// alert('Верно!');

// Цикл «for»
// const firstAnswer = 6;
// let userResponse;
// for (; userResponse !== firstAnswer; userResponse = Number(prompt('Сколько будет 2+2*2'))) {
// }
// alert('Верно!');

