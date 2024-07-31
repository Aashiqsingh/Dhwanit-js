var colors = ["red","green","yellow","blue","violet","pink","purple","brown","orange","brown"]

function changeColor(){


    var random = Math.floor(Math.random()*colors.length);
    console.log(random);

    var mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = colors[random]

}