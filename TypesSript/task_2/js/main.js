"use strict";
exports.__esModule = true;
exports.createEmployee = exports.Teacher = exports.Director = void 0;
// Class Director
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
exports.Director = Director;
// Class Teacher
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
exports.Teacher = Teacher;
// Creaate function creatEmployee
function createEmployee(salary) {
    var salaryValue;
    if (typeof salary === 'string') {
        salaryValue = parseInt(salary.replace(/[^0-9]/g, ''), 10);
        if (isNaN(salaryValue)) {
            return new Teacher();
        }
    }
    else {
        salaryValue = salary;
    }
    if (salaryValue < 500) {
        return new Teacher();
    }
    return new Director();
}
exports.createEmployee = createEmployee;
// Example output
console.log(createEmployee(200) instanceof Teacher);
console.log(createEmployee(1000) instanceof Director);
console.log(createEmployee('$500') instanceof Director);
console.log(createEmployee('abc'));
