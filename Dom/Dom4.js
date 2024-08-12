var a = 1
const red = ()=>{
    document.body.style.backgroundColor = "red"


    setTimeout(()=>{
        blue()
    },3000)
}

const blue = ()=>{
    document.body.style.backgroundColor = "blue"

    setTimeout(() => {
        yellow()
    }, 3000);
}

const yellow = ()=>{
    document.body.style.backgroundColor = "yellow"

    setTimeout(() => {
        red()
    }, 3000);

    a = 3;
    
}

