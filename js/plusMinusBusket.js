import { getCartData } from "./scriptIndex.js";
import { openCart } from "./drawBusket.js";

document.addEventListener("click",(e)=>{
    let perfumeName = e.target.parentNode.parentNode.firstChild.innerHTML;
    if(e.target.classList.contains("fa-plus")){
      let plus = "plus";
      plusMinus(plus,perfumeName);
      return;
    }
    if(e.target.classList.contains("fa-minus")){
      let minus = "minus";
      plusMinus(minus,perfumeName);
      return;
    }
})

function plusMinus(sign,perfumeName){
    let deffer;
    if(sign==="plus"){ deffer=1; }
    else{ deffer=-1; }
    let cartData = getCartData();
    let data1;
    let dataArray;
    for(let data in cartData){
        data1=data;
        if(cartData[data].includes(perfumeName)){
          cartData[data][2]+=deffer;
          dataArray=cartData[data];
        } else {
          dataArray=cartData[data];
        }
    }
    cartData[data1]=dataArray;
    for(let data in cartData){
        if(cartData[data][2]===0){ delete cartData[data]; }
    } 
    
    localStorage.setItem("cart",JSON.stringify(cartData));
    openCart();
}
  