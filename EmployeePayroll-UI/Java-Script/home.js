window.addEventListener('DOMContentLoaded' , (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";

    const innerHtml = `${headerHtml}
    <tr>
        <td><img class="profile" src="../Assets/Ellipse -2.png" alt=""></td>
        <td>Suhas</td>
        <td>Male</td>
        <td>
        <div class='dept-label'>HR</div>
        <div class='dept-label'>Engineer</div>
        </td>
        <td>300000</td>
        <td>7 Jan 2022</td>
        <td>
        <img id="1" src="../Assets/delete-black-18dp.svg" alt="delete">
        <img id="1" src="../Assets/create-black-18dp.svg" alt="edit">
        </td>
        </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
};