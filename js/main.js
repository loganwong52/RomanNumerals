//NOTES FOR WEEK 1, DAY 2: 5/24/22

// adding floats together
var foo = 0.1
var goo = 0.2
var foop = foo * 100
var goop = goo * 100

var totalPennies = foop + goop
var total = totalPennies/100
console.log(total)

// backticks... doesn't use quotes, but the tilde character...
console.log(`
this is a poem
it has multiple lines
read them all, please
`)

// String Interprelation via backticks
var greeting = 'hello'
var place = 'world'
console.log(`${greeting} ${place}!`)


// variable declaration:
// 1. var - the original way
// 2. const - create a variable that cannot be reassigned
// 3. let - create a variable that can be reassigned

// try to avoid using ==
console.log(null == undefined)
console.log(null === undefined)

// undefined is for when JS needs a value, but needs to give you something
// or accessing an element that's in an array, but there's nothing there

// wheareas null never appears 'naturally'... null is something a human
// assigns a variable. A Programmer has to make something null

// every function has a return value that's undefined, unless specified
// by a human... and the human can make the return value be null

let name = 'Bob'
// object literal
const user = {
    name: 'Alice',      //keys are always assumed to be strings, so you don't need the quotes
    age: 24,
    fav_food: 'pizza',
}

let property = 'age'

console.log(user.name)
console.log(user[property])
console.log(user['fav_food'])

// ! 'not' is a unary operator. Takes 1 operand.
// Math operators +, -, *, /, % are binary operators. Take 2 operands
// ternary operator b/c it needs 3 operands. This is the only ternary operator.
let randomNumber = Math.random()   // rand num btwn 0 and 1
property = randomNumber > .5 ? 'age' : 'name'
// if randNm > .5, property becomes 'age'. Otherwise, property becomes 'name'


const eve = {
    name: 'eve',
    age: 22,
    sayHello: () =>{
        console.log("Hello!")
    },
}

eve.sayHello()  //prints out "Hello!"

const helloWorld = "Hello world!"
console.log(helloWorld.includes('ello'))
console.log(helloWorld.slice(4,8))      //o wo

// copy a string
otherHello = helloWorld.slice()
console.log(otherHello)
// turn a string into array of inidiviual letters
const helloArray = helloWorld.split('')
console.log(helloArray)
// recall: Strings are immutable... 
// so you have to split the string into array, mutate it, then join it back into a string
helloArray[3] = 'z'
helloArray.push('!')
// turn array of letters back into a string
const finalHello = helloArray.join('')
console.log(finalHello)

const numbers = [1,2,3,4,5,6]
for (let i = 0; i < numbers.length; ++i){
    numbers[i] = i
}
for(let num of numbers){
    console.log(num)
    if (num === 3) {break}
}

console.log("")

// alternatively...
numbers.forEach((num) =>{
    console.log(num)
})

//LOOPING THRU OBJECTS
const malory = {
    name: 'malory',
    age: 32,
}
// this will only print out keys (NOT the values)
for (let key in malory){
    console.log(`${key}: ${malory[key]}`)
}

// Arrays are technically objects, so this can also work
for (let key in numbers){
    console.log(numbers[key])
}

// array of functions...
const thingsToDo = {
    wakeUp : () => {console.log("wake up!")},
    breakfast: () => {console.log("eat breakfast")},
    goToClass: () => {console.log("go to class")},
    doHomework: () => {console.log("do homework")},
    goToSleep: () => {console.log("go to sleep")},
    number: 52,
}
// loop thru an array of functions
// here, you CAN use const... but let is more intuitive
// if you use var, that means key can be used outside of and BEYOND the for loop, 
// which isn't what you typically want...
// similarly, if you don't use const, let, or var, it allows key's scope to be global (basically)
for (var key in thingsToDo){
    if(typeof(thingsToDo[key]) === 'function'){
        thingsToDo[key]()
    }else{
        console.log(thingsToDo[key])
    }
}
console.log(key)