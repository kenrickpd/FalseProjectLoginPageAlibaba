const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const confirm = document.getElementById('password-confirmm');

var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const emailwrong = document.querySelector("#email-remind");
const passwordwrong = document.querySelector("#password-remind");
const confirmwrong = document.querySelector("#confirm-remind");
email.addEventListener('keyup', (e) =>{
    e.preventDefault();
    checkemail();
});

password.addEventListener('keyup', (e) =>{
    e.preventDefault();
    checkpassword();
});

confirm.addEventListener('keyup', (e) =>{
    e.preventDefault();
    checkconfirm();
});

function checkemail(){
    const emailinput = email.value.trim();
    if(emailinput === ''){
        emailwrong.style.display="flex";
        email.style.border = "1px solid #ff6a00";
        
    }else{
        if(emailinput.match(emailRegex)){
            emailwrong.style.display="none";
            email.style.border = "1px solid #808080";
            console.log('benar');
        }else{
            emailwrong.style.display="flex";
            email.style.border = "1px solid #ff6a00";
            console.log('salah');
        }
    }
}

function checkpassword(){
    const passwordinput = password.value.trim();
    if(passwordinput === ''){
        passwordwrong.style.display="flex";
        password.style.border = "1px solid #ff6a00";

    }else{
        passwordwrong.style.display="none";
        password.style.border = "1px solid #808080";
    }
}

function checkconfirm(){
    const confirminput = confirm.value.trim();
    const passwordinput = password.value.trim();

    if(confirminput === ''){
        confirmwrong.style.display="flex";
        confirm.style.border = "1px solid #ff6a00";
    }else{
        if(confirminput != passwordinput){
            confirmwrong.style.display="flex";
            confirm.style.border = "1px solid #ff6a00";
            console.log('salah');
        }else{
            confirmwrong.style.display="none";
            confirm.style.border = "1px solid #808080";
            console.log('benar');
        }
    }

}