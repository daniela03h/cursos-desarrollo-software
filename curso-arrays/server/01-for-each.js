const letters = ['a', 'b', 'c'];


// Escrito con for
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}

// Escrito con forEach
letters.forEach(item => console.log('forEach', item))