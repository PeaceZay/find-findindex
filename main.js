"use strict";

const { findSourceMap } = require("module");

// let i = 0;

// do { 
//     console.log(i)
//     i++;
// } while (i <= 1000);

// let person = {
//     firstName: "Jane",
//     lastName: "Doe",
//     birthDate: "Jan 5, 1925",
//     gender: "female"
// };

// let keys = Object.keys(person)
// console.log('Keys ', keys)

// let entries = Object.entries(person)
// console.log('Entries', entries)

// let arrayOfPersons = {
//     firstName: "Larry",
//     lastName: "Hoover",
//     birthDate: "Nov 30, 1950",
//     gender: "male",

//     firstName: "Mark",
//     lastName: "Hammil",
//     birthDate: "Sept 25, 1951",
//     gender: "male",

//     firstName: "Angelina",
//     lastName: "Jolie",
//     birthDate: "June 4, 1975",
//     gender: "female",

//     firstName: "Margot",
//     lastName: "Robbie",
//     birthDate: "July 2, 1990",
//     gender: "female"
// }
// for(let i of arrayOfPersons) {
//     if(birthDate )
// }
let array1 = ["A","B","C","D", "E"]
/**The find function takes in a list of things (an array), and takes in a criteria (a callback function)
 * then runs through each of the things in the list, compares them to the criteria
 * then returns the first one that meets the criteria (critera=condition of being true)
 */

/** 
 * function will loop through every element in the array
 * and return the first one that meets the callback criteria
 * @param {array} array the function is called on
 * @param {function} callback function to be infoked for each element in 
 * the array to find the query defined in the callback function
 * @returns the first element matching the criteria, or undefined
 */

// Define the function and parameters.
// Loop through array
// find criteria
// return the first one that meets the criteria
// if criteria is not met, return undefined
const findMe = (arr, callback) => {

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            return arr[i];
        } 
    }
    return undefined
}

console.log(findMe(array1, el => el == "B"))

function findC(el){
    el == "C"
}
console.log(findMe(array1, findC))

// let p = new Map();
// p.set('key','value' )

