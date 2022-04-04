// HANDLE THE LOAD EVENT OF THE WINDOW
 window.addEventListener('load', (event) => {
     event.preventDefault();
// document.getElementById('btnAddEmployee');

    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
        window.open('add-employee.html', 'Add Employee Form', 'width=800, height=700, top=400, left=400');
 
});

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
const $ = (id) => document.getElementById(id);

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
let cancelBtn = document.getElementById('cancel').addEventListener('click', () => {
    
    window.close(cancelBtn);
    
});

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION


// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
let employeeNum;
let fullName;
let ext;
let emailAddress;
let department;
let submit;
let output;

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
employeeNum = $('id');
fullName = $('name');
ext = $('extension');
emailAddress = $('email');
department = $('department');
submit = $('submit');
output = $('loginDetails');




// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
// window.addEventListener('load', () => {
    
    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault();
        let formElement = document.getElementById('empForm');

        formElement.addEventListener('submit', writeMessage);

        function writeMessage(event) {
            event.preventDefault();
            window.console.log('Hello');
            output = window.opener.document.getElementById('loginDetails');
            output.innerHTML = `ID: ${employeeNum.value}`;
            output.innerHTML = `Name: ${fullName.value}`;
            output.innerHTML = `Extension: ${ext.value}`;
            output.innerHTML = `Email: ${emailAddress.value}`;
            output.innerHTML = `Department: ${department.value}`;
            console.log('hello');
        }
        window.close();
        
    
        
    
    })

    
// })


// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE