// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', init);
function init() {
    event.preventDefault();
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

    document.getElementById('btnAddEmployee').addEventListener('click', () => {
    
        // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.open('add-employee.html', 'Add Employee Form', 'width=800, height=700');
        window.moveTo(0, 0);
    })

}

