import { myReduce } from '../myFunctions/myReduce';

describe('myReduce function', () => {
  test('should return the oldest student', () => {
    // Arrange
    const students = [
      { name: 'Alice', age: 20, grade: 'A' },
      { name: 'Bob', age: 22, grade: 'B' },
      { name: 'Charlie', age: 21, grade: 'C' }
    ];

    const expected = { name: 'Bob', age: 22, grade: 'B' };

    // Act
    const result = myReduce(students, (oldest, student) => student.age > oldest.age ? student : oldest, students[0]);

    // Assert
    expect(result).toEqual(expected);
  });
});
