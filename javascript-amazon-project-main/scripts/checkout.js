import { cart ,removefromcart} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatcurrency } from "./utils/money.js";
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js'
import { deliveroptions } from "../data/deliveroptions.js";
hello();
const today=dayjs();
const deliverydate=today.add(7,'days');
console.log(deliverydate.format('dddd, MMMM D'));
let cartsummary='';

cart.forEach((cartItem)=>{
    const productId=cartItem.productId;

    let matchingproduct;
    products.forEach((product)=>{
        if(product.id===productId){
            matchingproduct=product;
        }
    });
    console.log(matchingproduct);

    const deliveryoptionid=cartItem.deliveryoptionid;

    let deliveryoption;
    deliveroptions.forEach((option)=>{
      if(option.id===deliveryoptionid){
        deliveryoption=option;
      }
    });

  //   const today=dayjs();
  // const deliverydate=today.add(
  //   deliveroption.deliverydays,'days'
  // );
  // const datestring=deliverydate.format(
  //   'dddd, MMMM D'
  // );

    cartsummary+=`
      <div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingproduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingproduct.name}
                </div>
                <div class="product-price">
                  ${formatcurrency(matchingproduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingproduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
              
          ${deliveryoptionhtml(matchingproduct,cartItem)}
                
              </div>
            </div>
          </div>
    `;
});

function deliveryoptionhtml(matchingproduct,cartItem){
  let html='';
  deliveroptions.forEach((deliveroption)=>{
    const today=dayjs();
    const deliverydate=today.add(
      deliveroption.deliverydays,'days'
    );
    const datestring=deliverydate.format(
      'dddd, MMMM D'
    );

    const pricestring=deliveroption.pricecents===0 ? 'FREE' : `${formatcurrency(deliveroption.pricecents)}`

    const ischecked=deliveroption.id===cartItem.deliveroptionid;
    html+=`
    <div class="delivery-option">
                  <input type="radio"
                  ${ischecked ? 'checked':''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingproduct.id}">
                  <div>
                    <div class="delivery-option-date">
                     ${datestring}
                    </div>
                    <div class="delivery-option-price">
                     ${pricestring}- Shipping
                    </div>
                  </div>
                </div>
    `
  });
  return html;
}
document.querySelector(".js-order-summary").innerHTML=cartsummary;
console.log(cartsummary);

document.querySelectorAll(".js-delete-link").forEach((link)=>{
    link.addEventListener('click',()=>{
       const productId= link.dataset.productId;
       removefromcart(productId);
       const container=document.querySelector(`.js-cart-item-container-${productId}`);
       console.log(cart);
       console.log(container);
       container.remove();
    });
});