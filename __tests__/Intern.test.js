const Intern = require('../lib/intern');

describe('Intern', () => {
  let testIntern = new Intern('name', 5, 'email@gmail.com', 'school')
  it('Should return name', () => {
    expect(testIntern.getName()).toBe('name');
  });
  it('Should return id', () => {
    expect(testIntern.getId()).toBe(5);
  });
  it('Should return email', () => {
    expect(testIntern.getEmail()).toBe('email@gmail.com');
  });
  it('Should return github user', () => {
    expect(testIntern.getSchool()).toBe('school');
  });
  it('Should return role', () => {
    expect(testIntern.getRole()).toBe('Intern');
  });
});