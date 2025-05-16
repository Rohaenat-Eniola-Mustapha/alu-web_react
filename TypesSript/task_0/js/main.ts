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

// Render the table(the array using function)
function renderStudentTable(students: Student[]): void {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Create table header row
  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Location"];
  headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table data rows
  students.forEach(student => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Append the table to the document body
  document.body.appendChild(table);

  // Basic CSS for the table
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";
  table.style.maxWidth = "400px"; // Adjust max width
  table.style.margin = "20px auto";
  table.style.border = "1px solid #ddd";
  const thTdStyle = "border: 1px solid #ddd; padding: 8px; text-align: left;";
  const ths = table.querySelectorAll("th");
  ths.forEach(th => th.style.cssText = thTdStyle + "background-color: #f2f2f2;");
  const tds = table.querySelectorAll("td");
  tds.forEach(td => td.style.cssText = thTdStyle);
}

// Call the function to render the table when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderStudentTable(studentsList);
});