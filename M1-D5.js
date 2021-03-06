/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
const area = function(l1, l2) {
    return console.log(l1 *l2)
}

area(4, 7)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function(val1, val2) {

    if(val1 === undefined || val2 === undefined) {
        console.log("Please insert two arguments")
    } 
    if (val1 === val2) {
        return console.log((val1 + val2) * 3)
    } else {
        return console.log(val1 + val2)
    }
}

crazySum(2, 5)


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function(num) {
    if (num < 19) {
        console.log("Number is less than 19.")
    } else {
        console.log((num-19) * 3);
    }
}

crazyDiff(25)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function(n) {
    if (n >= 20 && n <= 100 && n === 400) {
        return true
    } else {
        return false
    }
}

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
const strivify = function(str) {
    
    if (str === "Strive") {
        console.log(str)
    } else {
        let striveText = "Strive " + str
        console.log(striveText)
    }
}
strivify("Hello")

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
const check3and7 = function(positiveNum) {
    if (positiveNum % 3 == 0 || positiveNum % 7 == 0) {
        console.log("Given number is verified")
    } else {
        console.log("Given number is not matched")
    }
}

check3and7(21)
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
const reverseString = function(givenString) {
    let arrString = givenString.split("")
    let reverseArr = arrString.reverse()
    let arrToString = reverseArr.join(" ")

    console.log(arrToString)
}

reverseString("Hello Striver")

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
const upperFirst = function(givenWord) {
    let arrOfStrings = givenWord.toLowerCase().split(' ')
    
    for (let i = 0; i < arrOfStrings.length; i++) {
        arrOfStrings[i] = arrOfStrings[i].charAt(0).toUpperCase() + arrOfStrings[i].substring(1)
    }
    console.log(arrOfStrings.join(" "))
}

upperFirst("Hello Strivers I am a sentence")

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*//*
const cuttString = function (cuttedString) {
    let firstLetter = cuttedString.charAt(0 + 1)
    let lastLetter = cuttedString.charAt(cuttedString.length - 2)
    let readyString = cuttedString.slice(firstLetter, lastLetter)
    console.log(readyString)
}
 cuttString("Cutted")
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
