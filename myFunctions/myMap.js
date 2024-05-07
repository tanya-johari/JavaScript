function myMap(arr, callback) {
  const mappedArray = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i]));
  }
  return mappedArray;
}

// Exporting the function for use in other files
export { myMap };
