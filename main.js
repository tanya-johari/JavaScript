//Defining custom higher order functions
function myMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray[i] = callback(arr[i]);
    }
    return mappedArray;
}

//Example usage
const numbers = [1,2,3,4,5];
console.log(numbers);

//Map: double each number
const doubledNumbers = myMap(numbers, 
(num) => num * 2);
console.log("Mapped array:", doubledNumbers);