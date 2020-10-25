
/*4 empty elements that characterize a product description */

const resultPic = document.querySelector(".ResultPagePic"); 
const resultDet = document.querySelector("#productDetails"); 
const resultPrice = document.querySelector("#productPrice");  
const resultPriceBefore = document.querySelector("#productPriceBefore"); 


/* insert data to this 4 elments */

resultPic.src = localStorage.getItem("Result"); 
resultDet.innerHTML = localStorage.getItem("ResultText");
resultPrice.innerHTML += " " + localStorage.getItem("price");
resultPriceBefore.innerHTML += "  " +String(parseInt(localStorage.getItem("price"))+200) + "$"; ///change price to int and calc ,after return to string to display.