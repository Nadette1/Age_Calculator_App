let outputYear = document.querySelector("#YY");
let outputMonth = document.querySelector("#MM");
let outputDay = document.querySelector("#DD");
let submit = document.querySelector(".icon");

let isValid = false;

let inputYear = document.querySelector("#year");
let inputMonth = document.querySelector("#month");
let inputDay = document.querySelector("#day");

const error_day = document.querySelector("#demo1");
const error_month = document.querySelector("#demo2");
const error_year = document.querySelector("#demo3");
isSecureContext.addEventListener("click", calculateDate);

inputDay.addEventListener("input", e => {
    if (+inputDay.value > 31) {
        error_day.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_day.textContent = ""
    }
    if (inputDay.value === "") {
        isValid = false;
        error_day.textContent = "This field is required"
        return;
    } else {
        error_day.textContent = ""
    }
});

inputMonth.addEventListener("input", e => {
    if (+inputMonth.value > 12) {
        error_month.textContent = "Must be a valid month";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = ""
    }
    if (inputDay.value === "") {
        isValid = false;
        error_month.textContent = "This field is required"
        return;
    } else {
        error_month.textContent = ""
    }
});
inputYear.addEventListener("input", e => {
    if (+inputYear.value > 2023) {
        error_year.textContent = "Must be a valid year";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = ""
    }
    if (inputDay.value === "") {
        isValid = false;
        error_year.textContent = "This field is required"
        return;
    } else {
        error_year.textContent = ""
    }
});

function calculateDate() {
    if (isValid) {
        let birthday = ``;
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;

        outputDay.textContent = ageDay
        outputMonth.textContent = ageMonth
        outputYear.textContent = ageYears
    } else {
        alert("error");
    }
};

