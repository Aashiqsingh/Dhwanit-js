

function changeText(){

    var x = document.getElementById("txt")
    console.log(x.innerHTML);

    x.innerHTML = "Hello world"
    x.style.backgroundColor = "blue"
    x.style.color = "white"
}

function changeHref(){

    var myLink = document.getElementById("myLink")
    myLink.href = "https://www.netflix.com"
    myLink.innerHTML = "Netflix"
}

function changeSize(){
    var myImg = document.getElementById("myImg")
    myImg.style.height = "400px"
    myImg.style.width = "400px"
    myImg.src = "https://s7d1.scene7.com/is/image/wbcollab/India_PM_Narendra_Modi-2?qlt=90&fmt=webp&resMode=sharp2"
}