const clear = document.getElementById('clear_cart');
clear.addEventListener('click', () => {
    localStorage.removeItem('cart');
})