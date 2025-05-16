;
// Create 2 Student Variables
// Student 1
var student1 = {
    firstName: "Rohaenat",
    lastName: "Mustapha",
    age: 19,
    location: "Kigali"
};
// Student 2
var student2 = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "Lagos"
};
// Store in array(studentList)
var studentsList = [student1, student2];
// Render the table(the array using function)
function renderStudentTable(students) {
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    // Create table header row
    var headerRow = document.createElement("tr");
    var headers = ["First Name", "Location"];
    headers.forEach(function (headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    // Create table data rows
    students.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement("td");
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
    var thTdStyle = "border: 1px solid #ddd; padding: 8px; text-align: left;";
    var ths = table.querySelectorAll("th");
    ths.forEach(function (th) { return th.style.cssText = thTdStyle + "background-color: #f2f2f2;"; });
    var tds = table.querySelectorAll("td");
    tds.forEach(function (td) { return td.style.cssText = thTdStyle; });
}
// Call the function to render the table when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    renderStudentTable(studentsList);
});
