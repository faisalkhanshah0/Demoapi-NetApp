console.time("Time this");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  //Query 1

  let obj = {
    Entry_Point: "Eseries",
    Primary_Serial_Number: "1124FG000524",
    Partner_Serial_Number: "211409000190",
    Primary_Serial_Number_Status: "Valid",
    Primary_Serial_Number_Error: "User Has Access to Serial Number",
    ASUP_STATUS: "ON",
    Last_Asup_Date: "5/5/2017",
    ESeries_Software:[]
  }

  //Query 2

  let obj2 = {
    Family: "E-SERIES",
    System: "2610",
    "Internal Storage": "E2600 2GB CNTL NO HIC",
    Type: "High Availability (Duplex)"

  }

  obj.ESeries_System = obj2;


    //Query 4
    let result4 = ["FDE_SKM-2600","REMOTE_MIRRORING"];
    for(let i=0;i<result4.length;i++){
      obj.ESeries_Software.push(result4[i]);
    }
            

  //Query 5
  let result5 = [3,4];

  for(let i=0;i<result5.length;i++){

    let obj5 = {
                Storage: [],
                Expansion_Enclosure: [],
                Base_Enclosure: "DE5600 DISKLESS CM",
               }

      //Query 6
               
      let result6 = [5,6];
      for(let j=0;j<result6.length;j++){
        let obj6 = {
          "Storage Type": "DE6600 NLSAS 3TB",
		    	"Storage-Quantity": "10"

          }

        obj5.Storage.push(obj6);   
      }  
      
       //Query 3
  let result3 = [1,2];

  for(let i=0;i<result3.length;i++){
    let obj3 = { 
                "name": "DE6600 DISKLESS DM" ,
                "qty": "10"
              }

              obj5.Expansion_Enclosure.push(obj3);  
      }
      obj.ESeries_Storage = obj5;        


  }


  //Query 7

  let obj7 = {
      Existing_Response_Time: "NBD PREMIUM ONSITE",
      Existing_Service_End_Date: "12/12/2018",
      Existing_Warranty_End_Date: "12/12/2018"
 }
  
  obj.Existing_Service = obj7;

  if(obj){
    console.timeEnd("Time this");
    res.status(200).json(obj);
  }
  else{
    res.status(400).json({message:'Data Not Found'});
  }
  
});



module.exports = router;
