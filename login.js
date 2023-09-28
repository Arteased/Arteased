const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const email = form.email.value
    const password = form.password.value

    const authenticated = authentication(email,password)

    if(authenticated){
        window.location.href = "homepagea.html"
    }else{
        alert("wrong")
    }
})

function authentication(email,password){
    if(email === "email" && password === "password"){
       return true 
    }else{
        return false
    }
}

let passwordtoogle = document.getElementById("passwordtoogle");
let password = document.getElementById("password");

passwordtoogle.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}
