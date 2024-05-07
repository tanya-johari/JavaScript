function myReduce(arr, callback) {
    let accumulator = arr[0];
    for (let i = 1; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
  }
  
  export { myReduce };
  