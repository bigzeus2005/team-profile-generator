const Manager = require('../lib/manager');

describe('Manager', () => {
  let testManager = new Manager('name', 5, 'email@gmail.com', 8035469848)
  it('Should return name', () => {
    expect(testManager.getName()).toBe('name');
  });
  it('Should return id', () => {
    expect(testManager.getId()).toBe(5);
  });
  it('Should return email', () => {
    expect(testManager.getEmail()).toBe('email@gmail.com');
  });
  it('Should return Number', () => {
    expect(testManager.getOfficeNumber()).toBe(8035469848);
  });
  it('Should return Role', () => {
    expect(testManager.getRole()).toBe('Manager');
  });
});