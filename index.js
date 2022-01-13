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
        message: 'What is the name of the team member?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'what is their id number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is their email address?'
    },
    {
        type: 'list',
        name: 'role',
        choices: ['Engineer','Intern','Manager']
    }
];

const promptUser = () => {
    inquirer.prompt(userQuestions);
};

promptUser();