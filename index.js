// tutto quello che già conosciamo di JS è sfruttabile anche in TS!
console.log('Hello, TS!');
var teacher = {
    name: 'Stefano',
};
console.log('AGAIN');
console.log('AGAIN 2');
// console.log(teacher.role)
// TIPI DI DATO PRIMITIVI IN TS
// string
// boolean
// number
// undefined
// null
// any <-- !DANGER!
var myName = 'Stefano';
var myAge = 18;
console.log(myName.toUpperCase());
// const course: string = 100 // <-- errore di assegnazione!
var anotherName = 'Mario';
console.log(anotherName.toUpperCase());
// console.log(myAge.toUpperCase())
// TS molte volte, anche senza l'esplicita assegnazione di un tipo (es. ":string"),
// è in grado autonomamente di risalire al corretto tipo di una variabile, grazie
// alla sua assegnazione del valore. Questa capacità viene detta "TYPE INFERENCE"
var courseName = 'EPICODE';
// courseName = 50 // <-- errore di cambio tipo su variabile!
var whatever = 'QUALCOSA';
whatever = 500;
// console.log(whatever.toUpperCase()) // <-- questa riga provoca errore!
// TS me l'ha lasciato fare perchè con il tipo "any" ho SPENTO i controlli dell'editor
// ...a quel punto tanto vale tornare a scrivere a JS!
// FUNZIONI e TYPE INFERENCE
var sayHello = function () {
    return 'CIAO';
};
// si può anche specificarlo a mano
var sayHello2 = function () {
    return 'CIAO';
};
console.log(sayHello().toLowerCase()); // 'ciao'
// TIPIZZARE I PARAMETRI DELLE FUNZIONI
var addition = function (num1, num2) {
    return num1 + num2;
};
addition(5, 4); // 9
// addition('5', '4') // '54', ma non viene neanche eseguita perchè '5' non è di tipo numerico!
// TYPE UNION
var variable = 500;
variable = 'stefano';
variable = undefined;
var v1 = 0;
var v2 = 1;
var v3 = 'Stefano';
// PARAMETRI OPZIONALI
// indicando su un parametro di una funzione un ? dichiaramo quel parametro NON obbligatorio per la sua esecuzione
var specialGreetings = function (personName, greeting) {
    return (greeting || 'Buongiorno') + ' ' + personName;
};
console.log(specialGreetings('stefano', 'ciao'));
console.log(specialGreetings('luca', 'buonsalve'));
// grazie al secondo parametro dichiarato come opzionale posso invocarla anche solamente con il nome
console.log(specialGreetings('gianmarco'));
