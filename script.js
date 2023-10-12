const form = document.getElementById("form");

//first name
let first = document.getElementById("firstname");
let nameError1 = document.getElementById("error1");

function fname() {
    if (first.value === "") {
        nameError1.innerHTML = "First name required.";
        nameError1.style.color = "red";
        first.style.border = "1px solid red";
        return false;
    }
    else if (first.value.length < 4 || first.value.length > 15) {
        nameError1.innerHTML = "First name should be Min 4 and Max 15 characters";
        nameError1.style.color = "red";
        first.style.border = "1px solid red";
        return false;
    }
    else {
        nameError1.innerHTML = "";
        first.style.border = "1px solid #00FF00";
        return true;
    }
}
//second name
let second = document.getElementById("secondname");
let nameError2 = document.getElementById("error2");

function sname() {
    if (second.value === "") {
        nameError2.innerHTML = "Second name required.";
        nameError2.style.color = "red";
        second.style.border = "1px solid red";
        return false;
    }
    else if (second.value.length < 1 || second.value.length > 15) {
        nameError2.innerHTML = "Second name should be Min 1 and Max 15 characters";
        nameError2.style.color = "red";
        second.style.border = "1px solid red";
        return false;
    }
    else {
        nameError2.innerHTML = "";
        second.style.border = "1px solid #00FF00";
        return true;
    }
}

//mobile number
let mobNum = document.getElementById("mobile");
let mobError = document.getElementById("error3");

function phone() {
    if (mobNum.value === "") {
        mobError.innerHTML = "Number is required";
        mobError.style.color = "red";
        mobNum.style.border = "1px solid red";
        return false;
    }
    else if (isNaN(mobNum.value)) {
        mobError.innerHTML = "Enter a valid Number";
        mobError.style.color = "red";
        mobNum.style.border = "1px solid red";
        return false;
    }
    else if (mobNum.value.length < 10 || mobNum.value.length > 13) {
        mobError.innerHTML = "Number should be 10 digit";
        mobError.style.color = "red";
        mobNum.style.border = "1px solid red";
        return false;
    }
    else {
        mobError.innerHTML = "";
        mobNum.style.border = "1px solid #00FF00";
        return true;
    }
}

//email
let mail = document.getElementById("email");
let mailError = document.getElementById("error4");

function val_email() {
    if (mail.value === "") {
        mailError.innerHTML = "Email is required"
        mailError.style.color = "red";
        mail.style.border = "1px solid red";
        return false;
    }
    else if (!mail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        mailError.innerHTML = "Enter a valid email";
        mailError.style.color = "red";
        mail.style.border = "1px solid red";
        return false;

    }
    else {
        mailError.innerHTML = "";
        mail.style.border = "1px solid #00df00";
        return true;
    }
}

//address
let address = document.getElementById("address");
let addError = document.getElementById("error5");

function val_address() {
    if (address.value === "") {
        addError.innerHTML = "Address is required"
        addError.style.color = "red";
        address.style.border = "1px solid red";
        return false;

    }
    else {
        addError.innerHTML = "";
        address.style.border = "1px solid #00df00";
        return true;
    }
}

//state
let select = document.getElementById("state");
let stateError = document.getElementById("error6");

function validatestate() {
    if (select.value === "select") {
        stateError.innerHTML = "Select the valid state";
        stateError.style.color = "red";
        select.style.border = "1px solid red";
        return false;
    }
    else {
        stateError.innerHTML = "";
        select.style.border = "1px solid #00df00";
        return true;
    }
}

//district
let dist = document.getElementById("dist");
let distError = document.getElementById("error7");

function district() {
    if (dist.value === "") {
        distError.innerHTML = "District name is required";
        distError.style.color = "red";
        dist.style.border = "1px solid red";
        return false;
    }
    else if (!dist.value.match(/^[a-zA-Z]+$/)) {
        distError.innerHTML = "Enter a valid pincode";
        distError.style.color = "red";
        dist.style.border = "1px solid red";
        return false;
    }
    else {
        distError.innerHTML = "";
        dist.style.border = "1px solid #00df00";
        return true;
    }
}

//pincode
let pin = document.getElementById("pin");
let pinError = document.getElementById("error8");

function pincode() {
    if (pin.value === "") {
        pinError.innerHTML = "Pin Code required";
        pinError.style.color = "red";
        pin.style.border = "1px solid red";
        return false;
    }
    else if (isNaN(pin.value)) {
        pinError.innerHTML = "Enter a valid pincode";
        pinError.style.color = "red"
        pin.style.border = "1px solid red";
        return false;
    }
    else if (pin.value.length < 6 || pin.value.length > 6) {
        pinError.innerHTML = "Enter a 6 digit [incode";
        pinError.style.color = "red"
        pin.style.border = "1px solid red";
        return false;
    }
    else {
        pinError.innerHTML = "";
        pin.style.border = "1px solid #00df00";
        return true;
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    output();
});


var checkbox = document.getElementsByName('language');
var langerror = document.getElementById("langerror");
var lang = "";
var l = 0;

function output() {
    firstName = first.value.trim();
    secondName = second.value.trim();
    mobile = mobNum.value.trim();
    emailid = mail.value.trim();
    gend = document.formval.gender.value;
    adrs = address.value.trim();
    state = select.value.trim();
    districtName = dist.value.trim();
    pinCode = pin.value.trim();

    var gender = form.querySelectorAll('input[name="gender"]:checked');
    const generror = document.getElementById("c-error");
    if (!gender.length) {
        generror.innerHTML = "Select the gender";
        generror.style.color = "red"
        return false
    }
    else {
        generror.innerHTML = ""
    }

    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            lang += checkbox[i].value + " " + ",";
            l++;
        }
        if (l == 0) {
            langerror.innerHTML = "Select the Language";
            langerror.style.color = "red";
            return false;
        }
        else {
            langerror.innerHTML = ""
        }
    }

    document.write("Name: " + firstName + " " + secondName + "<br>");
    document.write("Mobile: " + mobile + "<br>");
    document.write("Email: " + emailid + "<br>");
    document.write("Gender: " + gend + "<br>");
    document.write("Language: " + lang + "<br>")
    document.write("Address: " + adrs + "<br>");
    document.write("State: " + state + "<br>");
    document.write("District: " + districtName + "<br>");
    document.write("Pin Code: " + pinCode + "<br>");

}