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
type SpecialType = string | number

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
