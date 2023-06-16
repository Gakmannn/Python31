console.log('hello world')
console.log(10 / 0, 'sfdsfsd', false)
let h2 = document.querySelector('h2')
// @ts-ignore Игнорировать предупреждения в следующей строке
setTimeout(() => { h2.innerHTML = '<br class="myClass">Safary' }, 3000)
// alert('sdfgsdfds')

// Этот комментарий занимает всю строку
/* Пример с двумя сообщениями.
Это - многострочный комментарий.
*/
let message = 1
message = 2 + 3 + 2
const daysInWeek = message
console.log(daysInWeek)

console.log('message =', message)
message = message + 2
console.log('message = message + 2;', 'message =', message)
message += 2
console.log('message += 2;', 'message =', message)

// const x = prompt('Введите число','0')
// const x = +(prompt('Введите число','0') as string)
// const x = parseInt(prompt('Введите число') as string)
// console.log(x)

let num = 10
num = +'15'

// Number
console.log('typeof(15)', typeof (15))
console.log('typeof(NaN)', typeof (NaN))
console.log('typeof(Infinity)', typeof (Infinity))
console.log('typeof(-Infinity)', typeof (-Infinity))
console.log('9007199254740999', 9007199254740999)
// BigInt
console.log('typeof(1234567890123456789012345678901234567890n)', typeof (1234567890123456789012345678901234567890n))

// String
let str = "Прив\"е\"т"
let str2 = 'Одинарные "кавычки" тоже подойдут'
// интерполяция (шаблонная строка)
let phrase = `Обратные 'кавычки' "позволяют" встраивать переменные ${str} ${num*5} `
let phrase2 = `Обратные 'кавычки' "позволяют" встраивать переменные ` + str + ' ' + (num * 5) + ' '
'' // Пустая строка 
// конкатенация (сложение строк)
console.log('phrase+str2', phrase + str2)

// Boolean
true // да, истина, 1
false // нет, ложь, 0

// null
null // «ничего», «пусто» или «значение неизвестно»
console.log(null)

// undefined
undefined // значение не было присвоено

let a
console.log(a)

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"    (1)
typeof null // "object"    (2)
typeof alert // "function" (3)

// let result = confirm('Что есть что?')
// console.log(result) // true или false

console.log('[1,2]', String([1,2]))

console.log(Number("  \n 123  \t ")); // 123
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("123z"));      // NaN (ошибка чтения числа на месте символа "z")
console.log(Number(true));        // 1
console.log(Number(false));       // 0

// Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false

// При сложении если хотя бы один операнд является строкой, то второй будет также преобразован в строку

// Сложение и преобразование строк — это особенность бинарного плюса +.Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа

// оба операнда предварительно преобразованы в числа
console.log(+'2' + +'3'); // 5

// более длинный вариант
console.log( Number('2') + Number('3') ); // 5

let a1 = 1
let b = 2

// Так никто не пишет, но это работает
// let c = 3 - (a1 = b + 1)
// Лучше записать так
a1 = b + 1
let c = 3 - a1

// Присваивание по цепочке (с права на лево)
console.log((a = b = c = 2 + 2))
console.log(a)
console.log(b)
console.log(c)
// Лучше писать так
c = 2 + 2;
b = c;
a = c;

let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)


// Инкремент / декремент можно применить только к переменной.Попытка использовать его на значении, типа 5++, приведёт к ошибке

// Постфиксный Инкремент++ увеличивает переменную на 1:
let counter = 2
// counter += 1
counter++        // работает как counter = counter + 1, просто запись короче
console.log(counter) // 3

// Постфиксный Декремент-- уменьшает переменную на 1:

counter = 2

// counter -= 1
counter--       // работает как counter = counter - 1, просто запись короче
console.log(counter) // 1

// Операторы++ и-- могут быть расположены не только после, но и до переменной.

// Когда оператор идёт после переменной — это «постфиксная форма»: counter++.
// «Префиксная форма» — это когда оператор идёт перед переменной: ++counter.

// Префиксная форма возвращает новое значение, в то время как постфиксная форма возвращает старое (до увеличения/уменьшения числа)

// Если результат оператора не используется, а нужно только увеличить/уменьшить переменную, тогда без разницы, какую форму использовать. Мы так и делаем!!!

// Лучше использовать стиль «одна строка – одно действие»:
counter = 1
console.log(2 * counter)
counter++

// Каждое выражение вычисляется отдельно, но возвращается последнее
// Так тоже не делаем
a = (b = 1 + 2, c = 3 + 4)

let s1 = 3
let s2 = 4

console.log('4 > 3', 4 > 3)
console.log('4 < 3', 4 < 3)
console.log('4 == 3', s1 == s2)
console.log('4 != 3', s1 != s2)

console.log('"b" > "a"', "b" > "a")

console.log('номер "0"', "0".charCodeAt(0))
console.log('номер "A"', "A".charCodeAt(0))
console.log('номер "B"', "B".charCodeAt(0))
console.log('номер "a"', "a".charCodeAt(0))
console.log('номер "b"', "b".charCodeAt(0))
console.log('номер "А" (рус)', "А".charCodeAt(0))
console.log('номер "Б"', "Б".charCodeAt(0))

let s3 = 0
let s4 = 0
console.log('null == undefined', null == undefined)
console.log('null === undefined', null === undefined)
// @ts-ignore
console.log('null == 0', null >= 0)

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

const number = 278
console.log((number - number %10)/10%10)

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

const SECRET = "0123"
const ADMIN_SECRET = "321"
const pass = '321'
// const pass = prompt('Введите пароль')
// @ts-ignore
if (SECRET == pass) {
  console.log('Вы вошли!')
} else if (ADMIN_SECRET == pass) {
  console.log('Вы вошли как администратор!')
} else {
  console.log('Вы не вошли!')
}

const age = 20
let accessAllowed
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

// переменная, в которую попадёт значение = (условие)?Значение, если условие истинно:Значение, если условие ложно
accessAllowed = (age>18)?true:false

console.log((18**2)**0.5)


// Получаем элементы
const input1 = document.querySelector('#task1 input')
const text1 = document.querySelector('#task1 b')
const button1 = document.querySelectorAll('#task1 button')
const output1 = document.querySelector('#task1 p')
document.write('<h1>asddasdas</h1>')
document.write('<p>asddasdas</p>')
document.write('<q>asddasdas</q>')
const h1 = document.querySelector('h1')
if (h1) h1.innerText = 'ddad'
// @ts-ignore
text1.innerText = 'Кто там?'
// По нажатию на кнопку выводим результат
const onClick = function () {
  // @ts-ignore
  output1.innerText = ''

  // @ts-ignore
  if (input1.value == 'Админ') {
    // @ts-ignore
    text1.innerText = 'Пароль?'
    // @ts-ignore
    input1.value = ''
    button1[0].classList.add('hidden')
    button1[1].classList.remove('hidden')
  } else {
    // @ts-ignore
    output1.innerText = 'Я вас не знаю'
  }
}
button1[0]?.addEventListener('click', onClick)
button1[1]?.addEventListener('click', function () {
  // @ts-ignore
  output1.innerText = ''

  // @ts-ignore
  if (input1.value == 'Я Главный') {
    // @ts-ignore
    output1.innerText = 'Здравствуйте!'
  } else {
    // @ts-ignore
    text1.innerText = 'Кто там?'
    // @ts-ignore
    output1.innerText = 'Я вас не знаю'
    // @ts-ignore
    input1.value = ''
    button1[0].classList.remove('hidden')
    button1[1].classList.add('hidden')
  }
})

let currentUser = null;
let defaultUser = "John";

let name1 = currentUser || defaultUser || "unnamed";

console.log(name1); // выбирается "John" – первое истинное значение

console.log("'' || 1 || undefined",'' || 1 || undefined)
console.log("0 && 1 && 789",'0' && 1 && 789)
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
console.log(NaN ?? 0 ?? 'default')
console.log('' || 0 || 'default')
// Важное различие между ними заключается в том, что:
// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.

// Оператор нулевого слияния ?? — это быстрый способ выбрать первое «определённое» значение из списка.
// Используется для присвоения переменным значений по умолчанию:

// будет height=100, если переменная height равна null или undefined
// height = height ?? 100;
// Оператор ?? имеет очень низкий приоритет, лишь немного выше, чем у ? и =, поэтому при использовании его в выражении, скорее всего, потребуются скобки.

// Запрещено использовать вместе с || или && без явно указанного приоритета, то есть без скобок.

let n1 = 5
let i = 1
// while - цикл с предусловием; Сначала проверяем условие, потом идём в тело цикла
// while (условие) { Тело цикла выполняется пока условие истинно, иначе управление переходит на следующую строку после цикла (цикл заканчивается)
//   Тело цикла
// }
while (i<=n1) {
  console.log(i)
  i++
}

// 1. инициация итератора
// 2. проверка условия
// После проверки условия, если оно истинно, выполняется тело цикла. Если ложно,- выход
// 3. После каждого выполнения тела цикла делаем шаг итератора
// 4(2). проверка условия

// for (инициация итератора; условие; шаг итератора) {
//   Тело цикла
// }

// Выполнить начало
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → ...

for (let i=1; i<n1; i++) {
  console.log(i)
}

// Бесконечный цикл с условием выхода
while (true) {
  if (i>500) break
  i++
}

// do while - цикл с постусловием; Сначала выполняем тело цикла, потом проверяем условие
// do {
//   Тело цикла
// } while (Условие) Тело цикла выполняется пока условие истинно, иначе управление переходит на следующую строку после цикла (цикл заканчивается)

// let number1
// do {
//   // @ts-ignore
//   number1 = +prompt('Введи число больше 0')
// } while (!number1 || number1<=0)

// alert(`количество 0 = ${n1}
// количество положительных 2
// `)

// Вариант с меткой
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '');
//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) break outer; // (*)
//     // сделать что-нибудь со значениями...
//   }
// }

// Директива continue также может быть использована с меткой.В этом случае управление перейдёт на следующую итерацию цикла с меткой

// Вариант с флагом
// let stopOuter = false // (Флаг)
// for (let i = 0; i < 3; i++) {
//   if (stopOuter) break
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '');
//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) {
//       stopOuter = true
//       break
//     } // (*)
//     // сделать что-нибудь со значениями...
//   }
// }

// Чётные без %
// for (let i = 2; i < 11; i += 2) {
//   alert(i)
// }

// Вывести простые числа
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2, 3, 5, 7.
// P.S.Код также должен легко модифицироваться для любых других интервалов.

// const maxNumber = +(prompt('До какого числа искать простые') as string)
// console.log(`Простые числа до ${maxNumber}`)
// for (let i=2; i<maxNumber;i++) {
//   let isSimple = true
//   for (let j=2; j<i; j++) {
//     if (i%j==0) {
//       isSimple=false
//       break
//     }
//   }
//   if (isSimple) console.log(i)
// }

// console.log(`second`)
// outer:
// for (let i = 2; i < maxNumber; i++) {
//   for (let j = 2; j < i; j++) {
//     if (!(i % j)) continue outer
//   }
//   console.log(i)
// }


// switch (x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }

// Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются

// const x = 0
// switch (x) {
//   case 1:
//     console.log('пн')
//     break
//   case 2:
//     console.log('вт')
//     break
//   case 3:
//     console.log('ср')
//     break
//   case 4:
//     console.log('чт')
//     break
//   case 5:
//     console.log('пт')
//     break
//   case 6:
//     console.log('сб')
//     break
//   case 7:
//     console.log('вс')
//     break
//   default:
//     console.log('пора отдохнуть')
// }

// let input
// do {
//   input = prompt('Введите число') as string
// } while (input?.length<1)

// const shift = +(prompt('На сколько разрядов сдвинуть число?') as string)
// let newNumber = ''
// for (let i=shift; i<input.length; i++) {
//   newNumber += input[i]
// }
// for (let i=shift-1; i>=0; i--) {
//   newNumber += input[i]
// }
// alert(newNumber)

const stringAsArray: any = ['A','B','C','D','E','F','G']
const string: any = 'ABCDEFG' 
// Записи аналогичны
for (let i=0; i<stringAsArray.length; i++) {
  console.log('i =', i, `stringAsArray[${i}] =`, stringAsArray[i])
}
for (let i in stringAsArray) {
  console.log('i =', i, `stringAsArray[${i}] =`, stringAsArray[i])
}

// Записи аналогичны
for (let i = 0; i < stringAsArray.length; i++) {
  let char = stringAsArray[i]
  console.log('char =', char)
}
for (let char of stringAsArray) {
  console.log('char =', char)
}

// Делить число 1000 на 2 до тех пор, пока не получится число
// меньше 50 Вывести это число и сколько делений произвели.

num = 1000
i = 0
do {
  num/=2
  i++
} while (num > 50)
console.log('num =', num, 'i =', i)

// function имя(параметры) {
//   ...тело...
// }

let local = 'глобальная переменная'

function showMessage(local:any) {
  local = 'локальная переменная'
  console.log('Всем привет!!!')
  return (
    local
    )
}


console.log(local)
const fromFunction = showMessage(local)
console.log(fromFunction)

const text = 'sdfsf'
function showMessage1(text: string, from = 'Аня', divider=':') { // параметры: from, text
  console.log(from + divider + ' ' + text);
}

showMessage1(text)
showMessage1("Как дела?","Петя","!!!")
showMessage1("Хорошо")
showMessage1("О, вы тоже тут!", "Макс","&&&")

getSum(1,2,5,6,4)

function getSum(a:number,b=0,c=0,d=0,e=0) {
  return a+b+c+d+e
}

// Игра «Угадай число». Предложить пользователю загадать
// число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам,
//   записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, <N или == N ?». В зависимости от того
// что указал пользователь, уменьшаете диапазон.Начальный
// диапазон от 0 до 100, поделили пополам и получили 50
// Если пользователь указал, что его число > 50, то изменили
// диапазон на от 51 до 100 И так до тех пор, пока пользова -
//   тель не выберет == N.

// let userConfirmGht
// let userConfirmSht
// let userConfirmEqls
// let N0 = 50
// let N1 = 100
// alert('загадайте число от 0 до 100, а я отгадаю')
// do {
//   userConfirmGht = confirm(`Ваше число больше ${N0} и меньше ${N1}?`)
//   if (userConfirmGht) {
//     N0 = N1/2
//     N1 = N0 + N1/2
//   } else {
//     N1 = N0
//     N0 /= 2
//   }
// } while(N0!=N1)
// alert(`ваше число ${N0}`)

let sayHi
// Если нет параметра, обязательно писать круглые скобки
sayHi = () => console.log("Hello!")
sayHi = function () {
  console.log("Привет");
}
// let func123 = (arg1, arg2, ...argN) => expression
// let func321 = function (arg1, arg2, ...argN) { return expression}
let sum
sum = (a: number, b: number) => a + b
sum = (a: number, b: number) => {
  let s = a + b
  return s
}

let varFromServer = '' ?? 0 ?? 'not'
console.log(undefined == null) // равны только друг другу

let adas =`
daasdas
dsfsdfsd
sdffsd
`
adas ='daasda\nsdsfsdfsd\nsdffsd'

for  (let i=0;i<10;i++) {
  i
}

/**
 * Возвращает x, возведённое в n-ную степень.
 * В случае, если n не целое, или отрицательное, возвращает NAN
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x: number, n: number) {
  if (n < 0) return NaN
  if (Math.round(n) != n) return NaN
  return x**n
}

pow(2,2)

// Создание пустого объекта
const user = {} as any // синтаксис "литерал объекта"
const user1 = new Object() // синтаксис "конструктор объекта"

console.log(user)
user.age = 18
user['two words'] = 'ok'
console.log(user)
user[18] = 18
user['two words'] = 'not'
console.log(user)

const car = {
  'whells': 4,
  hP: 200,
  engine: 'v8',
  'two words':'yes',
} as any
console.log({...car})
let horsePowers = 'hP'
console.log(car[horsePowers])
delete car['two words']
car.whells = 5
console.log(car)


function makeUser(name:string, age:number) {
  return {
    name: name,
    age, // имя переменной становится свойством, а её значение,- значением
    // ...другие свойства
  } as any
}

let user2 = makeUser("John", 40);
console.log(user2)
console.log('age' in user2) // Проверка на существование свойства в объекте
const keyString = 'name'
console.log(keyString in user2) // 'name' in user2

for (let key in user2) {
  console.log(`${key}:${user2[key]}`)
}

let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
}

let codesKeys = 'Keys order: '
for (let code in codes) {
  codesKeys += code + ', '
}
console.log(codesKeys) // 1, 41, 44, 49

// 1,2,3,5,6 - псевдо массив
// one:1,two:2 - псевдо ассоциативный массив

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект newUser.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const newUser = {} as any
newUser.name = 'John' // newUser['name'] = 'John'
newUser.surname = 'Smith' // newUser['surname'] = 'Smith'
newUser.name = 'Pete' // newUser['name'] = 'Pete'
delete newUser.name

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Два одинаковых объекта никогда не будут равны, если их сравнивать в лоб
const obj1 = {a:1}
const obj2 = {a:1}
console.log('obj1 === obj2', obj1 === obj2)
console.log('obj1.a === obj2.a', obj1.a === obj2.a)
console.log('JSON.stringify(obj1) === JSON.stringify(obj2)', JSON.stringify(obj1) === JSON.stringify(obj2))

function isEmpty(obj:any) {
  // 1 решение
  // return JSON.stringify(obj) === '{}'

  // 2 решение
  // for (let key in obj) {
  //   if (key) return false
  // }
  // return true

  // 3 решение
  return Object.keys(obj).length ? false : true
}

console.log('isEmpty({})', isEmpty({})) //true
console.log('isEmpty({a:1})', isEmpty({a:1})) //false

// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: '160$',
  Pete: 130
} as any

let salariesSum = 0
for (let key in salaries) {
  salariesSum += parseFloat(salaries[key])
}
console.log(salariesSum)

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj:any) {
  for (let key in obj) {
    if (typeof (obj[key]) == 'number') obj[key]*=2
  }
}
multiplyNumeric(salaries)
console.log(salaries)

// Создать объект, хранящий в себе отдельно числитель и зна -
// менатель дроби, и следующие функции для работы с этим объ -
// ектом.
// 1 Функция сложения 2 - х объектов - дробей.
// 2 Функция вычитания 2 - х объектов - дробей.
// 3 Функция умножения 2 - х объектов - дробей.
// 4 Функция деления 2 - х объектов - дробей.
// 5 Функция сокращения объекта - дроби.

type Fraction = {
  numerator: number,
  denominator: number
}

const fraction1:Fraction = {
  numerator: 2,
  denominator: 5
}
const fraction2: Fraction = {
  numerator: 2,
  denominator: 8
}

console.log(`${fraction1.numerator}/${fraction1.denominator} and ${fraction2.numerator}/${fraction2.denominator}`)

function maxDenominator(f: Fraction) {
  const min = f.numerator < f.denominator ? f.numerator : f.denominator
  for (let i = min; i > 1; i--) {
    if (f.numerator % i == 0 && f.denominator % i == 0) return i
  }
  return 1
}

function fractionReduction(f: Fraction) {
  const denominator = maxDenominator(f)
  f.numerator /= denominator 
  f.denominator /= denominator
  return f
}

function fractionSubtraction(f1: Fraction, f2: Fraction) {
  const ajusted = fractionAjust(f1, f2)
  const sub = {
    numerator: ajusted.f1.numerator - ajusted.f2.numerator,
    denominator: f1.denominator,
  }
  return fractionReduction(sub)
}

function fractionAjust(f1: Fraction, f2: Fraction) {
  const f1D = f1.denominator
  const f2D = f2.denominator
  f1.numerator *= f2D
  f1.denominator *= f2D
  f2.numerator *= f1D
  f2.denominator *= f1D
  return {f1, f2}
}

function fractionMultiplication(f1: Fraction, f2: Fraction) {
  const mult = {
    numerator: f1.numerator * f2.numerator,
    denominator: f1.denominator * f2.denominator,
  }
  return fractionReduction(mult)
}

function fractionDivision(f1: Fraction, f2: Fraction) {
  const div = {
    numerator: f1.numerator * f2.denominator,
    denominator: f1.denominator * f2.numerator,
  }
  return fractionReduction(div)
}

function fractionSum(f1: Fraction, f2: Fraction) {
  const ajusted = fractionAjust(f1, f2)
  const sum = {
    numerator: ajusted.f1.numerator + ajusted.f2.numerator,
    denominator: ajusted.f1.denominator
  }
  return fractionReduction(sum)
}

const sumResult = fractionSum(fraction1, fraction2)
const subResult = fractionSubtraction(fraction1, fraction2)
const multResult = fractionMultiplication(fraction1, fraction2)
const divResult = fractionDivision(fraction1, fraction2)
console.log(`sum = ${sumResult.numerator}/${sumResult.denominator}`) 
console.log(`sub = ${subResult.numerator}/${subResult.denominator}`) 
console.log(`mult = ${multResult.numerator}/${multResult.denominator}`) 
console.log(`div = ${divResult.numerator}/${divResult.denominator}`) 


let messageStr = "Привет!"
let phraseStr = messageStr

console.log('messageStr', messageStr)
console.log('phraseStr', phraseStr)
phraseStr += ' User!' 
console.log('messageStr', messageStr)
console.log('phraseStr', phraseStr)

let messageObj = {text:"Привет!"}
let phraseObj = messageObj

console.log('messageObj', messageObj)
console.log('phraseObj', phraseObj)
phraseObj.text += ' User!' 
console.log('messageObj', messageObj)
console.log('phraseObj', phraseObj)
// Два объекта равны только в том случае, если это один и тот же объект
console.log('phraseObj == messageObj', phraseObj == messageObj)

let mainUser = {
  name: "John",
  age: 30,
  work: {
    salari: 100
  },
  sayHi() {
    // "this" - это "текущий объект"
    console.log('my name is ' + this.name)
  },
  sayHi2: function () {
    console.log('my name is ' + this.name)
  },
  // не используется в объектах для доступа к this объекта, т.к. не имеет доступа к this объекта
  arrowMethod: () => {
    // @ts-ignore
    console.log(this)
  },
  sayAnyfing,
} as any

mainUser.sayHi = function() {
  console.log('my name is ' + this.name + '. My salari is ' + this.work.salari)
}

let clone = {} as any // новый пустой объект

// давайте скопируем все свойства user в него
// 1 способ клонирования объектов. Копирование свойств объекта в цикле. Надо помнить о вложенных объектах
// for (let key in mainUser) {
//   if (typeof(mainUser[key]) == 'object') {
//     clone[key] = {}
//     for (let innerKey in mainUser[key]) {
//       clone[key][innerKey] = mainUser[key][innerKey]
//     }
//   } else {
//     clone[key] = mainUser[key]
//   }
// }
// 2 Spred (... троеточие) оператор (развёртывание). Надо помнить о вложенных объектах
clone = { ...mainUser, work: { ...mainUser.work } }
// 3 Object.assign. Надо помнить о вложенных объектах
// clone = Object.assign({}, mainUser, {work: { ...mainUser.work }} )
// Для плоских объектов доступны 2 варианта записи
// Object.assign(clone, mainUser)
// clone = Object.assign({}, mainUser)
// 4 Преобразование в JSON (строка) и назад в объект. Не надо думать о вложенности, но теряются Symbol и методы
// clone = JSON.parse(JSON.stringify(mainUser))
// console.log(JSON.stringify(mainUser)) 
// 5  structuredClone(). Выдаёт ошибку, если в объекте присутствует метод
// clone = structuredClone(mainUser)

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete" // изменим в нём данные
clone.work.salari = 200

console.log('mainUser.name', mainUser.name) // все ещё John в первоначальном объекте
console.log('mainUser.work.salari', mainUser.work.salari) 
console.log('clone.name', clone.name) // уже Pete
console.log('clone.work.salari', clone.work.salari) 

mainUser.sayHi()
clone.sayHi()

// Стрелочные функции не имеют своего this
console.log(this)
const arrow = () => {
  // @ts-ignore
  console.log(this)
}
arrow()

function sayAnyfing() {
  // @ts-ignore
  console.log(this.name)
  const arrow = () => {
    // @ts-ignore
    console.log(this)
  }
  arrow()
}
mainUser.sayAnyfing()
clone['sayAnyfing']()
mainUser.arrowMethod()

let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep: function () { // показывает текущую ступеньку
    console.log(this.step)
    return this
  }
}

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Чаще всего цепочка вызовов продолжается с новой строки
ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep() // 0 
// Добавили к методам возврат this (текущий объект)

// !Объекты.Основы ***ПРОПУСКАЕМ***
// !Конструктор, оператор "new"
// !Опциональная цепочка '?.'
// !Тип данных Symbol
// !Преобразование объектов в примитивы

type Post = {
  h1: string,
  image: string,
  text: string,
  paragraph?: string,
  tags: Array<string>,
  author?: Record<string,string>
}

const posts: Array<Post> = [
  {
    "h1": '121dfsafsd',
    image: 'sdfsdf.jpg',
    text: 'sdfsffsddfs \n dfsdsdfsfs',
    tags: [],
    author: {
      name: 'author name'
    }
  },
  {
    h1: '121dfsafsd1',
    image: 'sdfsdf.jpg',
    text: 'sdfsffsddfs2',
    tags: ['fsfds', 'sfsdf'],
    author: {
      nic: 'author nic'
    }
  }
]

for (let post of posts) {
  post.paragraph = post.text.split('\n')[0]
  document.write(`<h2>${post.h1}</h2>`)
  // let author
  // if (post.author) {
  //   author = post.author.name ? post.author.name.toUpperCase() : post.author.nic.toUpperCase()
  // }
  const author = post?.author?.name ? post.author.name.toUpperCase() : post?.author?.nic.toUpperCase()
  document.write(`<p>${author}</p>`)
  document.write(`<br>`)
  for (let i = 0; i < post.tags?.length; i++ ) {
    document.write(post.tags?.pop() as string)
    }
    document.write(`<br>`)
  
}

console.log(posts)

const userObj = { 
  // address: {}
} as any // пользователь без свойства "address"

// Мы НЕ можем использовать ?. для записи, т.к. опциональная цепочка ?. не имеет смысла в левой части присваивания
// userObj?.address?.street = 'roz' // Левая часть выражения присваивания не может быть обращением к необязательному свойству
// то же самое что написать undefined = 'roz'
// Так создаются сложные объекты необходимой конфигурации

let street // может быть, а может и не быть

if (street && userObj.address) {
  userObj.address.street = street
} else if (street && !userObj.address) {
  userObj.address = {}
  userObj.address.street = street
}

// console.log(userObj.address.street) // Ошибка!
console.log(userObj.address ? userObj.address.street : undefined) // развёрнутая запись
console.log(userObj.address?.['street']?.name) // сокращённая запись

// fetch('http://jservice.io/api/random?count=1').
//   then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//     data = []
//     console.log(data[0]?.category?.id)
//   })

console.log("\"Привет\"")
console.log(JSON.stringify(posts))

// Синтаксис опциональной цепочки?.имеет три формы:

// obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
// obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
// obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.

// Мы должны использовать ?. осторожно, только там, где по логике кода допустимо, что левая часть не существует. Чтобы он не скрывал от нас ошибки программирования, если они возникнут

let billion = 1e9  // 1 миллиард, буквально: 1 и 9 нулей
// Другими словами, "e" производит операцию умножения числа на 1 с указанным количеством нулей
// 1e3 = 1 * 1000
// 1.23e6 = 1.23 * 1000000
console.log('1000000000 == 1e9', 1000000000 == 1e9) // true
console.log('0.000001 == 1e-6', 0.000001 == 1e-6) // true
// отрицательное число после "e" подразумевает деление на 1 с указанным количеством нулей
// 1 делится на 1 с 3 нулями
// 1e-3 = 1 / 1000(=0.001)
// 1.23 делится на 1 с 6 нулями
// 1.23e-6 = 1.23 / 1000000(=0.00000123)

// Шестнадцатеричные, двоичные и восьмеричные числа
// 0x - префикс для записи в шестнадцатеричной системе счисления
console.log('0xff', 0xff) // 255

// 0b - префикс для записи в двоичной системе счисления
console.log('0b10010', 0b10010) // 18

// 0o - префикс для записи в восьмеричной системе счисления
console.log('0o377', 0o377) // 255

console.log('0xff === 0o377', 0xff === 0o377) // true

// Метод toString(base)
// base может варьироваться от 2 до 36 (по умолчанию 10).
console.log('255..toString(2)', 255..toString(2))
console.log('255..toString(8)', 255..toString(8))
console.log('255..toString(16)', 255..toString(16))

// Округление
// Одна из часто используемых операций при работе с числами – это округление.

// В JavaScript есть несколько встроенных функций для работы с округлением:

// Math.floor
// Округление в меньшую сторону: 3.1 становится 3, а - 1.1 — -2.
console.log('Math.floor(3.1)', Math.floor(3.1))
// Math.ceil
// Округление в большую сторону: 3.1 становится 4, а - 1.1 — -1.
console.log('Math.ceil(3.1)', Math.ceil(3.1))
// Math.round
// Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а - 1.1 — -1.
console.log('Math.round(3.5)', Math.round(3.5))
// Math.trunc(не поддерживается в Internet Explorer)
// Производит удаление дробной части без округления: 3.1 становится 3, а - 1.1 — -1.
console.log('Math.trunc(3.6)', Math.trunc(3.6))

// Округление до n-го знака

// 1 способ
// Умножить и разделить. 
// Например, чтобы округлить число до второго знака после запятой, мы можем умножить число на 100, вызвать функцию округления и разделить обратно
console.log('Math.floor(1.23456 * 100) / 100', Math.floor(1.23456 * 100) / 100) // 1.23456 -> 123.456 -> 123 -> 1.23)

// 2 способ
// Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата
console.log('1.23656.toFixed(2)', 1.23656.toFixed(2)) // '1.24'
console.log('90..toFixed(2)', 90..toFixed(2)) // '90.00'

console.log("90000.00.toLocaleString('ru-RU')", 90000.00.toLocaleString('ru-RU')) // '90 000'

// Потеря точности
console.log(0.1.toFixed(20) ) // 0.10000000000000000555

// Можно ли обойти проблему ? Конечно, наиболее надёжный способ — это округлить результат используя метод toFixed(n):


console.log('0.1 + 0.2', 0.1 + 0.2); // 0.30000000000000004
console.log('+(0.1 + 0.2).toFixed(2)', +(0.1 + 0.2).toFixed(2)) // 0.30000000000000004

// Проверка: isFinite и isNaN
// Помните эти специальные числовые значения?

// Infinity (и -Infinity) — особенное численное значение, которое ведёт себя в точности как математическая бесконечность ∞.
// NaN представляет ошибку.

// Эти числовые значения принадлежат типу number, но они не являются «обычными» числами, поэтому есть функции для их проверки:

// isNaN(value) преобразует значение в число и проверяет является ли оно NaN:

console.log('isNaN(NaN)', isNaN(NaN)) // true
// @ts-ignore
console.log('isNaN("str")', isNaN("str")) // true
// Нужна ли нам эта функция ? Разве не можем ли мы просто сравнить === NaN ? К сожалению, нет.Значение NaN уникально тем, что оно не является равным ничему другому, даже самому себе:

// @ts-ignore
console.log('NaN === NaN', NaN === NaN) // false

// isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е.не NaN / Infinity / -Infinity:

// @ts-ignore
console.log('isFinite("15")', isFinite("15")); // true
// @ts-ignore
console.log('isFinite("str")', isFinite("str")); // false, потому что специальное значение: NaN
console.log('isFinite(Infinity)', isFinite(Infinity)); // false, потому что специальное значение: Infinity

// Методы Number.isNaN и Number.isFinite – это более «строгие» версии функций isNaN и isFinite. Они не преобразуют аргумент в число, а наоборот – первым делом проверяют, является ли аргумент числом (принадлежит ли он к типу number).
// Не стоит считать Number.isNaN и Number.isFinite более «корректными» версиями функций isNaN и isFinite. Это дополняющие друг-друга инструменты для разных задач.

// Сравнение Object.is
// Существует специальный метод Object.is, который сравнивает значения примерно как ===, но более надёжен в двух особых ситуациях:

// Работает с NaN: 
console.log('Object.is(NaN, NaN)', Object.is(NaN, NaN)) //, здесь он хорош.
//   Значения 0 и - 0 разные: 
console.log('Object.is(0, -0)', Object.is(0, -0)) // это редко используется, но технически эти значения разные.
// Во всех других случаях Object.is(a, b) идентичен a === b.

// parseInt и parseFloat

console.log('parseInt(\'0xff\', 16)', parseInt('0xff', 16))

// Правильное округление 6.35
console.log(6.35.toFixed(20)) // 6.34999999999999964473
console.log(Math.round(6.35 * 10) / 10) // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// Случайное число с выровненной вероятностью появления
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min - 0.5)
}

console.log('Math.min(1,1,5,7,8,15,47,32)', Math.min(1, 1, 5, 7, 8, 15, 47, 32))
console.log('Math.max(1,1,5,7,8,15,47,32)', Math.max(1, 1, 5, 7, 8, 15, 47, 32))
console.log('Math.max(...[1, 1, 5, 7, 8, 15, 47, 32])', Math.max(...[1, 1, 5, 7, 8, 15, 47, 32])) // Можем развернуть массив используя spred оператор

// 10. Запросите у пользователя целое число и выведите в ответ, четное число или нет.В задании используйте логические операторы. В задании не надо использовать if или switch

// let numFromUser = +(prompt('Введите целое число') as string)
// const evenOdd = (numFromUser % 2 == 0 && 'четное') || 'не четное' 
// console.log(evenOdd)

let guestList = `Guests:
* John
* Pete
* Mary
`

console.log(guestList)

// 'sdfsdfdf\'sd'
// "sdfsdfdf\"sd"

// 'dsfsdfs "dsfsfd" fdssdf'
// "sdfsdf sdf 'dfsfsfd' fdsfds"

// `fgdfg 'sdfsfsd'sdfsdf "sdfsdfsd" sfd`

console.log(`My\n`.length) // 3 (\n - один спецсимвол)

let testStr = `Hello`

// получаем первый символ
console.log('testStr[0]',testStr[0]) // H
console.log('testStr.at(0)',testStr.at(0)) // H

// получаем последний символ
console.log('testStr[testStr.length - 1]', testStr[testStr.length - 1]) // o
console.log('testStr.at(-1)', testStr.at(-1)) // o

for (let char of "Hello") {
  console.log(char) // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}

testStr = 'Hi sfdffds';
console.log(testStr)

// testStr[0] = 'h'; // ошибка. Разрешено только чтение
testStr = testStr[0].toLowerCase() + testStr.slice(1, 8) + testStr[8].toUpperCase() + testStr.slice(9) // заменяем строку
console.log(testStr)

console.log('Interface'.toUpperCase()) // INTERFACE
console.log('Interface'.toLowerCase()) // interface

//  Поиск подстроки

// Первый метод — str.indexOf(substr, pos).

// Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо - 1 при отсутствии совпадений.

testStr = 'Widget with id'

console.log('testStr.indexOf(\'Widget\')', testStr.indexOf('Widget')) // 0, потому что подстрока 'Widget' найдена в начале
console.log('testStr.indexOf(\'widget\')', testStr.indexOf('widget')) // -1, совпадений нет, поиск чувствителен к регистру

console.log('testStr.indexOf("id")',testStr.indexOf("id")) // 1, подстрока "id" найдена на позиции 1 (..idget with id)

let index = 0 
while (true) {
  index = testStr.indexOf("id", index)
  if (index!=-1) {
    console.log('Подстрока "id" найдена на позиции', index)
    index++
  } else {
    break
  }
}

// str.lastIndexOf(substr, position)
// Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.

// Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до(включительно) определённой позиции.

console.log('testStr.lastIndexOf("id")', testStr.lastIndexOf("id"))

// includes, startsWith, endsWith

console.log("Widget with id".includes("Widget")) // true

console.log("Hello".includes("Bye")) // false

console.log("Midget".includes("id")) // true
console.log("Midget".includes("id", 3)) // false, поиск начат с позиции 3

console.log("Widget".startsWith("Wid")) // true, "Wid" — начало "Widget"
console.log("Widget".endsWith("get")) // true, "get" — окончание "Widget"


console.log("Widget".endsWith("get") ? 'Строка "Widget" заканчивается на подстроку "get"' :'Строка "Widget" не заканчивается на подстроку "get"') 

// Получение подстроки

// ДОСТАТОЧНО ЗАПОМНИТЬ slice
// str.slice(start[, end])
// Возвращает часть строки от start до(не включая) end.

console.log('"Widget with id".slice(7)', testStr.slice(7))
console.log('"Widget with id".slice(1,3)', testStr.slice(1,3))

console.log('"Widget with id".slice(-2)', testStr.slice(-2))

// str.substring(start[, end])
// Возвращает часть строки между start и end(не включая) end.

// Это — почти то же, что и slice, но можно задавать start больше end.
// Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами.

console.log('"Widget with id".substring(7)', testStr.substring(7))
console.log('"Widget with id".substring(3, 1)', testStr.substring(3, 1))

// Отрицательные значения substring, в отличие от slice, не поддерживает, они интерпретируются как 0
console.log('"Widget with id".substring(-2)', testStr.substring(-2)) // Widget with id

// str.substr(start[, length])
// Возвращает часть строки от start длины length.
// В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции

console.log('"Widget with id".substr(7)', testStr.substr(7))
console.log('"Widget with id".substr(3, 1)', testStr.substr(1, 2))

console.log('"Widget with id".substr(-2)', testStr.substr(-2))

console.log('z > Z', 'z'>'Z') // true
console.log('"z".codePointAt(0)',"z".codePointAt(0)) // 122
console.log('"Z".codePointAt(0)',"Z".codePointAt(0)) // 90
console.log('"😫".codePointAt(0)', "😫".codePointAt(0)) // 128555
console.log('"😫".length', "😫".length) // 2

console.log('String.fromCodePoint(90)',String.fromCodePoint(90)) // Z
console.log('String.fromCodePoint(90)', String.fromCodePoint(128555)) // 😫

str = ''

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// #### Правильное сравнение строк ####

// str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:

// Отрицательное число, если str меньше str2.
// Положительное число, если str больше str2.
// 0, если строки равны.
  
console.log('Österreich'>'Zealand'); // true. Сравнение по кодам символов
console.log('Österreich'.localeCompare('Zealand')); // -1. Сравнение по положению в алфавите

// Методы replace и replaceAll возвращают новую строку 

str = 'Ослик Иа-Иа посмотрел на виадук'
console.log(str.replace('Иа', 'Юю')) // меняет только первое совпадение
console.log(str.replaceAll('Иа', 'Юю')) // меняет только первое совпадение
console.log(str) // изначальная строка осталась той же самой
str = str.replaceAll('Иа', 'Юю') // заменили старую строку новой
console.log(str) // новая строка

// метод split(simb) разбивает строку на массив строк по символу-разделителю simb
console.log(str.split(' '))
// метод join(simb) соединяет массив в строку символом-разделителем simb
console.log(str.split(' ').join('_'))

console.log([0,1,2,3,5,5].join('_^^_'))

console.log('"   s   t   r    ".trim()', "   s   t   r    ".trim()) // убирает пробелы в начале и конце строки
console.log('"abc".repeat(3)', "abc".repeat(3))


// ########### Массивы ###########

// Существует два варианта синтаксиса для создания пустого массива:

let arr = new Array()
console.log('new Array()',arr)
arr = new Array(12,15,35)
console.log('new Array(12,15,35)',arr)
arr = new Array(10) // Если указать только одно число, то создаствя постой массив на n эелементов
console.log('Array(10)',arr)
arr = []
console.log('[]',arr)
arr = [12, 15, 35]
console.log('[12, 15, 35]',arr)
arr = [10]
console.log('[10]',arr)

// Элементы массива нумеруются, начиная с нуля.
// Мы можем получить элемент, указав его номер в квадратных скобках:

let fruits = ["Яблоко", "Апельсин", "Слива"];

console.log('fruits = ["Яблоко", "Апельсин", "Слива"]')
console.log('fruits[0]',fruits[0]) // Яблоко
console.log('fruits[1]',fruits[1]) // Апельсин
console.log('fruits[2]',fruits[2]) // Слива
// Так же работает метод at()
console.log('fruits.at(1)', fruits.at(1)) // Апельсин
console.log('fruits.at(-1)', fruits.at(-1)) // Слива

// В отличии от сток, Мы можем заменить элемент:
fruits[2] = 'Груша' // теперь ["Яблоко", "Апельсин", "Груша"]

// …Или добавить новый к существующему массиву:
fruits[3] = 'Лимон' // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]


// Для добавления элементов в массив существуют специальные методы. До индексу объчно не добавляют
// Если надо добавить элемент в конец массива, можем использовать один из вариантов:
fruits.push('Слива')
fruits[fruits.length] = 'Слива'

// Общее число элементов массива содержится в его свойстве length:
console.log(fruits) // ['Яблоко', 'Апельсин', 'Груша', 'Лимон', 'Слива', 'Слива']
console.log(fruits.length) // 6

// Массивы ведут себя так же как объекты в плане того, что значения хранятся по ссылке
const fruits2 = fruits // Сохранили в переменную fruits2 ссылку на массив из переменной fruits
fruits2.push('Банан')
console.log(fruits) // в массив переменной fruits добавился ещё один элемент

// @ts-ignore
console.log('[]==[]',[]==[]) // Всегда false, потому что ссылки разные

console.log('{}.toString()', {}.toString()) //[object Object]
console.log('[1,2,[3,4],function() {}, {}].toString()', [1,2,[3,4],function() {}, {}].toString())

const arr1 = [1,'dasd',[1,2,['fdgdfg',43]],{a:12}]
const arr2 = [1,'dasd',[1,2,['fdgdfg',43]],{b:20}]

// Подходит для сравнения массивов с примитивными значениями
console.log('arr1.toString() == arr2.toString()', arr1.toString() == arr2.toString()) 

const arr3 = [1,'dasd',[1,2,['fdgdfg',43]],[12,35]]
console.log("arr3", arr3) 
// Самы простой способ сделать сложный массив, состоящий из примитивов, плоским
console.log("arr3.split(',')", arr3.toString().split(',')) 

console.log('fruits', fruits) // (7) ['Яблоко', 'Апельсин', 'Груша', 'Лимон', 'Слива', 'Слива', 'Банан']
console.log('fruits[7]', fruits[7]) // undefined
console.log('fruits[-1]', fruits[-1]) // undefined

// Таким образом, самый простой способ очистить массив – это arr.length = 0

fruits.length = 3 // Изменили количество элементов в массива. Все, что не вошли,- исчезли
fruits.length = 7 // Если увеличить длину массива, появятся новые индексы, но элементы будут пустыми
console.log('fruits', fruits) // (3) ['Яблоко', 'Апельсин', 'Груша']

// fruits.length = -1 Ошибка. Длина массва не может быть меньше 0

// Методы pop/push, shift/unshift
// Примерная реализация, чтобы понять, что делают эти методы

// pop и shift удаляют первый(shift) или последний(pop) элемент и возвращают его значение
// Эффективность
// Методы push / pop выполняются быстро, а методы shift / unshift – медленно

function pop(arr: any[]) {
  const el = arr[arr.length-1] // читаем последний элемент
  arr.length = arr.length - 1  // удаляем последний элемент
  return el                    // возвращаем последний элемент
}

function shift(arr: any[]) {
  const el = arr[0]    // читаем первый элемент
  arr = arr.slice(1)  // удаляем первый элемент
  return el            // возвращаем первый элемент
}

// push и unshift добавляют элементы в начало(unshift) или конец(push) массива и возвращают новую длинну массива

function push(arr: any[], elements: any[]) {
   arr = [...arr, ... elements]
   return arr.length
}

function unshift(arr: any[], elements: any[]) {
   arr = [... elements, ...arr]
   return arr.length
}

// Движок JavaScript старается хранить элементы массива в непрерывной области памяти, один за другим, благодаря чему массивы работают очень быстро

// Но если мы начнём работать с массивом, как с обычным объектом, то Способы оптимизации, используемые для массивов, в этом случае не подходят, поэтому они будут отключены и никакой выгоды не принесут

// !Варианты неправильного применения массива:
// !Добавление нечислового свойства, например: arr.test = 5.
// !Создание «дыр», например: добавление arr[0], затем arr[1000](между ними ничего нет).
// !аполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.

// Массив следует считать особой структурой, позволяющей работать с упорядоченными данными.Для этого массивы предоставляют специальные методы.Массивы тщательно настроены в движках JavaScript для работы с однотипными упорядоченными данными, поэтому, пожалуйста, используйте их именно в таких случаях.Если вам нужны произвольные ключи, вполне возможно, лучше подойдёт обычный объект { }

// ### Перебор элементов ###
// Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам:

arr = ["Яблоко", "Апельсин", "Груша"]

console.log('Классический цикл for', arr)
for (let i = 0; i < arr.length; i++) {
  console.log('arr[',i,']', arr[i])
}

// Но для массивов возможен и другой вариант цикла, for..of:

fruits = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям. Нет доступа к индексам
console.log('for .. of', fruits)
for (let fruit of fruits) {
  console.log('fruit', fruit);
}
// Цикл for..of не предоставляет доступа к номеру текущего элемента, только к его значению, но в большинстве случаев этого достаточно. А также это короче

// Технически, так как массив является объектом, можно использовать и вариант for..in:
arr = ["Яблоко", "Апельсин", "Груша"];
console.log('for .. in', arr, 'для массивов не используем!')
for (let key in arr) {
  console.log('arr[',key,']', arr[key]); // Яблоко, Апельсин, Груша
}

// !Но на самом деле это – плохая идея.Существуют скрытые недостатки этого способа:

// Цикл for..in выполняет перебор всех свойств объекта, а не только цифровых.

// В браузере и других программных средах также существуют так называемые «псевдомассивы» – объекты, которые выглядят, как массив.То есть, у них есть свойство length и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны.Тем не менее, цикл for..in выведет и их.Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие «лишние» свойства могут стать проблемой.

// !Цикл for..in оптимизирован под произвольные объекты, не массивы, и поэтому в 10 - 100 раз медленнее.Увеличение скорости выполнения может иметь значение только при возникновении узких мест.Но мы всё же должны представлять разницу.
// !В общем, не следует использовать цикл for..in для массивов

// Многомерные массивы
// Массивы могут содержать элементы, которые тоже являются массивами.Это можно использовать для создания многомерных массивов, например, для хранения матриц:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(matrix[1][1]) // 5, центральный элемент

console.log('fruits', fruits)
arr = [...fruits] // Копируем массив
fruits.push('Кокос')
console.log('fruits', fruits) 
console.log('arr', arr) // arr не изменился