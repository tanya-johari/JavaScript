//Defining custom higher order functions
function myMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray[i] = callback(arr[i]);
    }
    return mappedArray;
}

function myFilter(arr, callback) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

function myReduce(arr, callback) {
    let accumulator = arr[0];
    for (let i = 1; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}


//Example usage
const numbers = [1,2,3,4,5];
//console.log(numbers);
document.body.innerHTML += "<p>Original Array: " + numbers + "</p>";

//Map: double each number
const doubledNumbers = myMap(numbers, 
(num) => num * 2);
// console.log("Mapped array:", doubledNumbers);
document.body.innerHTML += "<p>Mapped Array (double each number): " + doubledNumbers + "</p>";

//Filter: keep only even numbers
const evenNumbers = myFilter(numbers, 
(num) => num % 2 == 0);
// console.log("Filtered array:", evenNumbers);
document.body.innerHTML += "<p>Filtered Array (even numbers): " + evenNumbers + "</p>";

//Reduce: sum of all numbers
const sum = myReduce(numbers, 
(accumulator, current) => accumulator + current);
// console.log("Reduced array:", sum);
document.body.innerHTML += "<p>Reduced Array (sum of all numbers): " + sum + "</p>";

//ForEach: print each number
// console.log("ForEach:");
document.body.innerHTML += "<p>ForEach (printing each number): </p>";
myForEach(numbers, 
(num) => document.body.innerHTML += "<p>" + num + "</p>");