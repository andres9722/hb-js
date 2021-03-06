'use strict'

let generateRandomColor = () => {
    let r = Math.trunc(Math.random() * 255),
        g = Math.trunc(Math.random() * 255),
        b = Math.trunc(Math.random() * 255),
        json =  { r, g, b }
        
        return json
}

let color = generateRandomColor()
console.log('Generate random color:', color)

let functionalFilterNegativeNumbers = vec => {
    let n = vec.filter(num => num >= 0)
    
    return n
}

let vecFilter = [1, -2, 3, -4, 5, 7]
let filter = functionalFilterNegativeNumbers(vecFilter)
console.log('Filter negative numbers:', filter)

let filterNegativeNumbers = vec => {
    let elements = []
    for (let i = 0; i < vec.length; i++) {
        if(vec[i] >= 0) {
            elements.push(vec[i]);
        }
    }

    return elements
}

let vecFilterFor = [1, -2, 3, -4, 5, 7]
let filterFor = filterNegativeNumbers(vecFilterFor)
console.log('Filter negative numbers with for:', filterFor) 

let functionalMapNumbersIntoStrings = vec => {
    let n = vec.map(num => num.toString())

    return n
}

let vecString = [1, -2, 3, -4, 5]
let map = functionalMapNumbersIntoStrings(vecString)
console.log('map numbers to string:', map)

let mapNumbersIntoStrings = vec => {
    let elements = []
    for (let i = 0; i < vec.length; i++) {
        elements.push(vec[i].toString())
    }

    return elements 
}

let vecStringFor = [1, -2, 3, -4, 5]
let mapFor = mapNumbersIntoStrings(vecStringFor)
console.log('map numbers to string with for:', mapFor)

let printType = data => {
    console.log(typeof data)
}

let data = 2
let type = printType(data)

let twoData = 'Hola'
let type2 = printType(twoData)

let threeData = true
let type3 = printType(threeData)

let isPalindrome = str => {
    let pal = str.replace(/\s/g,'').toLowerCase()
    let cleanString = pal.replace(/[\|&;\$%@"<>\(\)\+,*]/g, "")
    return cleanString == cleanString.split('').reverse().join('')
}

let one = 'Anita &LAva *la tina'
console.log(`${one}: `, isPalindrome(one))

let two = 'o**so'
console.log(`${two}: `, isPalindrome(two))

let three = 'per//ro'
console.log(`${three}: `, isPalindrome(three))

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printName() {
        console.log(`Name: ${this.name}`)
    }
}

const student = new Person('John', 25);
student.printName(); 

let personAge = person => {
    console.log(`Age: ${person.age}`)
}

personAge(student)