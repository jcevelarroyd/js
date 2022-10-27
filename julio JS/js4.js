// While
let contador = 1;

while (contador < 10) {
    console.log('Valor = ${contador}');
    contador++;
}

// while com decremento
let cont = 10;

while (cont >= 0) {
    console.log('Valor = ${cont}');
    cont--;
}

// do-while
let i = 0;
text = '';
do {
    text += 'O número é ${i}\n';
    i++;
} while (i < 10);
console.log(text);

// For
for (let i = 0; i < 10; i++) console.log('Laço For número: ${i}');

// For - Decremento
for (let i = 10; i > 0; i--) console.log('Laço For número: ${i}');

// Laços de arrays
const frutas = ['apple', 'oranges', 'pears', 10, true];
for (let j = 0; j < frutas.length; j++) console.log('Nome: ${frutas[j]}' /n);

// Array de objetos e laços
const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
         id:2,
         text: 'Meeting with boss',
         isCompleted: true,

    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false,
    },
];

// For overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}