// var -- global scope 
// let -- local scope 
// const -- local + can't change value

// var a = 10
// let b = 10.2
// console.log("Outer value of a = ",a);
// console.log("Outer value of b = ",b);

// const x = 10
// console.log("outer value of x = ",x);
{

    // console.log("inner value of x = ",x);
    // console.log("inner value of a = ",a);
    // console.log("inner value of b = ",b);

    // var aa = 20
    // let bb = true

    // console.log("inner value of aa = ",aa);
    // console.log("inner value of bb = ",bb);

    // const pi = 3.14
    // console.log("inner value of pi = ",pi);

}

// console.log("outer value of pi = ",pi);
// console.log("Outer value of aa = ",aa);
// console.log("Outer value of bb = ",bb); // error value is not define


// var a = 10

// console.log("value of a = ",a);

// var a = 40.5
// console.log("value of a = ",a);

// let a = 12
// console.log("value of a = ",a);

// a = 15
// console.log("value of a = ",a);

const pi = 3.14
console.log("pi value = ",pi);

pi = 3.15
console.log("pi  value = ",pi);