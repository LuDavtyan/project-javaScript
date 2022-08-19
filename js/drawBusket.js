import { getCartData } from "./scriptIndex.js";
const butRecycle1 = document.querySelector(".fa-basket-shopping")
butRecycle1.addEventListener("click",()=>{
  openCart()
})

function openCart(){
  let cartData = getCartData();
  draw(cartData);
  return false;
}

function draw(cartData){
  let totalItems = '';
  let specOfer = document.querySelector("#specialOf")

     for(let items in cartData){
          totalItems += `<tr>`;
          for(let i = 0; i < cartData[items].length; i++){
            if(i==cartData[items].length-1){
              totalItems += `<td><i class="fa-solid fa-minus"></i>   ${cartData[items][i]}  <i class="fa-solid fa-plus"></i></td>` 
            }else{
              totalItems += `<td>${cartData[items][i]}</td>`;
            }
          }
          totalItems += `</tr>`;
      }
  specOfer.innerHTML=totalItems;
}

export {openCart}