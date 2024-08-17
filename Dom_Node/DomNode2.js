var mydiv = document.getElementById('mydiv');
var btn = document.getElementById('btn');

btn.addEventListener("click",()=>{

    var form = document.createElement('form');
    var namelable = document.createElement("lable");
    namelable.innerHTML = "Name"
    var nameInput = document.createElement("input");
    nameInput.id = "name";
    var emaillable = document.createElement("lable");
    emaillable.innerHTML = "Email"
    var emailInput = document.createElement("input");
    emailInput.setAttribute("id","email")
    emailInput.setAttribute("type","email")
    var btn = document.createElement("input")
    btn.setAttribute("type","submit")
    btn.setAttribute("value","Submit")
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        var user = {
            name:name,
            email:email
        }
        console.log(user);
        
    })



    mydiv.appendChild(form);
    form.appendChild(namelable);
    form.appendChild(nameInput);
    form.appendChild(emaillable);
    form.appendChild(emailInput);
    form.appendChild(btn);
})