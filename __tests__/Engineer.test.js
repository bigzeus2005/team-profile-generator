const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  let testEngineer = new Engineer('name', 5, 'email@gmail.com', 'github')
  it('Should return name', () => {
    expect(testEngineer.getName()).toBe('name');
  });
  it('Should return id', () => {
    expect(testEngineer.getId()).toBe(5);
  });
  it('Should return email', () => {
    expect(testEngineer.getEmail()).toBe('email@gmail.com');
  });
  it('Should return github user', () => {
    expect(testEngineer.getGithub()).toBe('github');
  });
  it('Should return role', () => {
    expect(testEngineer.getRole()).toBe('Engineer');
  });
});