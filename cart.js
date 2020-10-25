//variables:
const cartAddBtn = document.querySelectorAll("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16,#b17,#b18,#b19,#b20,#b21,#b22,#b23,#b24,#b25,#b26,#b27,#b28,#b29,#b30,#b31,#b32,#b33,#b34,#b35,#b36"); //cart buttons 


itemsWasAddes = Array(37).fill(0);  //empty arrays with zeros

var itemsInCart =  0;   ///save Quantity.
var totalPrice = 0;     //sum the price of all items toghter.



/*This function save product data in the storage. */

function saveProductDetails(thisProduct)
{

        var picSrc = document.getElementById("pic"+ thisProduct).src;
        localStorage.setItem("myImage",picSrc); 

        var pId = document.getElementById("val"+ thisProduct).innerText;
        localStorage.setItem("myP",pId);

        localStorage.setItem("myId",thisProduct);
        
        if(findProductNumber<13)
              localStorage.setItem("myprice",sofasDb[thisProduct][2]);       
        else if(findProductNumber < 25 && findProductNumber > 12)
              localStorage.setItem("myprice",bedsDb[thisProduct][2]);
        else
            localStorage.setItem("myprice",tablesDb[thisProduct][2]);

}

/*This function get button id and connction to this product details.*/

function cartAddPruduct(e,id){   //create element with img and details about product.

  e.preventDefault();
  let findProductNumber = 0;

 if(id.length == 2)  //b1-b9
    findProductNumber= id.substring(1,2);
 else
 findProductNumber=  id.substring(1,3); //b10-b36


  for(let i = 1; i<=36 ;i++)
        if(i == findProductNumber)//get id
        {   if(itemsWasAddes[i] == 0) //check if already added
           { 
            itemsInCart ++;         //count items
            itemsWasAddes[i]++;       //inc for next iteration check if alredy press
            alert("The product was successfully added to the cart");
            break;
            }
           
        }
        
    saveProductDetails(findProductNumber);  
}
     
      
             
  

//events:

/*Wait for click each any product to add to the cart */
for(let i = 0 ; i < cartAddBtn.length ; i++ ){      
    cartAddBtn[i].addEventListener('click',function(e){
       cartAddPruduct(e,cartAddBtn[i].id) });
    cartAddBtn[i].addEventListener('click',function(e){
               cartAddPruduct(e,cartAddBtn[i].id) });
    cartAddBtn[i].addEventListener('click',function(e){
            cartAddPruduct(e,cartAddBtn[i].id) });
    }

