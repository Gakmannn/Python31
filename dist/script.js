"use strict";
console.log('hello world');
console.log(10 / 0, 'sfdsfsd', false);
let h2 = document.querySelector('h2');
// @ts-ignore Игнорировать предупреждения в следующей строке
setTimeout(() => { h2.innerHTML = '<br class="myClass">Safary'; }, 3000);
// alert('sdfgsdfds')
// Этот комментарий занимает всю строку
/* Пример с двумя сообщениями.
Это - многострочный комментарий.
*/
let message = 1;
message = 2 + 3 + 2;
const daysInWeek = message;
console.log(daysInWeek);
console.log('message =', message);
message = message + 2;
console.log('message = message + 2;', 'message =', message);
message += 2;
console.log('message += 2;', 'message =', message);
// const x = prompt('Введите число','0')
// const x = +(prompt('Введите число','0') as string)
// const x = parseInt(prompt('Введите число') as string)
// console.log(x)
let num = 10;
num = +'15';
// Number
console.log('typeof(15)', typeof (15));
console.log('typeof(NaN)', typeof (NaN));
console.log('typeof(Infinity)', typeof (Infinity));
console.log('typeof(-Infinity)', typeof (-Infinity));
console.log('9007199254740999', 9007199254740999);
// BigInt
console.log('typeof(1234567890123456789012345678901234567890n)', typeof (1234567890123456789012345678901234567890n));
// String
let str = "Прив\"е\"т";
let str2 = 'Одинарные "кавычки" тоже подойдут';
// интерполяция (шаблонная строка)
let phrase = `Обратные 'кавычки' "позволяют" встраивать переменные ${str} ${num * 5} `;
let phrase2 = `Обратные 'кавычки' "позволяют" встраивать переменные ` + str + ' ' + (num * 5) + ' ';
''; // Пустая строка 
// конкатенация (сложение строк)
console.log('phrase+str2', phrase + str2);
// Boolean
true; // да, истина, 1
false; // нет, ложь, 0
// null
null; // «ничего», «пусто» или «значение неизвестно»
console.log(null);
// undefined
undefined; // значение не было присвоено
let a;
console.log(a);
typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"    (1)
typeof null; // "object"    (2)
typeof alert; // "function" (3)
// let result = confirm('Что есть что?')
// console.log(result) // true или false
console.log('[1,2]', String([1, 2]));
console.log(Number("  \n 123  \t ")); // 123
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("123z")); // NaN (ошибка чтения числа на месте символа "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0
// Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false
// При сложении если хотя бы один операнд является строкой, то второй будет также преобразован в строку
// Сложение и преобразование строк — это особенность бинарного плюса +.Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа
// оба операнда предварительно преобразованы в числа
console.log(+'2' + +'3'); // 5
// более длинный вариант
console.log(Number('2') + Number('3')); // 5
let a1 = 1;
let b = 2;
// Так никто не пишет, но это работает
// let c = 3 - (a1 = b + 1)
// Лучше записать так
a1 = b + 1;
let c = 3 - a1;
// Присваивание по цепочке (с права на лево)
console.log((a = b = c = 2 + 2));
console.log(a);
console.log(b);
console.log(c);
// Лучше писать так
c = 2 + 2;
b = c;
a = c;
let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)
// Инкремент / декремент можно применить только к переменной.Попытка использовать его на значении, типа 5++, приведёт к ошибке
// Постфиксный Инкремент++ увеличивает переменную на 1:
let counter = 2;
// counter += 1
counter++; // работает как counter = counter + 1, просто запись короче
console.log(counter); // 3
// Постфиксный Декремент-- уменьшает переменную на 1:
counter = 2;
// counter -= 1
counter--; // работает как counter = counter - 1, просто запись короче
console.log(counter); // 1
// Операторы++ и-- могут быть расположены не только после, но и до переменной.
// Когда оператор идёт после переменной — это «постфиксная форма»: counter++.
// «Префиксная форма» — это когда оператор идёт перед переменной: ++counter.
// Префиксная форма возвращает новое значение, в то время как постфиксная форма возвращает старое (до увеличения/уменьшения числа)
// Если результат оператора не используется, а нужно только увеличить/уменьшить переменную, тогда без разницы, какую форму использовать. Мы так и делаем!!!
// Лучше использовать стиль «одна строка – одно действие»:
counter = 1;
console.log(2 * counter);
counter++;
// Каждое выражение вычисляется отдельно, но возвращается последнее
// Так тоже не делаем
a = (b = 1 + 2, c = 3 + 4);
let s1 = 3;
let s2 = 4;
console.log('4 > 3', 4 > 3);
console.log('4 < 3', 4 < 3);
console.log('4 == 3', s1 == s2);
console.log('4 != 3', s1 != s2);
console.log('"b" > "a"', "b" > "a");
console.log('номер "0"', "0".charCodeAt(0));
console.log('номер "A"', "A".charCodeAt(0));
console.log('номер "B"', "B".charCodeAt(0));
console.log('номер "a"', "a".charCodeAt(0));
console.log('номер "b"', "b".charCodeAt(0));
console.log('номер "А" (рус)', "А".charCodeAt(0));
console.log('номер "Б"', "Б".charCodeAt(0));
let s3 = 0;
let s4 = 0;
console.log('null == undefined', null == undefined);
console.log('null === undefined', null === undefined);
// @ts-ignore
console.log('null == 0', null >= 0);
// Операторы сравнения возвращают значения логического типа.
// Строки сравниваются посимвольно в лексикографическом порядке.
// Значения разных типов при сравнении приводятся к числу.Исключением является сравнение с помощью операторов строгого равенства / неравенства.
// Значения null и undefined равны == друг другу и не равны любому другому значению.
// Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, которые могут принимать значения null / undefined.Хорошей идеей будет сделать отдельную проверку на null / undefined.
// PRACTICE_1_1
// Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.
// Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
// const x1 = +(prompt('Введите первое число')as string)
// const x2 = +(prompt('Введите второе число')as string)
// alert ((x1+x2)/2)
// Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
// Реализуйте конвертор из километров в мили(пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль.Это значение укажите в коде как константу.
// alert(km*0.621371)
// Реализуйте калькулятор.Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.
// alert(`1+1=${1+1}
// 1-1=${1-1}`)
// Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.
// alert(-b/a)
// Запросите у пользователя текущее время(часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
// const hours = +(prompt('Введите часы') as string)
// const minutes = +(prompt('Введите минуты') as string)
// const timeInMinutes = hours*60 + minutes
// const timeInMinutesToNextDay = 24 * 60 - timeInMinutes
// const minutesToNextDay = timeInMinutesToNextDay%60
// const hoursToNextDay = (timeInMinutesToNextDay - minutesToNextDay)/60
// alert(`До следующего дня ${hoursToNextDay} часов и ${minutesToNextDay} минут`)
// Запросите у пользователя трехзначное число и выведите вторую цифру этого числа.Для решения задачи используйте оператор % (остаток от деления).
const number = 278;
console.log((number - number % 10) / 10 % 10);
// Запросите у пользователя пятизначное число и переместите последнюю цифру в начало(из числа 12345 должно получиться число 51234).
// Зарплата работника составляет $250 + 10 % от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.
// if (условие) {
//   блок кода, который выполняется, если условие истинно
// }
// if (условие) {
//   блок кода, который выполняется, если условие истинно
// } else {
//   блок кода, который выполняется, если условие ложно
// }
// if (условие) {
//   блок кода, который выполняется, если условие истинно
// } else if (доп условие 1) {
//   блок кода, который выполняется, если доп условие 1 истинно
// } else {
//   блок кода, который выполняется, ни одно из условий не было истинным
// }
const SECRET = "0123";
const ADMIN_SECRET = "321";
const pass = '321';
// const pass = prompt('Введите пароль')
// @ts-ignore
if (SECRET == pass) {
    console.log('Вы вошли!');
}
else if (ADMIN_SECRET == pass) {
    console.log('Вы вошли как администратор!');
}
else {
    console.log('Вы не вошли!');
}
const age = 20;
let accessAllowed;
if (age > 18) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}
// переменная, в которую попадёт значение = (условие)?Значение, если условие истинно:Значение, если условие ложно
accessAllowed = (age > 18) ? true : false;
console.log((18 ** 2) ** 0.5);
// Получаем элементы
const input1 = document.querySelector('#task1 input');
const text1 = document.querySelector('#task1 b');
const button1 = document.querySelectorAll('#task1 button');
const output1 = document.querySelector('#task1 p');
// @ts-ignore
text1.innerText = 'Кто там?';
// По нажатию на кнопку выводим результат
button1[0]?.addEventListener('click', function () {
    // @ts-ignore
    output1.innerText = '';
    // @ts-ignore
    if (input1.value == 'Админ') {
        // @ts-ignore
        text1.innerText = 'Пароль?';
        // @ts-ignore
        input1.value = '';
        button1[0].classList.add('hidden');
        button1[1].classList.remove('hidden');
    }
    else {
        // @ts-ignore
        output1.innerText = 'Я вас не знаю';
    }
});
button1[1]?.addEventListener('click', function () {
    // @ts-ignore
    output1.innerText = '';
    // @ts-ignore
    if (input1.value == 'Я Главный') {
        // @ts-ignore
        output1.innerText = 'Здравствуйте!';
    }
    else {
        // @ts-ignore
        text1.innerText = 'Кто там?';
        // @ts-ignore
        output1.innerText = 'Я вас не знаю';
        // @ts-ignore
        input1.value = '';
        button1[0].classList.remove('hidden');
        button1[1].classList.add('hidden');
    }
});
let currentUser = null;
let defaultUser = "John";
let name1 = currentUser || defaultUser || "unnamed";
console.log(name1); // выбирается "John" – первое истинное значение
console.log("'' || 1 || undefined", '' || 1 || undefined);
console.log("0 && 1 && 789", '0' && 1 && 789);
// Приоритет оператора && больше, чем у ||
// Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||
// const login = prompt('Кто там?')
// if (login == null) {
//   alert('Отменено')
// } else if (login == 'Админ') {
//   const pass = prompt('Пароль?')
//   if (pass == null) {
//     alert('Отменено')
//   } else if (pass == 'Я Главный') {
//     alert('Здравствуйте!')
//   } else {
//     alert('Неверный пароль')
//   }
// } else {
//   alert('Я вас не знаю')
// }
// Идентичные записи
// result = a ?? b
// result = (a !== null && a !== undefined) ? a : b
// Оператор нулевого слияния возвращает значимые значения и пропускает только null и undefined
console.log(NaN ?? 0 ?? 'default');
console.log('' || 0 || 'default');
// Важное различие между ними заключается в том, что:
// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.
// Оператор нулевого слияния ?? — это быстрый способ выбрать первое «определённое» значение из списка.
// Используется для присвоения переменным значений по умолчанию:
// будет height=100, если переменная height равна null или undefined
// height = height ?? 100;
// Оператор ?? имеет очень низкий приоритет, лишь немного выше, чем у ? и =, поэтому при использовании его в выражении, скорее всего, потребуются скобки.
// Запрещено использовать вместе с || или && без явно указанного приоритета, то есть без скобок.
let n1 = 5;
let i = 1;
// while - цикл с предусловием; Сначала проверяем условие, потом идём в тело цикла
// while (условие) { Тело цикла выполняется пока условие истинно, иначе управление переходит на следующую строку после цикла (цикл заканчивается)
//   Тело цикла
// }
while (i <= n1) {
    console.log(i);
    i++;
}
// Бесконечный цикл с условием выхода
while (true) {
    if (i > 500)
        break;
    i++;
}
// do while - цикл с постусловием; Сначала выполняем тело цикла, потом проверяем условие
// do {
//   Тело цикла
// } while (Условие) Тело цикла выполняется пока условие истинно, иначе управление переходит на следующую строку после цикла (цикл заканчивается)
// let number1;
// do {
//     // @ts-ignore
//     number1 = +prompt('Введи число больше 0');
// } while (!number1 || number1 <= 0);

alert(`количество 0 = ${n1}
количество положительных 2
`)
