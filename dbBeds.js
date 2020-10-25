
const imagesSrcBeds =  document.querySelectorAll("#pic13,#pic14,#pic15,#pic16,#pic17,#pic18,#pic19,#pic20,#pic21,#pic22,#pic23,#pic24");
const DescriptionsBeds =  document.querySelectorAll("#val13,#val14,#val15,#val16,#val17,#val18,#val19,#val20,#val21,#val22,#val23,#val24");
            
var bedsDb = [    //12x3 matrix (src,name,price)

["https://www.oldrids.co.uk/images/products/large/13712.jpg","Brookside Bella Button Tufted Wingback Upholstered Bed","250$"],
["https://www.oldrids.co.uk/images/products/large/7975.jpg","Carson Carrington Blaney Solid Pine Wood Spindle Bed","250$"],
["https://www.oldrids.co.uk/images/products/large/2137.jpg","Copper Grove Pogradec Tufted Storage Bed","250$"],
["https://www.oldrids.co.uk/images/products/large/13174.jpg","Soft Essentials Ultra-soft 6-piece Deep Pocket Bed Sheet Set","250$"],
["https://www.oldrids.co.uk/images/products/large/5191.jpg","Sierra Beige Fabric Queen Bed, Bench or Set by iNSPIRE Q Modern","250$"],
["https://www.oldrids.co.uk/images/products/large/13708.jpg","Copper Grove Gargan Upholstered Panel Bed","250$"],
["https://www.oldrids.co.uk/images/products/large/13718.jpg","Copper Grove Rivne Storage Platform Bed with Drawers","250$"],
["https://www.oldrids.co.uk/images/products/large/30468.jpg","Bed Frame,Metal Frame Platform Bed Frame, Single Bed Twin","250$"],
["https://www.oldrids.co.uk/images/products/large/19421.jpg","Acme Furniture Masate Espresso Leatherette Queen Bed","250$"],
["https://www.oldrids.co.uk/images/products/large/2140.jpg","Portland Full Platform Bed with Flat Panel Foot Board and Full Size Urban Trundle Bed","250$"],
["https://www.oldrids.co.uk/images/products/large/19423.jpg","Abby Full Platform Bed","250$"],
["https://www.oldrids.co.uk/images/products/large/19424.jpg","Porch & Den Caton Metal Bed","250$"]
]              
               


/*This loop insert data to products */
for(let i = 0 ; i < bedsDb.length; i++){ 

      imagesSrcBeds[i].src = bedsDb[i][0];            //beds
      DescriptionsBeds[i].innerHTML= bedsDb[i][1];   //beds
}   

