var next = document.getElementById('next');

var images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]
let currentIndex = 0;

var prev = document.getElementById('prev');


prev.addEventListener("click",()=>{
    
    //                  0 - 1 + 5 % 5
    currentIndex = (currentIndex - 1 + images.length )% images.length;
    
    var image = document.getElementById("image")
    image.src = "/Images/"+images[currentIndex];
})

next.addEventListener("click",()=>{

    currentIndex = (currentIndex + 1)% images.length;

    image.src = "/Images/"+images[currentIndex];
})