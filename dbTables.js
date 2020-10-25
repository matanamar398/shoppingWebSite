//consts:

const imagesSrcTables =  document.querySelectorAll("#pic25,#pic26,#pic27,#pic28,#pic29,#pic30,#pic31,#pic32,#pic33,#pic34,#pic35,#pic36");
const DescriptionsTables =  document.querySelectorAll("#val25,#val26,#val27,#val28,#val29,#val30,#val31,#val32,#val33,#val34,#val35,#val36");

var tablesDb = [    //12x3 matrix (src,name,price)

["https://www.oldrids.co.uk/images/products/large/30570.jpg","Royal Oak Nest of Tables","250$"],
["https://www.oldrids.co.uk/images/products/large/23488.jpg","Beverley Nest Of 2 Tables","250$"],
["https://www.oldrids.co.uk/images/products/large/23588.jpg","Provence Oak Nest Of Tables","250$"],
["https://www.oldrids.co.uk/images/products/large/30093.jpg","Ercol Originals 354 Nest Of Tables","250$"],
["https://www.oldrids.co.uk/images/products/large/35222.jpg","Trento Bar Table","250$"],
["https://www.oldrids.co.uk/images/products/large/4884.jpg","Seattle Bar Table","250$"],
["https://www.oldrids.co.uk/images/products/large/31360.jpg","Newport Lamp Table","250$"],
["https://www.oldrids.co.uk/images/products/large/30079.jpg","Porto Dining Table","250$"],
["https://www.oldrids.co.uk/images/products/large/31546.jpg","Newport Side Table","250$"],
["https://www.oldrids.co.uk/images/products/large/21404.jpg","Cromwell Lamp Table","250$"],
["https://www.oldrids.co.uk/images/products/large/18590.jpg","Provence Oak Nest Of Tables","250$"],
["https://www.oldrids.co.uk/images/products/large/27950.jpg","Brooklyn Lamp Table","250$"]
            ]              
        
/*This loop insert data to products */
for(let i = 0 ; i < tablesDb.length; i++){ 

      imagesSrcTables[i].src = tablesDb[i][0];          
      DescriptionsTables[i].innerHTML= tablesDb[i][1];    
}   
