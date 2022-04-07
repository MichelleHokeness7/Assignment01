// HANDLE THE LOAD EVENT OF THE WINDOW
 window.addEventListener('load', init);
    function init() {
   
// document.getElementById('btnAddEmployee');

    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
     let overrideIndex = window.open('add-employee.html', 'AddEmployeeForm', 'width=800, height=700, top=400, left=400');
 

    };
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
    const $ = (id) => document.getElementById(id);

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    let cancelBtn = document.getElementById('cancel').addEventListener('click', () => {
    cancelBtn.close();
    
    
    
});

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
// let formElement = document.getElementById('submit');
// formElement.addEventListener('click', empInfo());
// function empInfo(e) {
//     e.preventDefault();
// };

let formElement = document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

})



// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
let employeeNum;
let fullName;
let ext;
let emailAddress;
let department;
// let submit;
// let output;

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
employeeNum = $('id');
fullName = $('name');
ext = $('extension');
emailAddress = $('email');
department = $('department');
// submit = $('submit');
output = $('loginDetails');
formElement = $('submit');



// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
formElement = window.open('index.html', 'empInfoForm');


// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
window.addEventListener('load', () => {
    let output = window.opener.document.getElementById('loginDetails');
    output.innerHTML = `ID: ${employeeNum}`;
    output.innerHTML = `Name: ${fullName}`;
    output.innerHTML = `Extension: ${ext}`;
    output.innerHTML = `Email: ${emailAddress}`;
    output.innerHTML = `Department: ${department}`;

})

// CLOSE THE POPUP

overrideIndex.close();

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE