const myDiv = document.querySelector(".myDiv");  //the div in html


/* This dynamic function  create product elements and take data from the stroage then insert this elements to html page.  */

function createProduct()
{

  const btn = document.createElement("button");
  btn.classList.add("cartRemoveItem");
  btn.innerHTML = 'X';
  
  const myImg =document.createElement("img");       //create an image
  myImg.classList.add("imgCart");                   //create class for image
  myImg.src = localStorage.getItem("myImage"); 
  myImg.width = "150";
  myImg.height = "150";

  const myP = document.createElement("p");          //create p for product
  myP.innerHTML = localStorage.getItem("myP");
  myP.classList.add("myPstyle");

  const myPrice = document.createElement("p");          //create price for product
  myPrice.classList.add("priceProduct");
  myPrice.innerHTML = localStorage.getItem("myprice");

  const newDiv = document.createElement("div");    //create New div
  newDiv.classList.add("divOnCart");
  
  const underLine = document.createElement("div");          //create price for product
  underLine.classList.add("productLine");
 
  newDiv.appendChild(myImg);
  newDiv.appendChild(myP);
  newDiv.appendChild(btn);
  newDiv.appendChild(myPrice);
  newDiv.appendChild(underLine);
  myDiv.appendChild(newDiv);


    btn.onclick = () => {   
      newDiv.remove();  //when click the button the product removed.
      itemsWasAddes[localStorage.getItem("myId")]--; //when remove item from the div ,remove it from array.to access add it again
      itemsInCart--;
      }

    }


createProduct();