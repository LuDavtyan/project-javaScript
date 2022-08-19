/*let intervalId;
function refreshToken(){
        fetch('http://localhost:3000/auth/refreshtoken',{
         method: 'GET',
         headers: {
             'content-type': 'application/json',
             'authorization': 'Bearer ' + sessionStorage.getItem('token')
         },
     })
         .then(response =>{
         if(response.status !== 200){
             throw new Error();
         }
           return response.json()
        }).then((result)=>{
         sessionStorage.setItem('token', result.token)
        }).catch(err =>{
         clearInterval(intervalId)
         window.location.href = 'login.html' ;
         sessionStorage.clear();
        })
 } 
    refreshToken();
    intervalId = setInterval(()=>{
     refreshToken()
 },200000)
    fetch('http://localhost:3000/auth/products',{
     method:'GET',
     headers: {
        'content-type': 'application/json',
        'authorization': 'Bearer ' + sessionStorage.getItem('token')
     },
 })
     .then((res)=>{
     return res.json()
    })
     .then((result)=>{
     console.log(result, 'result')
})*/
//////////////////////////////////////
let btn = document.querySelectorAll('.btn')
let img = document.querySelectorAll('.img')
const productsInfo = {
    brend:'All',
    gender:'All'
}
for (const item of img) {
    item.addEventListener('click', (e)=> {
        productsInfo.brend = e.target.name
        console.log(productsInfo)
    })
}
for (const item of btn ) {
    item.addEventListener('click', (e)=> {
        productsInfo.gender = e.target.name
        console.log(productsInfo)
    })
}
//////////////////////////////////////////////// zambyuxi kod
const  itemBox = document.querySelectorAll('.nameparf');
const  cartCont = document.getElementById('cart_content');
function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
};

function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
};
function addToCart(e){
    this.disabled = true;
    let cartData = getCartData() || {};
    let parentBox = this.parentNode;
    let itemId = this.getAttribute('data-id');
    let itemName = parentBox.querySelector('.name').innerHTML;
    let itemPrice = parentBox.querySelector('.p0').innerHTML;
    console.log(itemId,itemName,itemPrice)
    if(cartData.hasOwnProperty(itemId)){
        cartData[itemId][2] += 1;
    } else {
        cartData[itemId] = [itemName, itemPrice, 1];
    }
    if(!setCartData(cartData)){
        this.disabled = false;
    }
    return false;
}
for(let i = 0; i < itemBox.length; i++){
    addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}
let heart = document.querySelectorAll('.fa-heart')
  heart.forEach(item => {
      item.addEventListener('click', ()=>{
      // item.style.color = 'red';
      item.classList.toggle("active")
  })
});

function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){
         handler.call( elem );
     });
  }
  return false;
}
  

/////////////////////////////////slide
const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let slides = document.querySelectorAll('.slide');

let index = 1;
let slideId;
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
slide.append(firstClone);
slide.prepend(lastClone);
const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;
console.log(slides);
const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, 3000);
};
const getSlides = () => document.querySelectorAll('.slide');
slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});
const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};
const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};
slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});
slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);
startSlide();

export {getCartData}