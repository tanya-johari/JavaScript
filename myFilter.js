function myFilter(arr, callback) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  
  // Exporting the function for use in other files
  export { myFilter };
  