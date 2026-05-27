// AULA 06/05 - INTRODUÇÃO A JAVA SCRIPT

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


numbers.toSorted((a,b) => a- b);
//MAIOR VALOR 
console.log('Maior =', numbers[numbers.length-1]);
//MENOR VALOR 
console.log('Menor =', numbers[0]);

// Aula 13/05 - Funções, array destructuring, spread operator 
console.log(fruits);

const fruits2 = ['kiwi', 'avocado'];
console.log([...fruits2, 'Grape'])

// Spread - ...
console.log([...fruits, ...fruits2]);


///Spread
const fruits3 = [...fruits, ...fruits2];
console.log(fruits3);


//DESAFIO - EXIBIR TODAS AS FRUTAS QUE COMECEM
//COM LETRA A 

const out = [];
const letra = "0";
// for (let i= 0; i< fruits3.length; i++){
//   const fruit = fruits3[i];

// //toLowercase - minuscula, toUppercase - maiuscula 
//   if (fruit[0].toLowerCase() === letra){
//     out.push(fruit);

//   }
    

  
// // }


// let outFind = fruits3.find((fruit) => fruit[0].toLowerCase() === letra );
  

//   console.log(out);


//   //find - retornar a primeira ocorrencias,
// // de acordo com a condição
 
// let outFind = fruits

console.log(outFilter);

//desafio - Exibir o valor da soma de todos os
// numeros de array ' numbens'

console.log(numbers);

//map
numbers.map((number) => {
  soma += number;

});

console.log(soma);

// reduce
console.log(
  numbers.reduce((soma,number) => soma + number)
);

// object
const pessoa = new Object({
  nome: 'Zé vaqueiro', 
  idade: 25, 
  profissao: 'cantor/Compositor'
});

console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

const pessoa2 = { ...pessoa, hobby: 'Vaquejada' };
console.log(pessoa2);

// ATRIBUIÇÃO POR DESESTRUTURAÇÃO
const { nome, idade } = pessoa2;
console.log(nome, idade);

//CONSTRUTOR
function Product(name, sto, ram, price, qty, category){
  this.name = name;
  this.name = sto;
  this.name = ram;
  this.name = price;
  this.name = qty;
  this.name = category;
}

const p1 = new Product('iPhone', 256, 16, 5000, 10, 'Celular');
const p2 = new Product('iPad', 512, 16, 8000, 20, 'Tablet');
const p3 = new Product('Macbook', 1024, 24, 15000, 30, 'Notebook');
const p4 = new Product('iPhone Pro Max', 256, 16, 7000, 15, 'Celular');
const p5 = new Product('iPad Pro', 512, 16, 10000, 25, 'Tablet');
const p6 = new Product('Macbook Pro', 1024, 24, 25000, 35, 'Notebook');

const estoque = [ {...p1}, {...p2}, {...p3}, {...p4}, {...p5}, {...p6}];
console.log(estoque);


/* Desafio 1

 a) valor total de todos os produtos no estoque 

 
 b) Ordene os produtos por nome (crescente/decrescente)
 c) Ordene os produtos por preço (crescente/decrescente)
 d) Filtre proutos de acordo com uma categoria

*/


const valorTotal =  Product.reduce((Product,total => {
  return total + (Product.price * Product.qty);
},0)

 console.log(valorTotal)


 //LETRA B

 const nameCrescente = [...product].sort((a, b) => 
     a.name.localeCompare(b.name)
 );
 
 console.log(nameCrescente)


 const nameDecrescente = [...product].sort((a, b) => 
    b.name.localeCompare(a.name)
 );
 
 console.log(nameDecrescente)

 //LETRA C

 const preçoCrescente = [...product].sort((a, b) => 
     a.price.localeCompare(b.price)
 );
 
 console.log(preçoCrescente)


 const preçoDecrescente = [...product].sort((a, b) => 
    b.preço.localeCompare(a.preço)
 );

 console.log(preçoDecrescente)
 


 










  








