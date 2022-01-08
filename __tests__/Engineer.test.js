const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an engineer object with a name, id number, email address, and github username', () => {
            const engineer = new Engineer('Mike', '42', 'mike@mikemail.com', 'mike42');

            expect(engineer.name).toEqual('Mike');
            expect(engineer.id).toEqual('42');
            expect(engineer.email).toEqual('mike@mikemail.com');
            expect(engineer.github).toEqual('mike42');
        });
    });
    describe('getGithub', () => {
        it('should return GitHub username', () => {
            const engineer = new Engineer('Mike', '42', 'mike@mikemail.com', 'mike42');

            expect(engineer.getGithub).toEqual('mike42');
        });
    });
    describe('getRole', () => {
        it('should return Engineer', () => {
            const engineer = new Engineer('Mike', '42', 'mike@mikemail.com');

            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
})
