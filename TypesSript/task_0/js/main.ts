// Student Interface Created
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

// Create 2 Student Variables

// Student 1
const student1: Student = {
  firstName: "Rohaenat",
  lastName: "Mustapha",
  age: 19,
  location: "Kigali"
};

// Student 2
const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "Lagos"
};

// Store in array(studentList)
const studentsList: Student[] = [student1, student2];