const cancelBtn = document.querySelector("#notPay");



function reutrnToCart()
{

if (window.confirm("Do you really want to leave?")) 
    window.open("cart.html", "");
      
}


cancelBtn.addEventListener('click',reutrnToCart);