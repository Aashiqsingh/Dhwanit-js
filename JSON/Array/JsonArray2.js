var products = [
    {
        id:1,
        name: "Iphone",
        price: 2000,
        inStock: true,
        color:["black","white","silver","gold"],

    },
    {
        id:2,
        name: "Samsung",
        price: 1200,
        inStock: false,
        color:["black","white","blue"],
    },
    {   
        id:3,
        name: "Google Pixel",
        price: 3456,
        inStock: true,
        color:["black","white","gray"],
    }
]


console.log(products);


// for(let i=0;i<products.length;i++){
//     console.log(products[i].color);
// }

// var sum = 0;
// var TotalPrice = products.forEach((pro)=>{

//     sum = sum + pro.price;

// })
// console.log(sum);

// var totalPrice = products.reduce((sum,prod)=>{

//     return sum + prod.price;
// },0)


// var totalPrice = products.reduce((sum,prod)=> sum + prod.price,0)
// console.log("Total price of products",totalPrice);

// var filteredProducts = products.filter((prod)=>{

//     return prod.price >= 1200 && prod.price <= 2000

// })
// console.log(filteredProducts);


var FindColor = products.filter((prod)=>{


    return prod.color.includes("gold")
})
console.log(FindColor);