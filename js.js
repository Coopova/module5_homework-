// Задание 1
//  Напишите программу, которая работала бы следующим образом:
//  в prompt вводится значение. С помощью унарного плюса
//  (арифметический оператор) необходимо преобразовать его в
//  число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
let num = +prompt('Ввод');
console.log(typeof num);

 if(Number.isNaN(num)) {
        console.log('Упс, кажется, вы ошиблись');
}else if (num % 2 === 0) {
        console.log('Четное');
}else {
    console.log('Не четное');
}

// Задание 2
    // Дана переменная Х, которая может принимать любое значение. Написать программу,
    // которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
    // Опишите три случая: когда х = числу, строке или логическому типу. В других случаях 
    // выводите сообщение: «Тип x не определён».

let x = [];

if (typeof x === 'number') {
        console.log('X — число');
}else if (typeof x === 'string') {
        console.log('Это строка');
}else if (typeof x === 'boolean') {
        console.log('Это логический тип');
} else {
        console.log('Тип не определен');
}

// Задание 3
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str = 'Hello'
let reverse = str.split('').reverse().join('');

console.log(reverse);

// Задание 4
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

let number = Math.floor(Math.random()*100);

console.log(number);

// Задание 5
    // Дан произвольный массив. Необходимо вывести количество элементов массива,
    // затем перебрать его и вывести в консоль каждый элемент массива.

let arr = [1 ,2, 3, 'path', 'math', 'floor'];

console.log(arr.length);


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задание 6
    // Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
    // Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

    // Вариант 1

let check = [13, 4, 55, 13, 1, 3,3];

let v = check.every((el)=> check[0] === el);
console.log(v);

// Вариант 2

for (let i = 0; i < check.length; i++) {
    if(check[i] === check[0]) {
        console.log(true);
    }else {
        console.log(false);
    }
}

// Задание 7 
    // Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
    // Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
    // При выполнении задания необходимо учесть, что массив может содержать не только числа,
    // но и, например, знаки, null и так далее.

let arrTwo = [3, 8, null, 246, NaN, 2, 1, 10];
let even = 0;
let odd = 0;
let zero = 0;


for (let i = 0; i < arrTwo.length; i++) {
    if(typeof arrTwo[i] === 'number' && !isNaN(arrTwo[i])) {
        if (arrTwo[i] === 0) {
            zero += 1
        } else if (arrTwo[i] % 2 === 0) {
            even += 1
        } else {
            odd += 1
        }
    }
}

console.log(even);
console.log(odd);
console.log(zero);

// Задание 8
    // Создайте произвольный массив Map. Получите его ключи и выведите
    // в консоль все значения в виде «Ключ — Х, значение — Y».
    // Используйте шаблонные строки.

let xOne = new Map();

xOne.set('samsung', 'black');
xOne.set('lg', 'brown');
xOne.set('iphone', 'green');

for (let name of xOne.keys()) {
    console.log(`Ключ: - ${name}`);
};

for (let prop of xOne.values()) {
    console.log(`Значение: - ${prop}`);
}
