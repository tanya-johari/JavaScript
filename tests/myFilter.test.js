import { myFilter } from '../myFunctions/myFilter';

describe('myFilter function', () => {
  test('should return students with age less than 22', () => {

    // Arrange
    const students = [
      { name: 'Alice', age: 20, grade: 'A' },
      { name: 'Bob', age: 22, grade: 'B' },
      { name: 'Charlie', age: 21, grade: 'C' }
    ];
    
    const expected = [{ name: 'Alice', age: 20, grade: 'A' }, { name: 'Charlie', age: 21, grade: 'C' }];

    // Act
    const result = myFilter(students, (student) => student.age < 22);
    
    // Assert
    expect(result).toEqual(expected);
  });
});
