// AULA 06/05 - INTRODUÇÃO A JAVA SCRIPT

import { a } from "vitest/dist/chunks/suite.qtkXWc6R";

console.log("Bemn vidos a ppi");

// VARIÁVEIS

let name = "joao";
let age = 17;
let isStudent = true;

const PI = 3.14; //Variavel que nao pode ser alterada - que ao pode mudar o valor
console.log(PI);

// OPERADORES ARITIMETICOS + - / * ** %
let x = 5 + 5; //soma
let y = "5" + 5; // concatenação
let z = "Hello" + 5;

console.log(x ** 2, y, z);
console.log(typeof x);

// Ativar o formatador prettier
// ALT + SHIFT + F]]

//OPERADORES RELACIONAIS
console.log(x != 2); //diferença
console.log("5" == 5); // compara tipo OU valor
console.log("5" === 5); //comparar tipo E valor

//OPERADORES DE INCREMENTO

console.log(x++); // incremeno apos o retorno do valor
console.log(x);

console.log(++x); // incremento antes do retorno do valor

//OPERAÇOES LÓGICAS - && (AND), || (OR), ! (NOT)
let isExpression = (true && 5 + 2 * 3 < 10) || false;
console.log(isExpression);

// if(condition) {
//     // condition === true
// } else {
//     // condition === false

// }

// TEMPLATE STRINGS
let text = `React é 'tudo de bom!' \\
"Programar" é minha vida!
Eu amo o IFRN`;

console.log(text);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

//Array
let fruits = ["Banana", "orange", "Apple", "Mango"];

console.log(fruits.length); //Tamanho

console.log(fruits[0]);

fruits.push("kiwi"); //Insere elementos no final da lista
console.log(fruits);

//Remove e retorna o ultimo elemento
console.log(fruits.pop());
console.log(fruits);

//Remove e retorna o primeiro elemento
console.log(fruits.shift());
console.log(fruits);

//Insere elementos no começo da lista
fruits.unshift("Lemon");
console.log(fruits);

// Argumento 1 - posição
// Argumento 2 - quantos elementos serao inseridos
// Argumentos 3 - Lista de elementos que serao inseridos
fruits.splice(2, 0, "kiwi");
console.log(fruits);

fruits.splice(2, 3);
console.log(fruits);

// DESAFIO - SUBSTITUIR 'APLE' POR 'KIWI'
fruits.splice(2, 1, "kiwi");
console.log(fruits);

// BUSCA INDICE DO ELEMENTO 'KIWI'
let index = fruits.indexOf("Apple");
console.log(index);

fruits.splice(index, 1, "Apple"); // Remove o elemento 'kiwi' da lista
console.log(fruits);

// Ordem crescente
fruits.sort(); // "or " toSorted
console.log(fruits);

// Ordem decrescente
fruits.reverse(); // "or " toReversed
console.log(fruits);

let fruitsSort = fruits.toSorted(); // Não altera array
console.log(fruits);
console.log(fruitsSort);

let fruitsReverse = fruits.toReversed(); // Não altera array
console.log(fruits);
console.log(fruitsReverse);

const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

// DESAFIOS
// Criar um array 'numbers2' que duplique os valores de 'numbers'
// Output: [90,8,18,32,50]

const numbers2 = [];
for (let i = 0; i < numbers.length; i++) {
  numbers2.push(numbers[i] * 2);
}

console.log(numbers);
console.log(numbers2);

const numbers3 = [];
for (let i = 0; i < numbers.length; i++) {
  numbers3.push(numbers[i] * 3);
}

console.log(numbers);
console.log(numbers3);

function myFunction(value, index, array) {
  return value * 2;
}

const numbersMap = numbers.map(myFunction);
console.log(numbersMap);

console.log(numbers.map((number) => number * 2));

console.log(numbers.toSorted((a, b) => a - b)); //C
console.log(numbers.toSorted((a, b ) => b- a)); //D

//MAIOR VALOR 
numbers.toSorted((a,b) => a- b);

//MENOR VALOR 
console.log('Menor =', numbers[0]);