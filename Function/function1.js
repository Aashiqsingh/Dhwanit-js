
// with out return without arguments
function Demo(){
    console.log("Demo function called....");
    
}

Demo();

// without return with arguments

function name(fname , lname){
    console.log("name function called...." , fname , lname);
}

name("dhwanit","garg");

// with return without arguments

function string(){

    return "String function called..."
}

// var x = string()
// console.log(x);
// console.log(string());

// with return with arguments

function add(a,b,c){

    return a+b+c
}

var x = add(3,4,5)
console.log("add function called...",x);

