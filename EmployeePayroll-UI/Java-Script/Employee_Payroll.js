window.addEventListener('DOMContentLoaded', (event) => {
    //Name Validation
    const text = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    text.addEventListener('input', function () {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (nameRegex.test(text.value)) {
            textError.textContent = " ";
        } else {
            textError.textContent = "Name Is Invalid";
        }
    });

    //Changing values Of Salary Acccording To Slider
    const salary = document.querySelector('#salary');
    const salaryOutput = document.querySelector('.salary-output');
    salaryOutput.textContent = salary.value;
    salary.addEventListener('input', function () {
        salaryOutput.textContent = salary.value;
    });

    //Start Date Validation
    const date = document.querySelector("#startDate");
    date.addEventListener('input', function () {
        const startDate = new Date(Date.parse(getInputValueById("#day") + " " +
            getInputValueById("#month") + " " +
            getInputValueById("#year")));
        try {
            (new Employee_PayrollData()).startDate = startDate;
            setTextValue('.date-error', "");
        } catch (e) {
            throw "Date Is Invalid";
            setTextValue('.date-error', e);
        }
    });
});



