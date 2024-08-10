// var btn = document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     alert("Button Clicked!")
// })

// btn.addEventListener("mousedown",()=>{
//     btn.style.backgroundColor = "red"
// })

var div = document.getElementsByClassName("box")
div[0].addEventListener("mouseenter",()=>{
    div[1].style.backgroundColor = "yellow"
})

div[0].addEventListener("mouseleave",()=>{
    div[1].innerHTML = "<h1>Hello world</h1>"
})

var circle = document.getElementsByClassName("circle")[0]
var a = 1
circle.addEventListener("mouseenter",()=>{
    // for(let i=0;i<div.length;i++){
        // div[i].style.backgroundColor = "green"

        setTimeout(()=>{
            div[0].style.backgroundColor = "blue"
        },1000)

        setTimeout(() => {
            div[0].style.backgroundColor = "red"
        }, 4000);
    // }

    // console.log(a++);
    
})