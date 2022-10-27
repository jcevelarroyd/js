// JavaScript e DOM
// objeto document
console.log(document);

// Acessar informações
console.log(document.domain);
console.log(document.url);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o título
document.title = 123;
// Criar um elemento <h1>
let heading = document.createElement('H1');
document.body.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';













