//products:
const p1 = document.querySelector("#p1");   
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const smallPics = document.querySelectorAll(".pics"); //beds pics
const sofas = document.querySelector(".sofas"); //sofas pics
const tables1 = document.querySelectorAll(".pics4"); //tables pics
const tables2 = document.querySelectorAll(".pics5");//tables pics
const homePage = document.querySelector("#shop"); //main page
const cartBtn = document.querySelector("#cartBtn"); //cart btn


//arrow functions:
let changeHtml1 = () => location.href = 'sofas.html';
let changeHtml2 = () => location.href = 'beds.html';
let changeHtml3 = () => location.href = 'tables.html';
let mainPage = () => location.href = 'index.html';
let cartPage = () => location.href = 'cart.html';



//events:
p1.addEventListener('click',changeHtml1);
p2.addEventListener('click',changeHtml2);
p3.addEventListener('click',changeHtml3);
homePage.addEventListener('click',mainPage);
cartBtn.addEventListener('click',cartPage);
sofas.addEventListener('click',changeHtml1);



for (var j = 0 ; j< smallPics.length ;j++)  //when click one of the 6 small pics
    smallPics[j].addEventListener('click',changeHtml2);

    
for (var i = 0 ; i< tables1.length ;i++){
tables1[i].addEventListener('click',changeHtml3);
tables2[i].addEventListener('click',changeHtml3);
}


