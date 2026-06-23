import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event,id,stock) => {

let arrLocalStorageProduct = getCartProductFromLS();

const currentProdElem = document.querySelector(`#card${id}`);



let quantity = currentProdElem.querySelector(".productQuantity").innerText;
let price = currentProdElem.querySelector(".productPrice").
innerText;

// console.log(quantity, price);
price = price.replace("PKR", "");

let existingProd = arrLocalStorageProduct.find((curProd) =>  curProd.id === id );

if(existingProd && quantity > 0){
    quantity = Number(existingProd.quantity )+ Number (quantity);
   price =  Number(price * quantity);
   let updatedCart = {id, quantity, price};

  updatedCart = arrLocalStorageProduct.map((curProd) => {
   return curProd.id === id ? updatedCart : curProd;
   
   });
   console.log(updatedCart);
   
   localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));


//    show toast when product added to the cart 

showToast("add", id);
}

if(existingProd) {
    // alert("duplicate");
    return false;
}

price = Number(price * quantity);
quantity = Number(quantity);

// let updatedCart = {id, quantity, price};
arrLocalStorageProduct.push({id, quantity, price });
localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

// update the cart button value 
updateCartValue(arrLocalStorageProduct);


//   show toast when product added to the cart 

showToast("add", id);


};