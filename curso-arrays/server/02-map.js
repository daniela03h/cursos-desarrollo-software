const letters = ['a', 'b', 'c'];

// Escrito con map
const newArray = letters.map(item => item + '++');

// Escrito con for
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }
console.log('original', letters);
console.log('new', newArray);
