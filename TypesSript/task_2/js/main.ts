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
      return new Teacher();
    }
  } else {
    salaryValue = salary;
  }

  if (salaryValue < 500) {
    return new Teacher();
  }

  return new Director();
}

// Example output
console.log(createEmployee(200) instanceof Teacher);
console.log(createEmployee(1000) instanceof Director);
console.log(createEmployee('$500') instanceof Director); 
console.log(createEmployee('abc'));