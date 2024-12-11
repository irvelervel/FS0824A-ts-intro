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
// TIPI DI DATO COMPLESSI
// ARRAY
var arrayOfNames = ['Massimo', 'Serena', 'Giulia'];
arrayOfNames.push('Patricia');
var arrayOfNumbers = [1, 2, 3];
arrayOfNumbers.splice(0, 1, 100); // toglie l'1 e lo sostituisce con 100
console.log(arrayOfNumbers);
var mixedArray = ['Massimo', 100];
var mixedArray2 = ['Massimo', 100]; // <-- stessa cosa utilizzando l'Alias SpecialType
var mixedArray3 = []; // senza specificare il tipo, la deduzione di TS non avrebbe mai potuto capire che questo array inizialmente vuoto avrebbe dovuto poter ospitare sia stringhe che numeri
mixedArray3.push('stefano');
mixedArray3.push(1000);
// metodo alternativo per dichiarare un array
var array1 = [];
var array2 = [];
// TUPLA
// una tupla è una dichiarazione più stringente di un array, nel quale forniamo i tipi per ogni valore individualmente e ne definiamo implicitamente anche la lunghezza
// array normale
var arr1 = [100, 'mario', 10];
// tupla
var tuple1 = ['francesco', 5, 'francois'];
arrayOfNames.forEach(function (n) {
    console.log(n.slice(0, 2));
});
mixedArray2.forEach(function (boh) {
    // mixedArray2 è un array misto, di stringhe o numeri
    // "boh."" qui mi mostrerebbe i metodi COMUNI tra array e stringhe (per non sbagliare)
    // però se vado a specificare che boh sia una stringa...
    if (typeof boh === 'string') {
        // ...mi farà vedere tutti i metodi disponibili per le stringhe
        boh.toUpperCase();
    }
    else {
        // ...mi farà vedere tutti i metodi disponibili per i numeri
        boh.toPrecision(2);
    }
});
// OGGETTI
var pet1 = {
    species: 'Dog',
    breed: 'Labrador',
    age: 4,
};
console.log(pet1.species.concat('go'));
var pet2 = {
    breed: 'Shorthair',
    species: 'Cat',
    age: 3,
};
var pet3 = {
    breed: 'Cocorita',
    species: 'Parrot',
    age: 'età sconosciuta',
};
console.log(pet3.age);
var teacher1 = {
    name: 'Federico',
    modules: ['U4'],
};
var teacher2 = {
    name: 'Marco',
    modules: ['U1', 'U2'],
    geoArea: {
        region: 'Lazio',
        city: 'Rome',
    },
};
var arrayOfTeachers = [];
arrayOfTeachers.push(teacher1);
arrayOfTeachers.push(teacher2);
// arrayOfTeachers.push('mario') // <-- errore, posso aggiungerci solamente docenti
var arrayOfModules = arrayOfTeachers.map(function (t) {
    return t.modules;
});
var backendTeacher1 = {
    name: 'Gianluigi',
    modules: ['U5'],
    backendLanguages: ['PHP', 'Java'],
    geoArea: {
        region: 'FVG',
        city: 'Trieste',
    },
};
var addr1 = {
    street: 'Via del molo',
    civicNumber: 5,
    zipCode: 35782,
    city: 'Viareggio',
    area: 'Italy',
};
var addr2 = {
    street: 'Via Roma',
    civicNumber: 1,
    zipCode: 34752,
    city: 'Viterbo',
    area: 'Italy',
};
var addr3 = {
    street: 'Bullets Street',
    civicNumber: 1342,
    zipCode: '5GFH1',
    city: 'Nashville',
    area: {
        state: 'Tennessee',
        country: 'USA',
    },
};
