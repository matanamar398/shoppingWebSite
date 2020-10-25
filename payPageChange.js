
/* open new tab when user want pay for any product with credit card*/

const pay = document.querySelector("#payBtn");


let payPage = () => window.open('payPage.html'); ///open new page to creditcard inputs.


pay.addEventListener('click',payPage);

