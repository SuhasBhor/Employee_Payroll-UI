window.addEventListener('DOMContentLoaded',(event) =>{
    salary();
    nameValidation();
})

function nameValidation(){
    //Name Validation
    const text = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    text.addEventListener('input' , function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
    if(nameRegex.test(text.value)){
        textError.textContent = " ";
    }else{ 
        textError.textContent = "Name Is Invalid";
    }
});
}

//Changing values Of Salary Acccording To Slider
function salary() {
    const salary = document.querySelector('#salary');
    const salaryOutput = document.querySelector('.salary-output');
    salaryOutput.textContent = salary.value;
    salary.addEventListener('input', function () {
        salaryOutput.textContent = salary.value;
    });
}

