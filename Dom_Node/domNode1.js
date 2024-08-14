function domNode(){

    var mydiv = document.getElementById("mydiv");


    var h1 = document.createElement("h1");
    h1.innerHTML = "Hello World"

    var a = document.createElement("a");
    a.innerHTML = "Google"
    a.setAttribute("href","https://www.google.com")

    var img = document.createElement("img");
    img.src = "https://i.pinimg.com/236x/f0/ae/ef/f0aeef34b91ce64dbaa97116a73cee25.jpg"
    img.setAttribute("height","300px")
    img.setAttribute("width","300px")


    mydiv.appendChild(h1)
    mydiv.appendChild(a)
    mydiv.appendChild(img)
}