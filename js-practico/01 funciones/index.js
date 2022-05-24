let nombre = 'daniela'
let apellido = 'londono'
let nombreUsuarioPlatzi = 'daniela03h'
let edad = 28
let correo = 'daniela0393h@gamil.com'
let mayorDeEdad = true
let dineroAhorrado = 200
let deudas = 100

let fullName = `${nombre} ${apellido}`;
console.log(fullName);
let dineroReal = dineroAhorrado - deudas
console.log(dineroReal);




const miFuncion = (name, lastname, nickname) => {
    let completeName = `${name} ${lastname}`;
    return `Mi nombre es: ${completeName}, pero prefiero que me digas ${nickname}`;
}

console.log(miFuncion('Daniela', 'Londono', 'Dani'));
