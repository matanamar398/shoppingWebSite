
const imagesSrcSofas =  document.querySelectorAll("#pic1,#pic2,#pic3,#pic4,#pic5,#pic6,#pic7,#pic8,#pic9,#pic10,#pic11,#pic12");
const DescriptionsSofas =  document.querySelectorAll("#val1,#val2,#val3,#val4,#val5,#val6,#val7,#val8,#val9,#val10,#val11,#val12");


const sofasDb = [    //12x3 matrix (src,name,price)

["https://www.oldrids.co.uk/images/products/large/19348.jpg","Alexander & James Fable 2 Seater","1000$"],
["https://www.oldrids.co.uk/images/products/large/30463.jpg","Actona Debbie 2 Seater Sofa - Navy Blue","250$"],
["https://www.oldrids.co.uk/images/products/large/30464.jpg","G Plan Holmes Fabric 1 Seater Sofa","650$"],
["https://www.oldrids.co.uk/images/products/large/30465.jpg","Sherborne Milburn Petite 1 Seater Leather Fixed","280$"],
["https://www.oldrids.co.uk/images/products/large/30469.jpg","G Plan Jackson Fabric 2 Seat Static Sofa","950$"],
["https://www.oldrids.co.uk/images/products/large/30466.jpg","Cairns Static Sofa","400$"],
["https://www.oldrids.co.uk/images/products/large/30467.jpg","G Plan Chloe Leather 1 Seater Sofa","100"],
["https://www.oldrids.co.uk/images/products/large/30468.jpg","Stressless Emma Side Panel Right","720$"],
["https://www.oldrids.co.uk/images/products/large/32194.jpg"," Parker Knoll Froxfield 2 Seater Fabric","900$"],
["https://www.oldrids.co.uk/images/products/large/31265.jpg","Wood Bros Weybourne Fabric Sofa","870$"],
["https://www.oldrids.co.uk/images/products/large/31281.jpg","Parker Knoll Amersham Grand Formal Leather","550$"],
["https://www.oldrids.co.uk/images/products/large/31258.jpg","G Plan Jackson Leather 3 Seat Static Sofa","1250$"]
            ]              
        
/*This loop insert data to products */
for(let i = 0 ; i < sofasDb.length; i++){ 

      imagesSrcSofas[i].src = sofasDb[i][0];            // sofas
      DescriptionsSofas[i].innerHTML= sofasDb[i][1];    // sofas

}   

