document.getElementById("submit").onclick=validate;
function validate(){
    firstNameValidate();
    lastNameValidate();
    emailValidate();
}


function firstNameValidate(){
    var Firstname=document.getElementById("Fistname").value;
    if(Firstname.length==0){
        document.getElementsByClassName('errorSpan')[0].innerHTML="please,enter your First Name"
    }
    else if(Firstname.length<2){
        document.getElementsByClassName('errorSpan')[0].innerHTML ="please, enter valid First Name"
    }else if(Firstname.match('[0-9]+')){
        document.getElementsByClassName('errorSpan')[0].innerHTML ="please, First Name should be a character"
    }
    
    else{
        document.getElementsByClassName('errorSpan')[0].innerHTML=''
    }
}
function lastNameValidate(){
    var Lasttname=document.getElementById("Lastname").value;
    if(Lasttnamestname.length==0){
        document.getElementsByClassName('errorSpan1')[0].innerHTML="please,enter your Last Name"
    }
    else if(Lasttnamestname.length<2){
        document.getElementsByClassName('errorSpan1')[0].innerHTML ="please, enter valid Last Name"
    }else if(Lasttname.match('[0-9]+')){
        document.getElementsByClassName('errorSpan1')[0].innerHTML ="please, Last Name should be a character"
    }
    
    else{
        document.getElementsByClassName('errorSpan1')[0].innerHTML=''
    }
}

function emailValidate(){
    var Email=document.getElementById('email').value;
    if(Email.length==0){
        document.getElementsByClassName('errorSpan')[1].innerHTML="please,enter your email"
        
    }
    else if(!Email.match(/^[^\s@]+@[^\s@]+\.com$/)){
        document.getElementsByClassName('errorSpan')[1].innerHTML="please,enter valid email"
     
    }
    else{
        document.getElementsByClassName('errorSpan')[1].innerHTML=''
       
        
       
    }
}