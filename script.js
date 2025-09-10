var form = document.querySelector("form")
var email=document.querySelector("#user")
var pass=document.querySelector("#pass")
var ans=document.querySelector(".msg")
form.addEventListener("submit",function(dets)
{
    dets.preventDefault();
    const usernameRegex = /^[a-zA-Z_][a-zA-Z0-9_]{2,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    let emailans=usernameRegex.test(email.value)
    let passans=passwordRegex.test(pass.value)
    document.querySelector("#usererr").textContent=""
    document.querySelector("#passerr").textContent=""
    ans.textContent=""

    var isvald=true
    if(!emailans)
    {
        isvald=false;
        document.querySelector("#usererr").textContent="User Name is Not Valid"
        
    }
    if(!passans)
    {
       isvald=false;
       document.querySelector("#passerr").textContent="Password is Not Valid"
    }
    if(isvald)
    {
        ans.textContent="Everything is Correct"
    }






    

})