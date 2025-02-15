function validate(e){
    e.preventDefault()
    const email=document.getElementById("email").value
    const pass=document.getElementById("password").value
    const age=document.getElementById("age").value
    const msgbox=document.getElementById("message")

    let msg=""
    if (email===""){
        msg="pls enter an email"
        msgbox.style.color="red"
    }
   else if (pass===""){
        msg="pls enter an password"
        msgbox.style.color="red"
    }
   else if (age===""){
        msg="pls enter an age"
        msgbox.style.color="red"
    }
    else{
        msg="login succesful"
        msgbox.style.color="green"
    }
    msgbox.innerText=msg
}