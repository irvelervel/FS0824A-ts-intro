// tutto quello che già conosciamo di JS è sfruttabile anche in TS!
console.log('Hello, TS!')

const teacher = {
  name: 'Stefano',
}

console.log('AGAIN')
console.log('AGAIN 2')

// console.log(teacher.role)

// TIPI DI DATO PRIMITIVI IN TS
// string
// boolean
// number
// undefined
// null
// any <-- !DANGER!

const myName: string = 'Stefano'
const myAge: number = 18

console.log(myName.toUpperCase())

// const course: string = 100 // <-- errore di assegnazione!
const anotherName = 'Mario'
console.log(anotherName.toUpperCase())
// console.log(myAge.toUpperCase())
// TS molte volte, anche senza l'esplicita assegnazione di un tipo (es. ":string"),
// è in grado autonomamente di risalire al corretto tipo di una variabile, grazie
// alla sua assegnazione del valore. Questa capacità viene detta "TYPE INFERENCE"

let courseName = 'EPICODE'
// courseName = 50 // <-- errore di cambio tipo su variabile!

let whatever: any = 'QUALCOSA'
whatever = 500
// console.log(whatever.toUpperCase()) // <-- questa riga provoca errore!
// TS me l'ha lasciato fare perchè con il tipo "any" ho SPENTO i controlli dell'editor
// ...a quel punto tanto vale tornare a scrivere a JS!

// FUNZIONI e TYPE INFERENCE
const sayHello = () => {
  return 'CIAO'
}

// si può anche specificarlo a mano
const sayHello2 = function (): string {
  return 'CIAO'
}

console.log(sayHello().toLowerCase()) // 'ciao'

// TIPIZZARE I PARAMETRI DELLE FUNZIONI
const addition = (num1: number, num2: number) => {
  return num1 + num2
}

addition(5, 4) // 9
// addition('5', '4') // '54', ma non viene neanche eseguita perchè '5' non è di tipo numerico!

// TYPE UNION
let variable: string | number | undefined = 500
variable = 'stefano'
variable = undefined

// TYPE ALIAS
type SpecialType = string | number // iniziale maiuscola, PascalCase

let v1: SpecialType = 0
let v2: SpecialType = 1
let v3: SpecialType = 'Stefano'

// PARAMETRI OPZIONALI
// indicando su un parametro di una funzione un ? dichiaramo quel parametro NON obbligatorio per la sua esecuzione
const specialGreetings = (personName: string, greeting?: string) => {
  return (greeting || 'Buongiorno') + ' ' + personName
}

console.log(specialGreetings('stefano', 'ciao'))
console.log(specialGreetings('luca', 'buonsalve'))
// grazie al secondo parametro dichiarato come opzionale posso invocarla anche solamente con il nome
console.log(specialGreetings('gianmarco'))

// TIPI DI DATO COMPLESSI
// ARRAY
const arrayOfNames = ['Massimo', 'Serena', 'Giulia']
arrayOfNames.push('Patricia')

const arrayOfNumbers = [1, 2, 3]
arrayOfNumbers.splice(0, 1, 100) // toglie l'1 e lo sostituisce con 100
console.log(arrayOfNumbers)

const mixedArray: (string | number)[] = ['Massimo', 100]
const mixedArray2: SpecialType[] = ['Massimo', 100] // <-- stessa cosa utilizzando l'Alias SpecialType

const mixedArray3: SpecialType[] = [] // senza specificare il tipo, la deduzione di TS non avrebbe mai potuto capire che questo array inizialmente vuoto avrebbe dovuto poter ospitare sia stringhe che numeri
mixedArray3.push('stefano')
mixedArray3.push(1000)

// metodo alternativo per dichiarare un array
const array1: string[] = []
const array2: Array<string> = []

// TUPLA
// una tupla è una dichiarazione più stringente di un array, nel quale forniamo i tipi per ogni valore individualmente e ne definiamo implicitamente anche la lunghezza
// array normale
const arr1: (string | number)[] = [100, 'mario', 10]
// tupla
const tuple1: [string, number, string] = ['francesco', 5, 'francois']

arrayOfNames.forEach((n) => {
  console.log(n.slice(0, 2))
})

mixedArray2.forEach((boh) => {
  // mixedArray2 è un array misto, di stringhe o numeri
  // "boh."" qui mi mostrerebbe i metodi COMUNI tra array e stringhe (per non sbagliare)
  // però se vado a specificare che boh sia una stringa...
  if (typeof boh === 'string') {
    // ...mi farà vedere tutti i metodi disponibili per le stringhe
    boh.toUpperCase()
  } else {
    // ...mi farà vedere tutti i metodi disponibili per i numeri
    boh.toPrecision(2)
  }
})

// OGGETTI
const pet1 = {
  species: 'Dog',
  breed: 'Labrador',
  age: 4,
}

console.log(pet1.species.concat('go'))

// INTERFACES
// un'interfaccia è un modello, uno "schema" che definisce proprietà e metodi di un oggetto

// volendo lo sappiamo già fare con i tipi...
// type PetType = {
//   species: string
//   breed: string
//   age: number
// }

// ...ma le interfacce servono soprattutto per indicare la forma degli OGGETTI,
// mentre i type si utilizzano più per le unioni di tipi PRIMITIVI
interface Pet {
  breed: string
  species: string
  age?: number | 'età sconosciuta'
  // ho dichiarato age come proprietà OPZIONALE dell'interfaccia Pet,
  // quindi sto andando a dire che "age" in un oggetto di tipo Pet può
  // essere anche "undefined". Se lo vado invece ad inserire in un oggetto,
  // dovrà avere valore numerico oppure la specifica stringa "età sconosciuta"
}

const pet2: Pet = {
  breed: 'Shorthair',
  species: 'Cat',
  age: 3,
}

const pet3: Pet = {
  breed: 'Cocorita',
  species: 'Parrot',
  age: 'età sconosciuta',
}

console.log(pet3.age)

interface GeoArea {
  region: string
  city: string
}

interface EpicodeTeacher {
  name: string
  modules: string[]
  geoArea?: GeoArea
}

const teacher1: EpicodeTeacher = {
  name: 'Federico',
  modules: ['U4'],
}

const teacher2: EpicodeTeacher = {
  name: 'Marco',
  modules: ['U1', 'U2'],
  geoArea: {
    region: 'Lazio',
    city: 'Rome',
  },
}
