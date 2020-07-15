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