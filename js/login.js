document.getElementById("log").onclick=validate;

function validate(){
emailValidate();
passwordValidate();
all_correct()

}
var e_flag, p_flag=false

function emailValidate(){
    var Email=document.getElementById('email').value;
    if(Email.length==0){
        document.getElementsByClassName('errorSpan1')[0].innerHTML="please,enter your email"
        e_flag=false
    }
    else if(!Email.match(/^[^\s@]+@[^\s@]+\.com$/)){
        document.getElementsByClassName('errorSpan1')[0].innerHTML="please,enter valid email"
        e_flag=false
    }
    else{
        document.getElementsByClassName('errorSpan1')[0].innerHTML=''
        e_flag=true
        
       
    }
}
function passwordValidate(){
    var pass=document.getElementById('pass').value
    var passw= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    
    if(pass.length==0){
        document.getElementsByClassName('errorSpan2')[0].innerHTML="please,enter your password"
        p_flag=false
     } 
    else if(!pass.match(passw)){
        document.getElementsByClassName('errorSpan2')[0].innerHTML="please,enter valid password"
        p_flag=false
    }
    else{
        document.getElementsByClassName('errorSpan2')[0].innerHTML=''
        
        p_flag=true
       
    }
}
////Function to check if all inputs correct
function all_correct (){
    if(e_flag && p_flag){
        window.location.href="home.html"
    }
}



