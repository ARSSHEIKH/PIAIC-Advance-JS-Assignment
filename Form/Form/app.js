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

function signup_func1(){
    document.querySelector(".signup-form1").innerHTML = signup_content1;
    document.querySelector('.signup-form2').innerHTML="";
    document.querySelector(".signup-form3").innerHTML="";
}
function signup_func2(){
    document.querySelector(".signup-form1").innerHTML = signup_content2;
    document.querySelector('.signup-form2').innerHTML="";
    document.querySelector(".signup-form3").innerHTML="";
}
function signup_func3(){
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
function submit_Form1(){
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let confemail = document.getElementById('confemail').value
    let pass = document.getElementById('pass').value
    let confpass = document.getElementById('confpass').value

    UsersArr[ind] = new Users();

    if(fname != "" && lname != "" && email != "" && confemail != "" && pass != "" && confpass != "" ){
        document.getElementById('error-emptyfields').innerHTML = ""
        UsersArr[ind].fname = fname;
        UsersArr[ind].lname = lname;
        UsersArr[ind].email = email;
        UsersArr[ind].confemail = confemail;
        UsersArr[ind].pass = pass;
        UsersArr[ind].confpass = confpass;
        ind++;
    }
    else{
        document.getElementById('error-emptyfields').innerHTML = "Please All above fields"
    }
        
}
 