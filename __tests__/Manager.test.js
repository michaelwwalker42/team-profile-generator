const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create a manager object with a name, id number, email address, and office number', () => {
            const manager = new Manager('Mike', '42', 'mike@mikemail.com', '13');

            expect(manager.name).toEqual('Mike');
            expect(manager.id).toEqual('42');
            expect(manager.email).toEqual('mike@mikemail.com');
            expect(manager.officeNumber).toEqual('13');
        });
    });

    describe('getRole', () => {
        it('should return manager', () => {
            const manager = new Manager('Mike', '42', 'mike@mikemail.com', '13');

            expect(manager.getRole()).toEqual('Manager');
        });
    });
})