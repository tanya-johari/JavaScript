// Importing functions from separate files
import { myMap } from './myMap.js';
import { myFilter } from './myFilter.js';
import { myReduce } from './myReduce.js';
import { myForEach } from './myForEach.js';

// Example usage with complex data
const students = [
  { name: 'Alice', age: 20, grade: 'A' },
  { name: 'Bob', age: 22, grade: 'B' },
  { name: 'Charlie', age: 21, grade: 'C' },
  { name: 'David', age: 23, grade: 'A' },
  { name: 'Eva', age: 25, grade: 'C' }
];

// Map: get names of students
const studentNames = myMap(students, (student) => student.name);
console.log("Student names:", studentNames);

// Filter: get students with age less than 22
const youngStudents = myFilter(students, (student) => student.age < 22);
console.log("Young students(less than 22):", youngStudents);

// Reduce: find the student with the highest age
const oldestStudent = myReduce(students, (oldest, student) => {
  return student.age > oldest.age ? student : oldest;
}, students[0]);

console.log("Oldest student:", oldestStudent);

// ForEach: print student details
console.log("Printing student details:");
myForEach(students, (student) => {
  console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
});
