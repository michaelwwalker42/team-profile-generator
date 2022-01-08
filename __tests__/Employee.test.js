const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initizialization', () => {
        it('should create an employee object with a name, id number, and email address', () => {
            const employee = new Employee('Mike', '42', 'mike@mikemail.com');

            expect(employee.name).toEqual('Mike');
            expect(employee.id).toEqual('42');
            expect(employee.email).toEqual('mike@mikemail.com');
        });
    });
    describe('getName', () => {
        it('should return name of employee', () => {
            const employee = new Employee('Mike', '42', 'mike@mikemail.com');

            expect(employee.getName()).toEqual('Mike');
        });
    });
    describe('getId', () => {
        it('should return Id number of employee', () => {
            const employee = new Employee('Mike', '42', 'mike@mikemail.com');

            expect(employee.getId()).toEqual('42');
        });
    });
    describe('getEmail', () => {
        it('should return email address of employee', () => {
            const employee = new Employee('Mike', '42', 'mike@mikemail.com');

            expect(employee.getEmail()).toEqual('mike@mikemail.com');
        });
    });
    describe('getRole', () => {
        it('should return role of employee', () => {
            const employee = new Employee('Mike', '42', 'mike@mikemail.com');

            expect(employee.getRole()).toEqual('Employee');
        });
    });
})