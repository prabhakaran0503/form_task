
let firstname = document.getElementById("firstName");
let lastname = document.getElementById("lastName");
let phone = document.getElementById("Phone");
let email = document.getElementById("email");
let password = document.getElementById("Password");
let conpassword = document.getElementById("conPassword");


let errorFirstName = document.getElementById("error-firstNmae");
let errorLasttName = document.getElementById("error-lastNmae");
let errorphone = document.getElementById("error-phone");
let erroremail = document.getElementById("error-email");
let errorpassword = document.getElementById("error-password");
let errorconPassword = document.getElementById("error-conPassword")



const emailRegexFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


function formSubmit(e) {

    //first Name

    if (firstname.value === "") {
        errorFirstName.innerHTML = "Enter the First Name";
    }

    else if (firstname.value.length >= "1") {
        let spiltedname = firstname.value.split("")
        for (let i = 0; i < spiltedname.length; i++) {
            if (Number(spiltedname[i])) {
                errorFirstName.innerHTML = "Enter the vaild Name";
            }
            else {
                errorFirstName.innerHTML = "";
            }
        }
    }


    // //last Name

    if (lastname.value === "") {
        errorLasttName.innerHTML = "Enter the Last Name";
    }

    else if (lastname.value.length >= "1") {

        spiltName = lastname.value
        spiltedname = spiltName.split("")
        // console.log(spiltedname);
        let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        for (let i = 0; i < spiltedname.length; i++) {
            for (let j = 0; j < num.length; j++) {
                if (spiltedname[i] == num[j]) {
                    errorLasttName.innerHTML = "Enter the vailed Name";
                }
                else {
                    errorLasttName.innerHTML = "";
                }
            }
        }
    }


    //Phone

    if (phone.value == "") {
        errorphone.innerHTML = "Enter The Phone Number"
    }
    else if (phone.value.length != 10) {
        errorphone.innerHTML = "Place Enter Your Correct Number";
    }
    else if (phone.value >= "1") {
        splitphone = phone.value;
        spiltedphone = splitphone.split("");
        // console.log(spiltedphone);
        let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        for (let i = 0; i < spiltedphone.length; i++) {
            for (let j = 0; j < num.length; j++) {
                if (spiltedphone[i] != num[j]) {
                    errorphone.innerHTML = "";
                }
                else {
                    errorphone.innerHTML = "Enter the Vailed Phone Number";
                }
            }
        }
    }


    //Email

    if (email.value === "") {
        erroremail.innerHTML = "Enter The Email"
    }
    else if (String(email.value)
        .toLowerCase()
        .match(
            emailRegexFormat)) {
        let emailsplite = email.value;
        console.log(emailsplite, 'email')
        erroremail.innerHTML = ""
        // emailsplited=emailsplite.split("");
        // for(let i=0;i<emailsplited.length;i++){
        //     if(emailsplited[i]==""){
        //         erroremail.innerHTML=""
        //     }
        //     else{
        //         erroremail.innerHTML="Enter The Vailed Email"
        //     }
        // }
    }


    //password

    if (password.value === "") {
        errorpassword.innerHTML = "Enter The Password"
    }
    else if (password.value.length <= 8) {
        errorpassword.innerHTML = "Password Minmam 8 Digite"
    }
    else {
        errorpassword.innerHTML = ""
    }

    //confirm Password

    if (conpassword.value === "") {
        errorconPassword.innerHTML = "Enter The Confirm Password"
    }
    else if (password.value != conpassword.value) {
        errorconPassword.innerHTML = "Password Dow's Not Macth"
    }
    else {
        errorconPassword.innerHTML = ""
    }
}