var myForm = document.getElementById('myForm')
var username = document.getElementById('username');
var password = document.getElementById('password')
var email = document.getElementById('email');
var register=document.getElementById('register')




function checkName(){
    console.log(username.value)
    var name2 = username.value.trim()
    console.log(name2)
   
    if(name2.length <= 3){
        handleError(username , 'invalid' , "Name must be More Than 3 characters");
        return false;
      
    }
    else{
        handleError(username , 'valid');
       
    }

}
function checkPassword(){
    var reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    
    passvalid = password.value.trim();
    if(!reg.test(passvalid)){ handleError(password ,'invalid' ,  "incorrect data");
    return false;}
    
    else{
        handleError(password , 'valid')
    }

    
    console.log(reg.test(passvalid)) 

}

function checkEmail(){
    var reg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    emailvaid = email.value.trim()
    if(reg.test(emailvaid)) handleError(email , 'valid');
    
    else handleError(email , 'invalid' ,"please enther a valid email");
    
}

function handleError (input ,  type , message = ''){
    var small = input.nextElementSibling;
    small.textContent = message;
   if (type === 'invalid') {
    input.style.borderColor="red" ;
    small.style.color="red ";
    return false;
   }  
   else if(type === 'valid'){
    input.style.borderColor = "gray";
   }
}


myForm.addEventListener('input', function(e){
    console.log(e.target.id);
    switch(e.target.id){
        case 'username':
            checkName()
        break;
        case 'email':
            checkEmail()
        break;
        case 'password':
            checkPassword()
        break;
        
    }

})

  function validateForm() {
  
    var x = document.forms["myForm"]["username"].value;
    var y = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["password"].value;
    if (x == "" || x == null ||y == "" || y == null  ||z== "" || z== null) {
     
        document.getElementById("warning").innerHTML= ("your information must be filled out");
      return false;
    }
  }
  


