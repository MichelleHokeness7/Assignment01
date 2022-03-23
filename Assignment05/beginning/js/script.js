let employeeNum;
let fullName;
let ext;
let emailAddress;
let department;
let submit;
let output;


// Helper function
const employeeInfo = (id) => document.getElementById(id);

// getting DOM elements
employeeNum  = employeeInfo('id');
fullName     = employeeInfo('name');
ext          = employeeInfo('ext');
emailAddress = employeeInfo('email');
department   = employeeInfo('department');
submit       = employeeInfo('submit');
output       = employeeInfo('output');

let formElement = document.getElementById('empForm');

formElement.addEventListener('submit', writeMessage);

function writeMessage(event) {
    event.preventDefault();
    console.log(`ID: ${employeeNum.value}`);
    console.log(`Name: ${fullName.value}`);
    console.log(`Extension: ${ext.value}`);
    console.log(`Email: ${emailAddress.value}`);
    console.log(`Department: ${department.value}`);
}