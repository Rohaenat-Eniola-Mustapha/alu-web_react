// Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Class Director
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Class Teacher
export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Creaate function creatEmployee
export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  let salaryValue: number;

  if (typeof salary === 'string') {
    salaryValue = parseInt(salary.replace(/[^0-9]/g, ''), 10);
    if (isNaN(salaryValue)) {
      // Handle the case where the string is not a valid number
      return new Teacher(); // Or throw an error, or handle as appropriate for your application
    }
  } else {
    salaryValue = salary;
  }

  if (salaryValue < 500) {
    return new Teacher();
  }

  return new Director();
}

// Function isDirector (type predicate)
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  return employee instanceof Director;
}

// Function executeWork
export function executeWork(employee: DirectorInterface | TeacherInterface): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Example output
console.log(createEmployee(200) instanceof Teacher);
console.log(createEmployee(1000) instanceof Director);
console.log(createEmployee('$500') instanceof Director);

executeWork(createEmployee(200));  // Output: Getting to work
executeWork(createEmployee(1000));