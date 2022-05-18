export const builder = buildGrid();
// BUILD THE EMPLOYEES GRID
async function fetchData() {
    try {
        const response = await fetch('../data/employees.json');
        const employees = await response.json();
        for (let data of employees) {
            document.body.innerHTML += 
            `
                ${data.employees.id}<br>
                ${data.employees.name}<br>
                ${data.employees.extension}
                ${data.employees.email}<br>
                ${data.employees.department}<br><br>
                
            `;
        };
        

    } catch (error) {
        console.error(error);
    }

};
fetchData();


// const xhr = new XMLHttpRequest();
// xhr.responseType = 'json';
// xhr.open('GET', '../beginning/data/employees.json');
// xhr.send();
// xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let employees = xhr.response;
//         for (let data of employees) {
//             document.body.innerHTML += 
//             `
//                 ${data.employees.id}<br>
//                 ${data.employees.name}<br>
//                 ${data.employees.extension}
//                 ${data.employees.email}<br>
//                 ${data.employees.department}<br><br>
                
//             `;
//         };
//     }
// });
// xhr.onerror = (e) => {console.error(e.message)};

// function buildGrid(arrEmployees) {
//     // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
//     empTable.lastElementChild.remove();
//     // REBUILD THE TBODY FROM SCRATCH
//     let tbody = document.createElement('tbody');
//     // LOOP THROUGH THE ARRAY OF EMPLOYEES
//     // REBUILDING THE ROW STRUCTURE
//     for (let employee of arrEmployees) {
//         tbody.innerHTML += 
//         `
//         <tr>
//             <td>${employee[0]}</td>
//             <td>${employee[1]}</td>
//             <td>${employee[2]}</td>
//             <td><a href="mailto:${employee[3]}">${employee[3]}</a></td>
//             <td>${employee[4]}</td>
//             <td><button class="btn btn-sm btn-danger delete">X</button></td>
//         </tr>
//         `
//     }
//     // BIND THE TBODY TO THE EMPLOYEE TABLE
//     empTable.appendChild(tbody);
//     // UPDATE EMPLOYEE COUNT
//     empCount.value = `(${arrEmployees.length})`;
// };