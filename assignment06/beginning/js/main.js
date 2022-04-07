// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', init);
function init() {
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

    
document.getElementById('btnAddEmployee').addEventListener('click', () => {
    
        // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.open('add-employee.html', 'AddEmployeeForm', 'width=800, height=700, top=400, left=400');
        
    })

}


