// let i=0;
// while(i<5){
//     console.log("hello dhwanit...");
//     i++;
// }


var num = 3456;
var rev = 0
while(num>0){   /// 123
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.trunc(num / 10);
}

console.log("reverse....",rev);