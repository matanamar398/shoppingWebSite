/*--------------------Inputs--------------------*/
const firstAndLastName = document.querySelectorAll("#fname,#lname"); 
const emInput = document.querySelector("#emailInput");
const cardinput = document.querySelector("#cardInput");
const cvcInput = document.querySelector("#cvcInput");
const dateMInput = document.querySelector("#dateInput1");
const dateYInput = document.querySelector("#dateInput2");

/*--------------------text massage--------------------*/
const firstNameText = document.getElementById("ms1"); //fn text
const lastNameText = document.getElementById("ms2"); //ln text
const emailText = document.getElementById("ms3"); //email text
const cardText = document.getElementById("ms4"); //card text
const dateText = document.getElementById("ms5"); //card text
const cvcText = document.getElementById("ms6"); //cvv text


const confirmBtn = document.querySelector("#sumbit");

let emailOk = true;


/*--------------------Functions--------------------*/

function checkFirstLastName()
{

    for(let i = 0 ; i < firstAndLastName.length ; i++)   //2 elements
   {
   
        if((firstAndLastName[i].value.length == 0) ||(firstAndLastName[i].value.length == 0)) //check  empty string
        {
            if(i == 0)  //check if first name empty , last name empty
                firstNameText.innerHTML = "*Please enter first name.";
            else 
                lastNameText.innerHTML = "*Please enter last name.";
         }
    
    else    
    {
        for(let k = 0 ; k < firstAndLastName[i].value.length ; k++)  //over the elements and check they strings To be only with letters.
            if(firstAndLastName[i].value[k] < 'a' || firstAndLastName[i].value[k] > 'z'){
                firstAndLastName[i].value = null;   //reset input when is invaild
             if(i == 0) //so this is the first name
                firstNameText.innerHTML = "*Only lowercase and uppercase letters";
            else    //so this is the last name
                lastNameText.innerHTML = "*Only lowercase and uppercase letters";
            }
    }
  }
}

function checkCardNumber()
{ 
   if(cardinput.value.length == 0){ //check if not empty.
        cardText.innerHTML = "*Please enter a credit card number.";    
   }

  else {
    for(let k = 0 ; k < cardinput.value.length ; k++) ////over the elements and check they strings To be only with numbers.
        if(cardinput.value[k] < '0' || cardinput.value[k] > '9'){
            cardText.innerHTML = "*The credit card number must contain only numbers"; 
            cardinput.value = null;
            
        }
    }

  if(cardinput.value.length > 16 || cardinput.value.length < 16 && cardinput.value.length > 0){ //check if card string contain exactly 16 digits.
    
        cardText.innerHTML = "*The credit card number must contain 16 numbers";
        cardinput.value = null;
     }
}


function checkEmailCharactersOrder(dothIdx,strudelIdx,countStrudel,countDots)
{

    if((!(emInput.value[0] >= '0') || (emInput.value[0] <= '9')) || (emInput.value[0] == '.') || (emInput.value[0] == '@'))//Checking the order of the characters.
    {
        emInput.value = null;
        emailText.innerHTML = "*Checking again the order of the characters."; 
    }
  
     if((countStrudel != 1 || countDots != 1 ) && (emInput.value.length > 0))    ///check if this chars appear 1 times. and if chars appear at all.
     { 
          emailText.innerHTML = "*email Must conatin '@' and '.' 1 time!";
          emInput.value = null;
     }
  
      if(strudelIdx == dothIdx + 1 || strudelIdx == dothIdx -1)
      {
          emInput.value = null;
          emailText.innerHTML = "*  '.' need to be after '@'  !";
      }

}


function checkEmailCharacters()
{
let countDots = 0;
let dothIdx = 0;
let countStrudel = 0;
let strudelIdx = 0;

    for(let j = 0; j < emInput.value.length ; j++)   //check vaild digits in the string.
    {     
      if(emInput.value[j] == '@')
      { 
          countStrudel++;
          strudelIdx = j;
      }
  
      if(emInput.value[j] == '.')
      {
          countDots++;
          dothIdx = j;
      }
  
 if(emInput.value[j] < 'a' || emInput.value[j] > 'z')
       if(emInput.value[j] < 'A' || emInput.value[j] > 'Z')
            if(emInput.value[j] < '0' || emInput.value[j] > '9')
                if(emInput.value[j] != '@' && emInput.value[j] != '.'){
                        emInput.value = null;  
                        emailText.innerHTML = "*email address can contain ('a'-'z', 'A'-'Z'),('0' - '9'),('.','@') only."
                         emailOk = false;
                        }
    }
    
    if(emailOk)
    checkEmailCharactersOrder(dothIdx,strudelIdx,countStrudel,countDots);
}


function checkEmail()
{


    if(emInput.value == ""){   //check string empty.
       emailText.innerHTML = "Please Enter your email."
       emailOk = false;
    }

    if(emailOk)  
      checkEmailCharacters();

}

   
function checkDate()
{

 if((dateMInput.value.length == 0) ||(dateYInput.value.length == 0))  //check empty string.
        dateText.innerHTML = "*Please enter a credit card date.";

 else {
    for(let k = 0 ; k < dateMInput.value.length ; k++)   //over the elements and check all the digits are numbers.
    if(dateMInput.value[k] < '0' || dateMInput.value[k] > '9'||dateYInput.value[k] < '0' || dateYInput.value[k] > '9'){
            dateText.innerHTML = "*The credit date  must contain only numbers"; 
            dateText.value = null;
    }
    } 

   if((dateMInput.value.length > 2) ||(dateYInput.value.length < 2 ) && (dateYInput.value.length != 0 )){   //check date len to be exactly 2 digits.
        dateMInput.value = null;
        dateYInput.value = null;
        dateText.innerHTML = "*date can contain only 2 numbers";
    }

  else  if((dateMInput.value > '12') || (dateMInput.value < '01') && (dateYInput.value != "")) //check month Range. 01-12 ok.
        dateText.innerHTML = "*enter month bettwen 01-12";
}

function checkCvc(){

     if((cvcInput.value.length == 0) ||(cvcInput.value.length == 0)){  //check empty string.
        cvcText.innerHTML = "*Please enter a CVC card number.";
     }

    else{
    for(let k = 0 ; k < cvcInput.value.length ; k++)  //over elements and check the string conatin only numbers.
        if(cvcInput.value[k] < '0' ||cvcInput.value[k] > '9')
            cvcText.innerHTML = "*The cvc must contain only numbers"; 
      
    }

   if((cvcInput.value.length > 3)|| (cvcInput.value.length < 3) && (cvcInput.value.length > 0)) //check string len, to be exactly 3 digits.
       cvcText.innerHTML = "*The cvc must contain  only 3 numbers";

}

/* This function check validation credit card info.*/

function checkCreditInformation(){

    checkFirstLastName();
    checkEmail();
    checkCardNumber();
    checkDate();
    checkCvc();
}

/*-----------------------------------------------------*/

confirmBtn.addEventListener('click',checkCreditInformation);


