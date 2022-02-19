// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time=+prompt("Введіть хвилину від 0 до 59");
// if (time >=0 && time<=14) {
//     console.log('first quarter');
// } else if (time >=15 && time <= 30)
// {
//     console.log('Second quarter');
// } else if (time >=31 && time <=45)
// {
//     console.log('Third quarter');
// } else if (time >=46 && time<= 59)
// {
//     console.log('Fourth quater');
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
//     у яку половину(декаду) місяця потрапляє це число
//     (у першу, другу чи третю).
// let day= +prompt('enter number day of mounth')
// if (day >= 1 && day <= 10) {
//     console.log('first decade')
// } else if (day >= 11 && day <= 20) {
//     console.log('second decade')
// } else if (day >= 21 && day <= 31) {
//     console.log('third decade')
// } else {
//     console.log("incorrectly entered data")
// }
// - У нас є змінна test яка дорівнює true,
// виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = 'flkgjdlfig';
// if (test === true) {
//     console.log('OK');
// } else {
//     console.log('Not OK');
// }
// test ? console.log('OK') : console.log ('Not OK');
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно',
// інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a=+prompt('Type 1, 0, -3');
// if (a!==0) {
//     console.log('OK')
// } else {
//     console.log('not OK')
// }
// (a !== 0) ? console.log('OK') : console.log('Not OK')

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день.
//
// let dayOfweek =+prompt('Type of day of week from 1 to 7')
// switch (dayOfweek) {
//     case 1:
//         console.log('Monday: go to the work');
//         break;
//     case 2:
//         console.log('Tuesday: go to the gym');
//         break;
//     case 3:
//         console.log('Wednesday: go to the date');
//         break;
//     case 4:
//         console.log('Thursday: go to the clinic');
//         break;
//     case 5:
//         console.log('Friday: stay at home');
//         break;
//     case 6:
//         console.log('Saturday: go shopping');
//         break;
//     case 7:
//         console.log('Sunday: relax');
//         break;
//     default:
//         console.log('wrong');
// }

// - Потрібно визначити Високосний рік чи ні.
// Високосні роки діляться націло на 2.
// - Потрібно визначити Високосний рік чи ні.
// Високосні роки діляться націло на 2.
// let dayOfyear= +prompt('quantity day of the year');
// if (dayOfyear%4===0) {
//     console.log('leap year');
// } else {
//     console.log('Usually year');
// }
// (dayOfyear % 4 === 0) ? console.log('leap year') :console.log('Usually year');

// Використовуючи конструкцію if..else, напишіть код,
// кий запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript»,
// то показати: «Правильно!»,
// інакше – відобразити: «Не знаєте? ECMAScript!

// let oficalName=prompt('What is the oficial name JavaScript?');
// if (oficalName==='ECMAScript') {
//     console.log('That is right');
// } else {
//     console.log('Did you know?ECMAScript!');
// }
