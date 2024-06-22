// function gretter(a,b,c){

//     if(a>b && a > c){
//         console.log("A is gretter ",a);
//     }
//     else if(b>a && b > c){
//         console.log("B is gretter ",b);
//     }
//     else if(c>a && c > b){
//         console.log("C is gretter ",c);
//     }
//     else{
//         console.log("All are equal");
//     }
// }

// gretter(10,40,12);

const gretter = (a,b,c)=> a > b ? a > c ? a : c : b
var x = gretter(90,40,92);
console.log(x);