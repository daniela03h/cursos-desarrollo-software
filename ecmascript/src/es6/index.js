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
