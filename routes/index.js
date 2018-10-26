var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //Query 1

  let obj = {
    EntryPoint:"System",
    SerialNumber: 211409000190,
    SerialNumber_Status: "Valid",
    SerialNumber_Message: "User Has Access to Serial Number",
    ASUP_Status: "ON",
    Last_Asup_Date: "5/5/2017",
    Storage:[],
    Softwares:[], 
  }

  //Query 2

  let obj2 = {
    Family: "FAS",
    Model: 8040,
    Controller_Count: 2,
    IOXM: 1
  }

  obj.System = obj2;
 
  //Query 3
  let result3 = [1,2];

  for(let i=0;i<result3.length;i++){
    let obj3 = { 
              Shelf_Type: "DS224C",
              Shelf_Quantity: 10,
              Encryption: "NSE",
              Drives:[]
              }

      //Query 4        

      let result4 = [4,5];
      for(let j=0;j<result4.length;j++){
        let obj4 = {		
          Disk_Interface: "SAS1",
          Disk_Category: "SSD1",
          Disk_Capacity: "3800GB1",
          Drive_Quantity: 241
          }

          obj3.Drives.push(obj4);

      }
      obj.Storage.push(obj3);        


  }

  //Query 5
  let result5 = [3,4];

  for(let i=0;i<result5.length;i++){

    let obj5 = {
                Software: [],
                Existing_Software_End_Date: "12/12/2018"
               }

      //Query 6
               
      let result6 = [5,6];
      for(let j=0;j<result6.length;j++){
        let obj6 = {
          Bundle: "Base Bundle2",
          Protocol: "SNAPMANAGER"
          }

        obj5.Software.push(obj6);   
      }         
      obj.Softwares.push(obj5);        


  }

  //Query 7

  let obj7 = {
    "Existing_Response_Time": "NBD PREMIUM ONSITE",
    "Existing_Service_End_Date": "12/12/2018",
    "Existing_Warranty_End_Date": "12/12/2018"
 }
  
  obj.Existing_Services = obj7;

  if(obj){
    res.status(200).json(obj);
  }
  else{
    res.status(400).json({message:'Data Not Found'});
  }
  
});



module.exports = router;
