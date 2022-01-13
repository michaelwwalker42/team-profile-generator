const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const userQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team member?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their id number?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter and ID number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        when: (input) => input.role === 'Manager',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter an office number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        when: (input) => input.role === 'Engineer',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        when: (input) => input.role === 'Intern',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a school.');
                return false;
            }
        }
    }
];

const promptUser = () => {
    inquirer.prompt(userQuestions);
};

promptUser();