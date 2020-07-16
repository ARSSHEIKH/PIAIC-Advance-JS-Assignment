let dvTwo = document.querySelector(".dvTwo-tab");
let dvOne = document.querySelector(".dvOne-tab");
let dvThree = document.querySelector(".dvThree-tab");

const signup_content1 = document.querySelector(".signup-form1").innerHTML;
const signup_content2 = document.querySelector(".signup-form2").innerHTML;
const signup_content3 = document.querySelector(".signup-form3").innerHTML;

document.querySelector('.signup-form2').innerHTML="";
document.querySelector(".signup-form3").innerHTML="";

dvOne.addEventListener('click', signup_func1);
dvTwo.addEventListener('click', signup_func2);
dvThree.addEventListener('click', signup_func3);

document.getElementById("dvOne-tab").style.backgroundColor = "#ff7b00";
document.getElementById("dvOne-tab").style.border = "3px solid #ff7b00";

function signup_func1(){
    document.getElementById("dvTwo-tab").style.backgroundColor = "#fff";
    document.getElementById("dvTwo-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("dvThree-tab").style.backgroundColor = "#fff";
    document.getElementById("dvThree-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("tabs-strings").style.marginTop = "12px";

    document.getElementById("dvOne-tab").style.backgroundColor = "#ff7b00";
    document.getElementById("dvOne-tab").style.border = "3px solid #ff7b00";
    document.querySelector(".signup-form1").innerHTML = signup_content1;
    document.querySelector('.signup-form2').innerHTML="";
    document.querySelector(".signup-form3").innerHTML="";

    if(filled == true){
        document.getElementById('fname').value = UsersArr[ind-1].fname;
        document.getElementById('lname').value = UsersArr[ind-1].lname;
        document.getElementById('email').value = UsersArr[ind-1].email
        document.getElementById('confemail').value = UsersArr[ind-1].confemail
        document.getElementById('pass').value = UsersArr[ind-1].pass
        document.getElementById('confpass').value = UsersArr[ind-1].confpass
    }
}

function signup_func2(){
    document.getElementById("dvOne-tab").style.backgroundColor = "#fff";
    document.getElementById("dvOne-tab").style.border = "3px solid #ff7b00";
    document.getElementById("dvThree-tab").style.backgroundColor = "#fff";
    document.getElementById("dvThree-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("tabs-strings").style.marginTop = "12px";

    document.getElementById("dvTwo-tab").style.backgroundColor = "#ff7b00";
    document.getElementById("dvTwo-tab").style.border = "3px solid #ff7b00";

    document.querySelector(".signup-form1").innerHTML = signup_content2;
    document.querySelector('.signup-form2').innerHTML="";
    document.querySelector(".signup-form3").innerHTML="";
}

function signup_func3(){
    document.getElementById("dvOne-tab").style.backgroundColor = "#fff";
    document.getElementById("dvOne-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("dvTwo-tab").style.backgroundColor = "#fff";
    document.getElementById("dvTwo-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("tabs-strings").style.marginTop = "12px";

    document.getElementById("dvThree-tab").style.backgroundColor = "#ff7b00";
    document.getElementById("dvTwo-tab").style.border = "3px solid #ff7b00";
    document.querySelector(".signup-form1").innerHTML = signup_content3;
    document.querySelector('.signup-form2').innerHTML="";
    document.querySelector(".signup-form3").innerHTML="";
}
function Users(fname, lname, email, confemail, pass, confpass) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.confemail = confemail;
    this.pass = pass;
    this.confpass = confpass;

}
// var arr = [10]
// arr[0] = new Students("Anam", 20, 'karachi...')

// console.log(arr[0])
var UsersArr = [];
var ind = 0;
let fname;
let lname;
let email;
let confemail;
let pass ;
let confpass;
let filled = false;
UsersArr[ind] = new Users();

function submit_Form1(){
    fname = document.getElementById('fname').value
    lname = document.getElementById('lname').value
    email = document.getElementById('email').value
    confemail = document.getElementById('confemail').value
    pass = document.getElementById('pass').value
    confpass = document.getElementById('confpass').value
    filled = false;

    if((fname != "" && lname != "" && email != "" && confemail != "" && pass != "" && confpass != "" ) && (email === confemail) && (pass === confpass)){

        UsersArr[ind].fname = fname;
        UsersArr[ind].lname = lname;
        UsersArr[ind].email = email;
        UsersArr[ind].confemail = confemail;
        UsersArr[ind].pass = pass;
        UsersArr[ind].confpass = confpass;
        signup_func2();
        document.getElementById("dvOne-tab").style.backgroundColor = "#add7a8";
        document.getElementById("dvOne-tab").style.border = "3px solid  #add7a8";    
        filled = true;
        ind++;

    }
    else if(email !== confemail){
        document.querySelector('.required-mark-confpass').innerHTML = "*";
        document.querySelector('.required-mark-confemail').innerHTML = "Confirm Email Address is not matched from above field";
    }
    else if(pass !== confpass){
        document.querySelector('.required-mark-confemail').innerHTML = "*";
        document.querySelector('.required-mark-confpass').innerHTML = "Confirm Password is not matched from the above field Password";
    }
    else{
        document.querySelector('.required-mark-confemail').innerHTML = "*";
        document.querySelector('.required-mark-confpass').innerHTML = "*";
        document.getElementById('error-emptyfields').innerHTML = "Please All above fields"
    }
        
}
 