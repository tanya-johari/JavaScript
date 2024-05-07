import { myForEach } from '../myFunctions/myForEach';

describe('myForEach function', () => {
  test('should print student details', () => {
    // Arrange
    const students = [
      { name: 'Alice', age: 20, grade: 'A' },
      { name: 'Bob', age: 22, grade: 'B' },
      { name: 'Charlie', age: 21, grade: 'C' }
    ];

    // Mock console.log
    const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Act
    myForEach(students, (student) => {
      console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
    });

    // Assert
    expect(mockLog).toHaveBeenCalledTimes(students.length);
    expect(mockLog.mock.calls).toEqual([
      [`Name: Alice, Age: 20, Grade: A`],
      [`Name: Bob, Age: 22, Grade: B`],
      [`Name: Charlie, Age: 21, Grade: C`]
    ]);

    // Restore console.log
    mockLog.mockRestore();
  });
});
