function password1Check(){
    x = document.getElementById("password").value;
    username = document.getElementById("userid").value;
    if(x.length<8){
        document.getElementById("password1Message").innerHTML="Password is too short";
    }
    else if(!/[`!@#$%^&*()+=-_\[\]{};':"\\|,.<>\/?~]/.test(x) || !/\d/.test(x) || !/[A-Z]/.test(x)){
        document.getElementById("password1Message").innerHTML="Invalid Password";
    }
    else if(x==username){
        document.getElementById("password1Message").innerHTML="Password matches username";
    }
    else{
        document.getElementById("password1Message").innerHTML="";
    }
 }

function password2Check(){
    x = document.getElementById("repassword").value;
    password = document.getElementById("password").value;
    if(x!=password){
        document.getElementById("password2Message").innerHTML="Password's don't match";
    }
     else{
        document.getElementById("password2Message").innerHTML="";
    }
}

function firstnameCheck(){
    x = document.getElementById("firstname").value;
    if(!/^[A-Za-z'-]+$/.test(x)){
        document.getElementById("firstnameMessage").innerHTML="Invalid First Name";
    }
    else{
        document.getElementById("firstnameMessage").innerHTML="";
    }
    const inputField = document.getElementById("firstname");
    const inputValue = inputField.value;

    // Replace any character that is not a letter, apostrophe, or dash with an empty string
    inputField.value = inputValue.replace(/[^A-Za-z'-]/g, '');

    if (inputField.value !== inputValue) {
        document.getElementById("firstnameMessage").innerHTML = "Only letters, apostrophes, and dashes are allowed.";
    } else {
        document.getElementById("firstnameMessage").innerHTML = "";
    }
 }

function middleinitialCheck(){
    x = document.getElementById("middleinitial").value;
    if(!/^[A-Za-z'-]+$/.test(x)){
        document.getElementById("middleinitialMessage").innerHTML="Middle Initial must be a letter";
    }
    else{
        document.getElementById("middleinitialMessage").innerHTML="";
    }
}

function lastnameCheck(){
    x = document.getElementById("lastname").value;
    if(!/^[A-Za-z'-]+$/.test(x)){
        document.getElementById("lastnameMessage").innerHTML="Invalid Last Name";
    }
    else{
        document.getElementById("lastnameMessage").innerHTML="";
    }
    const inputField = document.getElementById("lastname");
    const inputValue = inputField.value;

    // Replace any character that is not a letter, apostrophe, or dash with an empty string
    inputField.value = inputValue.replace(/[^A-Za-z'-]/g, '');

    if (inputField.value !== inputValue) {
        document.getElementById("lastnameMessage").innerHTML = "Only letters, apostrophes, and dashes are allowed.";
    } else {
        document.getElementById("lastnameMessage").innerHTML = "";
    }
 }

function dateofbirthCheck() {
    var dateInput = document.getElementById('dateofbirth').value;
    var dobMessage = document.getElementById('dateofbirthMessage');

    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19\d\d|20[01]\d)$/.test(dateInput)) {
        dobMessage.innerHTML = "Please enter a valid date in MM/DD/YYYY format";
        return;
    }

    var enteredDate = new Date(dateInput);
    var currentDate = new Date();
    var minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 120);

    if (enteredDate > currentDate) {
        dobMessage.innerHTML = "Date of birth can't be in the future";
    } else if (enteredDate < minDate) {
        dobMessage.innerHTML = "Date of birth can't be more than 120 years ago";
    } else {
        dobMessage.innerHTML = "";
    }
}


function ssnCheck(){
    x = document.getElementById("socialsecurity").value;
    if(!/^[0-9]+$/.test(x)){
        document.getElementById("ssnMessage").innerHTML="Input must be a Number";
    }
    else{
        document.getElementById("ssnMessage").innerHTML="";
    }

    let formattedSSN = x.replace(/\D/g, '').substring(0, 9);

    if (formattedSSN.length > 5) {
        formattedSSN = formattedSSN.replace(/^(\d{3})(\d{2})(\d{4})$/, '$1-$2-$3');
    } else if (formattedSSN.length > 4) {
        formattedSSN = formattedSSN.replace(/^(\d{3})(\d{1})/, '$1-$2');
    } else if (formattedSSN.length > 2) {
        formattedSSN = formattedSSN.replace(/^(\d{3})/, '$1-');
    }

    document.getElementById("socialsecurity").value = formattedSSN;

    if (!/^[0-9]+$/.test(x)) {
        document.getElementById("ssnMessage").innerHTML = "Social Security Number must contain only numbers";
    } else {
        document.getElementById("ssnMessage").innerHTML = "";
    }
}

function address1Check() {
    x = document.getElementById("address1").value;
    if(/^[A-Za-z'-]+$/.test(x)){
        document.getElementById("address1Message").innerHTML="";
    }
}

function phoneCheck(){
    x = document.getElementById("phone").value;
    if(!/^[0-9]+$/.test(x)){
        document.getElementById("phoneMessage").innerHTML="Input must be a number";
    }
    else{
        document.getElementById("phoneMessage").innerHTML="";
    }

    let formattedSSN = x.replace(/\D/g, '').substring(0, 10);

    if (formattedSSN.length > 6) {
        formattedSSN = formattedSSN.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
    } else if (formattedSSN.length > 3) {
        formattedSSN = formattedSSN.replace(/^(\d{3})(\d{1})/, '$1-$2');
    } else if (formattedSSN.length > 2) {
        formattedSSN = formattedSSN.replace(/^(\d{3})/, '$1-');
    }

    document.getElementById("phone").value = formattedSSN;

    if (!/^[0-9]+$/.test(x)) {
        document.getElementById("phoneMessage").innerHTML = "Phone Number must contain only numbers";
    } else {
        document.getElementById("phoneMessage").innerHTML = "";
    }
}

function cityCheck() {
    x = document.getElementById("city").value;
    if(!/^[A-Za-z'-]+$/.test(x)){
        document.getElementById("cityMessage").innerHTML="City must only contain letters";
    }
    else{
        document.getElementById("cityMessage").innerHTML="";
    }
}

function zipcodeCheck() {
    x = document.getElementById("zipcode").value;
    if(!/^[0-9]+$/.test(x)){
        document.getElementById("zipcodeMessage").innerHTML="Zipcode is invalid";
    }
    else{
        document.getElementById("zipcodeMessage").innerHTML="";
    }
}

function emailCheck() {
    x = document.getElementById("email").value;
    
     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(x)) {
        document.getElementById("emailMessage").innerHTML = "Invalid email format. Please enter a valid email address.";
    } else {
        document.getElementById("emailMessage").innerHTML = "";
    }
}

function useridCheck() {
    x = document.getElementById("userid").value;

    useridPattern = /^[A-Za-z_][A-Za-z0-9_-]{4,19}$/;

    if (!/^[A-Za-z0-9_-]+$/.test(x)) {
        document.getElementById("useridMessage").innerHTML = "UserId is Invalid";
    } else {
        document.getElementById("useridMessage").innerHTML = "";
    }
}

function checkform() {
    var f = document.forms["theform"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0)
            cansubmit = false;
    }

    document.getElementById('SubmitButton').disabled = !cansubmit;
window.onload = checkform;
}


 function getForm() {
    var formcontents = document.getElementById("signup");
    var formoutput;
    var datatype;
    var i;
    formoutput = "<table class='output'><th id='DataHeader'>Data name</th><th id='DataHeader'>Value</th>";
    for (i = 0; i < formcontents.length; i++) {
        console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
        datatype = formcontents.elements[i].type;
        switch (datatype) {
            case "checkbox":
                if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right' id='name'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td class='outputdata' id='value'>Checked</td></tr>";
                }
                break;
            case "radio":
                if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right' id='name'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td class='outputdata' id='value'>"+ formcontents.elements[i].value+"</td></tr>";
                }
                break;
            case "button": case "submit": case "reset":
                break;
            default:
                formoutput = formoutput + "<tr><td align='right' id='name'>"+formcontents.elements[i].name+"</td>";
                formoutput = formoutput +"<td class='outputdata' id='value'>"+ formcontents.elements[i].value+"</td></tr>";
        }
             

    }
    if (formoutput.length>0) { 
        formoutput = "<hr id='contentBreak'><h2>Review</h2>" + formoutput;
        formoutput = formoutput + "</table></div>";
    //  formoutput = formoutput + "<table id='button'><tr><th><input type='reset' name='clear/reset' value='Reset' id='resetButton' /></th><th><input type='button' id='validateButton' value='Validate' onclick='validateForm()'></th><th><input type='submit' value='Submit' id='submitButton' disabled></th></tr></table>";
        document.getElementById("reviewData").innerHTML = formoutput;
    }
    // document.getElementById("reviewData").innerHTML = formoutput;
 }
 
 let firstname = document.cookie;

document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

 function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}