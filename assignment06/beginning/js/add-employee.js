// HANDLE THE LOAD EVENT OF THE WINDOW
 window.addEventListener('load', () => {
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
let empId;
let fullName;
let ext;
let emailAddress;
let department;

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS


// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
let output;

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE