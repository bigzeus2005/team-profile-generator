const Employee = require('../lib/employee');

describe('Employee', () => {
  let testEmployee = new Employee('name', 5, 'email@gmail.com')
  it('Should return name', () => {
    expect(testEmployee.getName()).toBe('name');
  });
  it('Should return id', () => {
    expect(testEmployee.getId()).toBe(5);
  });
  it('Should return email', () => {
    expect(testEmployee.getEmail()).toBe('email@gmail.com');
  });
  it('Should return role', () => {
    expect(testEmployee.getRole()).toBe('Employee');
  });
});