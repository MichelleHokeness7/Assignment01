// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let empTable = document.getElementById('employees')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let output = document.getElementById('empCount');
let counter = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let names = document.getElementById('name').value;
    let ext = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;
     
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow();
    row.className = 'table table-striped';

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellExt = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellDepartment = row.insertCell(4);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textId = document.createTextNode(id);
    let textName = document.createTextNode(names);
    let textExt = document.createTextNode(ext);
    let textEmail = document.createTextNode(email);
    let textDepartment = document.createTextNode(department);

    cellID.appendChild(textId);
    cellName.appendChild(textName);
    cellExt.appendChild(textExt);
    cellEmail.appendChild(textEmail);
    cellDepartment.appendChild(textDepartment);

    row.appendChild(cellID);
    row.appendChild(cellName);
    row.appendChild(cellExt);
    row.appendChild(cellEmail);
    row.appendChild(cellDepartment);

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    let textDelete = document.createTextNode('X');
    deleteBtn.appendChild(textDelete);
    row.appendChild(deleteBtn);
    // RESET THE FORM
    document.getElementById("addForm").reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    for (let i = 0; i < form.length; i++) {
        // let employeeCount = document.getElementById('empCount');
        counter++;
    }
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETION
    if (confirm('Are you sure you want to delete this employee?')) {
        // let td = e.target.parentElement;
        // let tr = td.parentElement
        
        empTable.deleteRow(e.target.closest('tr'));

    
    }
})