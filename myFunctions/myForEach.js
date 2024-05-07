function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }
  
  // Exporting the function for use in other files
  export { myForEach };
  