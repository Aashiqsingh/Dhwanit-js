function Demo(){

    console.log("Demo function is called");
}


function test(x){

    // console.log(x);
    x();
}

// test(10)
// test(11.89)
// test("ram")
// test(true)

test(Demo)