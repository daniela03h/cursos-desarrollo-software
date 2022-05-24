import fetch from 'node-fetch'
globalThis.fetch = fetch

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => console.log(json))

const obj = {
    name: 'Daniela',
    age: 28,
    country: 'COL'
};

let {name, ...all } = obj;
console.log(name, all);

const obj = {
    name: 'Daniela',
    age: 28,
};

const obj1 = {
    ...obj,
    country: 'COL'
};

console.log(obj1);


const helloWorld = () => {
    return new Promise((resolve, reject) => {
    (true)
     ? setTimeout(() => resolve('Hello World'), 3000)
     : reject(new Error('Test Error'))
    });
};

helloWorld()
 .then(response => console.log(response))
 .catch(error => console.log(error))
 .finally(() => console.log('Finalizo'))


 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
 const match = regexData.exec('2018-04-20');
 const year = match[1]
 const month = match[2]
 const day = match[3]

 console.log(year, month, day);
 