



const search =  document.querySelector(".searchInput");   
const searchBtn   =  document.querySelector(".searchBtn");

let flag = 1;

let searchPage = () =>
{
    location.href = 'result.html';
}

let resultEmpty = () =>
{
    location.href = 'resultEmpty.html';
}


/*This function wait to user input 
And checks whether the product exists in the database*/

let checkSearch = (e) => {

    if(search.value == "")   //string empty.
    {
    flag = 0;  //this flag use to khow if have any result or not
    alert("your input is empty.");
    }

    else 
    {
        for(let i= 0 ; i<bedsDb.length && flag; i++)  //Checks if it exists in the database and saves it
                                                        //product on the storage ,and go to other page to display result. 
        {
            if(bedsDb[i][1] === search.value)
            {
               flag = 0;
               localStorage.setItem("Result",bedsDb[i][0]);
               localStorage.setItem("ResultText",bedsDb[i][1]); 
               localStorage.setItem("price",bedsDb[i][2]); 
               searchPage();
            }

            else if(sofasDb[i][1] === search.value)
            {
               flag = 0;
             localStorage.setItem("Result",sofasDb[i][0]);
             localStorage.setItem("ResultText",sofasDb[i][1]); 
             localStorage.setItem("price",sofasDb[i][2]); 
             searchPage();
            }

           else if(tablesDb[i][1] === search.value){   
               flag = 0;           
               localStorage.setItem("Result",tablesDb[i][0]);
               localStorage.setItem("ResultText",tablesDb[i][1]); 
               localStorage.setItem("price",tablesDb[i][2]);   
               searchPage();
            }
        }
    }   
            if(flag)   //when flag equ to 1 the product no exist . call to another page display no result
                resultEmpty();        
}

 //events:
 
 searchBtn.addEventListener('click',checkSearch); //serach btn click
 
