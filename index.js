const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const teamGenerator = require('./src/generateTeam');

const employee = [];

const addManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What\'s the managers name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What\'s the managers employee ID number?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'What\'s the managers email?',
      name: 'email',
    },
    {
      type: 'number',
      message: 'What\'s the managers phone number?',
      name: 'phone',
    }
  ])
    .then(({ name, id, email, phone }) => {
      const manager = new Manager(name, id, email, phone);
      employee.push(manager);
      addEmployee();
    });
};

const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['Add Engineer', 'Add Intern', 'Done'],
      name: 'selection',
    }
  ])
    .then((answer) => {
      switch (answer.selection) {
        case 'Add Engineer':
          return addEngineer();
        case 'Add Intern':
          return addIntern();
        case 'Done':
          return writeFile(answer);
      }
    });
};

const addEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the engineer\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the engineer\'s employee ID?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'What is the engineer\'s email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the engineer\'s Github account?',
      name: 'github',
    }
  ])
    .then(({ name, id, email, github }) => {
      const engineer = new Engineer(name, id, email, github)
      employee.push(engineer)
      addEmployee();
    });
};

const addIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the intern\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the intern\'s employee ID?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'What is the intern\'s email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What school are they from?',
      name: 'school',
    }
  ])
    .then(({ name, id, email, school }) => {
      const intern = new Intern(name, id, email, school)
      employee.push(intern)
      addEmployee();
    });
};

const writeFile = () => {
  fs.writeFile('./dist/index.html', teamGenerator(employee), err => {
    if (err) {
      return console.log(err);
    }
    return console.log('HTML built successfully');
  })
};

const init = () => {
  addManager()
};

init();