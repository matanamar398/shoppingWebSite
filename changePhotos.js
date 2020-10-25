const picsLeftSide = document.querySelector("#picLeft");



let l = 0;  //left side


//this arrays contains the photos url
var photosLeft = [
    "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg",
     "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_960_720.jpg", 
     "https://www.oldrids.co.uk/images/products/large/2207.jpg",
     "https://www.oldrids.co.uk/images/products/large/32418.jpg",
     "https://www.oldrids.co.uk/images/products/large/32411.jpg"
    ];


    /* insert new src every 5 seconds */

let changePhotos1 = () =>
{
if(l == 5)
l = 0;
picsLeftSide.src = photosLeft[l];
l++; 
}

setInterval(changePhotos1, 3000);

