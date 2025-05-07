function validateForm()
{
  
    const name=document.getElementById("name").value;
    const address=document.getElementById("address").value;
    const phonenumber=document.getElementById("phone number").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("pwd").value;
    const nameError=document.getElementById("name-error");
    

    const addressError=document.getElementById("address-error");
    const phonenumberError=document.getElementById("phnum-error")
    const emailError=document.getElementById("email-error");
    const pwdError=document.getElementById("pwd-error");
    nameError.textContent="";
    addressError.textContent="";
    phonenumberError.textContent="";
    emailError.textContent="";
    pwdError.textContent="";
  

    if(name=="")
    {
        nameError.textContent="please enter a name properly";
        return false;
    }
    if(address=="")
        {
            addressError.textContent="please enter a address properly";
            return false;
        }

    
    if (regex.test(phone))
         {
        console.log("Valid phone number");
    } 
    else
     {
        console.log("Invalid phone number");
    }
    
        if(password=="" ||password.length<6)
            {
                pwdError.textContent="please enter a password must be atleast 6 characters properly";
                return false;
            }
            if(email=="" ||!email.includes("@"))
            {
                emailError.textContent="please enter valid email address ";
                return false;
            }
            return true;
}