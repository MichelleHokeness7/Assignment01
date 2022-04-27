// CREATE AN ARRAY OF EMPLOYEES
let employees = ['Christian Scott', 'Felix Lopez', 'Ana Stone', 'Georgia Walker', 'Astrid Thomas'];
let count = 0;

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
localStorage.setItem('Employees', JSON.stringify(employees));

// GET DOM ELEMENTS
let empForm = document.querySelector('#addForm');
let empTable = document.querySelector('#employees');
let empCount = document.querySelector('#empCount');

let empNum = document.querySelector('#id');
let empName = document.querySelector('#name');
let empExt = document.querySelector('#extension');
let empEmail = document.querySelector('#email');
let empDept = document.querySelector('#department');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
let th1 = document.createElement('tr');
th1.className = "table table-striped";
let th2 = document.createElement('tr');
th2.className = "table table-striped";
let th3 = document.createElement('tr');
th3.className = "table table-striped";
let th4 = document.createElement('tr');
th4.className = "table table-striped";
let th5 = document.createElement('tr');
th5.className = "table table-striped";

let textTh1 =document.createTextNode('Christian Scott');
let textTh2 =document.createTextNode('Felix Lopez');
let textTh3 =document.createTextNode('Ana Stone');
let textTh4 =document.createTextNode('Georgia Walker');
let textTh5 =document.createTextNode('Astrid Thomas');

th1.appendChild(textTh1);
th2.appendChild(textTh2);
th3.appendChild(textTh3);
th4.appendChild(textTh4);
th5.appendChild(textTh5);

empTable.appendChild(th1);
empTable.appendChild(th2);
empTable.appendChild(th3);
empTable.appendChild(th4);
empTable.appendChild(th5);



// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let num8 = empNum.value
    let name = empName.value
    let ext = empExt.value
    let email = empEmail.value
    let dept = empDept.value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    newEmployee.push(employees);
    // BUILD THE GRID
    let dataTable = document.getElementsByTagName('tbody')[0];
    let newRow = dataTable.insertRow(dataTable.length);
    let cellId = dataTable.insertCell();
    let cellName = dataTable.insertCell();
    let cellExt = dataTable.insertCell();
    let cellEmail = dataTable.insertCell();
    let cellDept = dataTable.insertCell();
    let cellDelete = dataTable.insertCell();

    cellId.appendChild(document.createTextNode(num8));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(ext));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(dept));

    // RESET THE FORM
    empForm.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
    count++;
    empCount.innerHTML = `(${count})`;
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.tagName === 'BUTTON') {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
        }
    }
        

        

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE


    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT
    empCount.innerHTML = `(${count})`;

    // STORE THE ARRAY IN STORAGE

};