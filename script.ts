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
