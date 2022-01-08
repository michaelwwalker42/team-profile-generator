const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an intern object with a name, id number, email address, and school', () => {
            const intern = new Intern('Mike', '42', 'mike@mikemail.com', 'Arizona');

            expect(intern.name).toEqual('Mike');
            expect(intern.id).toEqual('42');
            expect(intern.email).toEqual('mike@mikemail.com');
            expect(intern.school).toEqual('Arizona');
        });
    });
    describe('getSchool', () => {
        it('should return name of school', () => {            
            const intern = new Intern('Mike', '42', 'mike@mikemail.com', 'Arizona');

            expect(intern.getSchool()).toEqual('Arizona');
        });
    });
    describe('getRole', () => {
        it('should return Intern', () => {
            const intern = new Intern('Mike', '42', 'mike@mikemail.com', 'Arizona');

            expect(intern.getRole()).toEqual('Intern');
        });
    });
})