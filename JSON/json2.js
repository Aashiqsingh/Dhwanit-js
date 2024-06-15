var Phone = {
    name:"Iphone",
    price: 23456,
    stock: true,
    color:["red","white","green","yellow"],
    warranty: "2years",
    address:{
        city:"ahemdabad",
        street :"202 C.G road ",
        State:"Gujarat",
        pincode:380002,
        country:"India"
    }
}

// console.log(Phone);
// console.log(Phone.name);
// console.log(Phone.price);
// console.log(Phone.stock);
// console.log(Phone.color);
// console.log(Phone.color[1]);
// console.log(Phone.address.city);

// console.log(Phone.color[0]);



for(let i=0;i<Phone.color.length;i++){
    console.log(Phone.color[i]);
}