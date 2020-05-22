
function validate(){
   var name=document.getElementById("name").value;
   var email=document.getElementById("email").value;
   var mobile =document.getElementById("mobile").value;
   var subject=document.getElementById("subject").value;
   var message=document.getElementById("message").value;
   var error_message=document.getElementById("error_message");
   error_message.style.padding="10px";
   var text;

   if(name.length<4){
       text="Please Enter Valid Name";
       error_message.innerHTML=text;
       document.getElementById("name").focus();
       return false;
   }

   if(email.indexOf("@")==-1 || email.length<9 || email.indexOf(".")==-1){
    text="Please Enter Valid Email";
    error_message.innerHTML=text;
    document.getElementById("email").focus();
    return false;
}

   if(isNaN(mobile)|| mobile.length!=10 ){
    text="Please Enter Valid Valid Mobile Number";
    error_message.innerHTML=text;
    document.getElementById("mobile").focus();
    return false;
}

   if(subject.length<10){
    text="Please Enter Correct Subject";
    error_message.innerHTML=text;
    document.getElementById("subject").focus();
    return false;
}

if(message.length<26){
    text="Please Enter more than 25 Characters";
    error_message.innerHTML=text;
    document.getElementById("message").focus();
    return false;
}
alert("Form Submitted Successfully & Our Customer Care will Solve your Query within 24 Hours");
return true;

}