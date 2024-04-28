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

//Example usage
const numbers = [1,2,3,4,5];
console.log(numbers);

//Map: double each number
const doubledNumbers = myMap(numbers, 
(num) => num * 2);
console.log("Mapped array:", doubledNumbers);

//Filter: keep only even numbers
const evenNumbers = myFilter(numbers, 
(num) => num % 2 == 0);
console.log("Filtered array:", evenNumbers);