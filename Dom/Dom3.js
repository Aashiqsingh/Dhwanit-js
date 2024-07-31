function changeText(){

    var nameErr = document.getElementById("nameErr")
    var name = document.getElementById("name")

    console.log(name);


    // output.innerHTML = name

    if(name.value.length <= 3){
        nameErr.innerHTML = "Name should be at least 4 characters long."
        nameErr.style.color = "red"
        
    }
    else{
        nameErr.innerHTML = ""
        
    }


}