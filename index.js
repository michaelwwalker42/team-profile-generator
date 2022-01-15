// import modules
const inquirer = require('inquirer');
const fs = require('fs');
const validator = require('email-validator');
// class modules
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// module to create the html
const generateHtml = require('./src/generateHtml');

// create array to contain team members
const team = [];

// array for manager questons
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?',
        validate: nameInput => {
            if (nameInput !== '') {
                return true;
            } else {
                console.log('Please enter a name for the manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID number?",
        validate: idInput => {
            if (isNaN(idInput) || idInput === '') {
                console.log("    Please enter a number for the managager's ID.");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
        validate: emailInput => {
            if (!validator.validate(emailInput)) {
                console.log('    Please enter a valid email address.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: officeInput => {
            if (isNaN(officeInput) || officeInput === '') {
                console.log("    Please enter a number for the managager's ID.");
                return false;
            } else {
                return true;
            }
        }
    },
];

// array for employee questions
const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team member?',
        validate: nameInput => {
            if (nameInput !== '') {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their id number?',
        validate: idInput => {
            if (isNaN(idInput) || idInput === '') {
                console.log("    Please enter a number for the employee's ID.");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        validate: emailInput => {
            if (!validator.validate(emailInput)) {
                console.log('    Please enter a valid email address.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        when: (input) => input.role === 'Engineer',
        validate: githubInput => {
            if (githubInput !== '') {
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
            if (schoolInput !== '') {
                return true;
            } else {
                console.log('Please enter a school.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addMember',
        message: 'Would you like to add another member to the team?',
        default: false
    }
];


const addManager = () => {
    console.log(`
    =============
    Add a Manager
    =============
    `);
    return inquirer.prompt(managerQuestions)
        .then(managerInfo => {
            // destructure manager info
            const { name, id, email, officeNumber } = managerInfo;
            // create new manager using Manager class
            const manager = new Manager(name, id, email, officeNumber);
            // add manager to team array
            team.push(manager);
        })
};

const addEmployees = () => {
    console.log(`
    =====================
    Add a New Team Member
    =====================
    `);
    return inquirer.prompt(employeeQuestions)
        .then(employeeInfo => {
            // destructure employee info
            let { name, id, role, email, github, school, addMember } = employeeInfo;
            // conditionals to check for employee roles
            if (role === "Engineer") {
                // create engineer using Engineer class
                let employee = new Engineer(name, id, email, github);
                // add engineer to team array
                team.push(employee);
            } else if (role === 'Intern') {
                // create intern using Intern class
                let employee = new Intern(name, id, email, school);
                // add intern to team array
                team.push(employee);
            }
            // conditional to check to add member to team
            if (addMember) {
                return addEmployees(team);
            } else {
                return team;
            }
        });
}
// create the html file
const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`
========================================================

Team profile created as index.html in the ./dist folder.

========================================================
`);

        }
    })
};

console.log(`
======================
Team Profile Generator
======================
`);

addManager()
    .then(addEmployees)
    .then(team => {
        return generateHtml(team);
    })
    .then(fileContent => {
        return writeFile(fileContent);
    })
    .catch(err => {
        console.log(err);
    });
