function newFunction(name, age, country) {
  var name = name || 'daniela';
  var age = age || 28;
  var country = country || 'CO';
  console.log(name, age, country);
}

// es6

function newFunction2(name = 'daniela', age = 28, country = 'CO') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('pistacho', '6', 'CO');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
  'Qui consequatur. Commodi. Ipsum vel duis yet minima \n' +
  'Otra frase epica que necesitamos.';

// es6
let lorem2 = `otra frase epica que necesitamos  
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: 'daniela',
  age: 28,
  country: 'CO',
};

console.log(person.name, person.age);

let { name, age } = person;
console.log(name, age);

let team1 = ['pistacho', 'daniela', 'felipe'];
let team2 = ['marco', 'victor', 'sofia'];

let education = ['alejandro', ...team1, ...team2];

console.log(education);

{
  var globalVar = 'Global Var';
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a'; // no me ejecuta por esta en constante o debo de cambiar por var


let name = 'daniela';
let age = 28;

//es5
obj = { name: name, age: age};

//es6
obj2 = { name, age };

console.log(obj2);

const  names = [
  {name: 'Daniela', age: 28}
  {name: 'Felipe', age: 34}
]

let listOfNames = names.map(function (item) {
  console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  ...
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));

class calculator {
  constructor(){
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA,valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2,2));

import { hello } from './module';

hello();

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
 if (true) {
  yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);