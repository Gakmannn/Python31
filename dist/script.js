console.log('hello world');
console.log(10 / 0, 'sfdsfsd', false);
var h2 = document.querySelector('h2');
// @ts-ignore Игнорировать предупреждения в следующей строке
setTimeout(function () { h2.innerHTML = '<br class="myClass">Safary'; }, 3000);
// alert('sdfgsdfds')
// Этот комментарий занимает всю строку
/* Пример с двумя сообщениями.
Это - многострочный комментарий.
*/
var message = 1;
message = 2 + 3 + 2;
var daysInWeek = message;
console.log(daysInWeek);
console.log('message =', message);
message = message + 2;
console.log('message = message + 2;', 'message =', message);
message += 2;
console.log('message += 2;', 'message =', message);
