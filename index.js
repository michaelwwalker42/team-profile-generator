const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHtml = require('./src/generateHtml');

const team = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?',
        validate: nameInput => {
            if (nameInput) {
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
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the manager's ID number.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
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
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log("Please enter the manager's office number.");
                return false;
            }
        }
    },
];


const employeeQuestions = [
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
        type: 'list',
        name: 'role',
        choices: ['Engineer', 'Intern']
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
            const { name, id, email, officeNumber } = managerInfo;
            const manager = new Manager(name, id, email, officeNumber);
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
            let { name, id, role, email, github, school, addMember } = employeeInfo;
            if (role === "Engineer") {
                let employee = new Engineer(name, id, email, github);
                team.push(employee);
            } else if (role === 'Intern') {
                let employee = new Intern(name, id, email, school);
                team.push(employee);
            }


            if (addMember) {
                addEmployees();
            } else {
                return team;
            }
        });
}

const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Team profile page created');
        }
    })
};



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












