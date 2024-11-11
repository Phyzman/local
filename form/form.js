let form = document.forms['form'];

form.addEventListener('click', function (event) {
    event.preventDefault();

    let username = form['username'].value;
    let email = form['email'].value;
    let password = form['password'].value;
    let dob = form['dob'].value
    let date = new Date(dob);
    let today = new Date();
    let age = today.getTime() - date.getTime();
    age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25 ))
    console.log(age);
    


let NameErr = "";
let EmailErr = "";
let PasswordErr = ""
let DobErr="";

if (username == "") {
    NameErr = "Enter username"
    console.log(NameErr)
}
if (email == "") {
    EmailErr = "Enter Email"
    console.log(EmailErr);
}

if(password == ""){
    PasswordErr = "Enter Password"
    console.log(PasswordErr);

}

if(dob == ""){
    DobErr = "Enter DOB"
    console.log(DobErr);
    
}

if (!NameErr && !EmailErr && !PasswordErr && !DobErr) {
    document.getElementById("username").innerHTML = username;
    document.getElementById("email").innerHTML = email;
    document.getElementById("password").innerHTML = password;
    document.getElementById("dob").innerHTML = dob;


    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('dob', age);



}else{
    console.log(NameErr, EmailErr, PasswordErr, DobErr)
}

})