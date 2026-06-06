export let cart=JSON.parse(localStorage.getItem('cart'));
if (!cart){
    cart=[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
    deliveryoptionid:'1'
},{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
    deliveryoptionid:"2"
}];
}

export function addtocart(productId,quantity){
           let matching;
       cart.forEach((cartitem)=>{
        if(productId==cartitem.productId){
            console.log(cartitem);
    console.log(cartitem.productId);
            matching=cartitem;
        }
       });
       if(matching){
        matching.quantity+=quantity;
       }else{
        cart.push({
            productId:productId,
            quantity:quantity,
            deliveroptionid:"1"
       });
       };
       savetodtorage();
};

function savetodtorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function removefromcart(productId){
    const newcart=[];
    cart.forEach((cartitem)=>{
        if(cartitem.productId!==productId){
            newcart.push(cartitem);
        }
    });
    cart=newcart;
    savetodtorage();
}