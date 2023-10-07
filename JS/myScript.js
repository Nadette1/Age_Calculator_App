const date = new Date();
let isDayValid = false;
let isMonthValid = false;
let isYearValid = false;

function age() {

    let resultDay = document.getElementById("day").value;
    if (resultDay === "") {
        document.getElementById("demo1").innerHTML = "This field is required";
        document.getElementById("day").style.borderColor = "red";
        document.getElementById("lab").style.color = "red";
    } else if (isNaN(resultDay) || resultDay < 1 || resultDay > 31) {
        document.getElementById("demo1").innerHTML = "Must be a valid day";
        document.getElementById("day").style.borderColor = "red";
        document.getElementById("lab").style.color = "red";
    } else {
        document.getElementById("demo1").innerHTML = ""
        document.getElementById("day").style.borderColor = "gray";
        document.getElementById("lab").style.color = "hsl(0, 1%, 44%)";
        isDayValid = true;
    }



    let resultMonth = document.getElementById("month").value;
    if (resultMonth === "") {
        document.getElementById("demo2").innerHTML = "This field is required";
        document.getElementById("month").style.borderColor = "red";
        document.getElementById("labe").style.color = "red";
    } else if (isNaN(resultMonth) || resultMonth < 1 || resultMonth > 12) {
        document.getElementById("demo2").innerHTML = "Must be a valid month";
        document.getElementById("month").style.borderColor = "red";
        document.getElementById("labe").style.color = "red";
    } else {
        document.getElementById("demo2").innerHTML = ""
        document.getElementById("month").style.borderColor = "gray";
        document.getElementById("labe").style.color = "hsl(0, 1%, 44%)";
        isMonthValid = true;
    }

    let resultYear = document.getElementById("year").value;
    if (resultYear === "") {
        document.getElementById("demo3").innerHTML = "This field is required";
        document.getElementById("year").style.borderColor = "red";
        document.getElementById("label").style.color = "red";
    } else if (isNaN(resultYear) || resultYear < 1 || resultYear > 2023) {
        document.getElementById("demo3").innerHTML = "Must be in the past";
        document.getElementById("year").style.borderColor = "red";
        document.getElementById("label").style.color = "red";
    } else {
        document.getElementById("demo3").innerHTML = ""
        document.getElementById("year").style.borderColor = "gray"
        document.getElementById("label").style.color = "hsl(0, 1%, 44%)";
        isYearValid = true;
    }


    if (!isDayValid || !isMonthValid || !isYearValid) {
        return;
    }

    let result_day = date.getDate() - resultDay;
    let result_month = date.getMonth() + 1 - resultMonth;
    let result_year = date.getFullYear() - resultYear;



    if (result_day < 0) {
        resultMonth -= 1;
        result_day += 31;
    }
    document.getElementById("DD").innerHTML = result_day;


    if (result_month < 0) {
        resultYear -= 1;
        result_month += 12;
    }

    document.getElementById("MM").innerHTML = result_month;


    document.getElementById("YY").innerHTML = result_year;

    console.log(result_day, result_month, result_year)







}