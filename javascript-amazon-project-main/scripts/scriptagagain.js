import {cart ,addtocart} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatcurrency } from './utils/money.js';
let producthtml = ``;

products.forEach((product) => {
    producthtml += `
        <div class="product-containers">
            <div class="product-image1">
                <img src="${product.image}" alt="">
            </div>
            <div class="product-name1">${product.name}</div>
            <div class="ratings1">
                <div class="star1">
                    <img src="images/ratings/rating-${product.rating.stars * 10}.png" alt="">
                </div>
                <div class="count1">${product.rating.count}</div>
            </div>
            <div class="price-ofproduct1">${formatcurrency(product.priceCents)}</div>
            <div class="selectquantity1">
                <select class="actualselect actualselect-${product.id}" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="addeddisplay-${product.id}  displaycart hide">
                <div class="righticon"><img src="images/right_icon-removebg-preview.png" alt=""></div>
                <div class="addedtext">Added</div>  
            </div>
            <div class="add-button1">
                <button class="actualbutton-${product.id} js-addcart" data-product-id=${product.id}>
                Add to Cart
                </button>
            </div>
        </div>
    `;
});

document.querySelector(".grid-columns").innerHTML = producthtml;

function updatecartquantity(){
     let cartquantity=0;
        cart.forEach((cartitem)=>{
        cartquantity+=cartitem.quantity;
    })

       document.querySelector(".cart-quantity").innerHTML=cartquantity;
}
document.querySelectorAll(".js-addcart").forEach((button)=>{
    button.addEventListener("click",()=>{

       const productId=button.dataset.productId;
       const addedmessage=document.querySelector(`.addeddisplay-${productId}`);
       
        addedmessage.classList.remove("hide");
        setTimeout(()=>{
            addedmessage.classList.add("hide");
        },2000);
   const selectquantity = document.querySelector(`.actualselect-${productId}`);
           const quantity=Number(selectquantity.value);
           console.log(selectquantity);
                 console.log(quantity);

        addtocart(productId,quantity);
        updatecartquantity();
      
       console.log(cart);
    });
});