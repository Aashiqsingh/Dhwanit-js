const Zomato = ()=>{

    console.log("Order is about to placed...");
    

    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({orderId:101,amount:499,message:"Order successfully"})
        },3000)
    })
}

const Payment = (option)=>{

    console.log("Payment is about to placed...");
    

    return promise = new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                paymentId:option.orderId,
                paymentStatus:"success",
                message:"Payment successful",
                receiveAmount:option.amount
            })
        },4000)
    })
}

Zomato().then((data)=>{
    console.log(data);
    Payment(data).then((payment)=>{
        console.log("payment ..",payment);
    }).catch((err)=>{
        console.log("payment error....",err);
        
    })
}).catch((error)=>{
    console.log("zomato error....",error);
    
})