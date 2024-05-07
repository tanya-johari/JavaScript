import { myMap } from '../myFunctions/myMap';

describe('myMap function', () => {
  test('should return an array of student names', () => {
    // Arrange
    const students = [
      { name: 'Alice', age: 20, grade: 'A' },
      { name: 'Bob', age: 22, grade: 'B' },
      { name: 'Charlie', age: 21, grade: 'C' }
    ];

    const expected = ['Alice', 'Bob', 'Charlie'];

    // Act
    const result = myMap(students, (student) => student.name);

    // Assert
    expect(result).toEqual(expected);
  });
});
