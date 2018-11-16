console.time("Time this");
var express = require('express');
var router = express.Router();
var async = require("async");

/* GET users listing. */
router.get('/', function(req, res, next) {

  var stack = [];
  var functionOne = function(callback){
    //Query 1

    let obj1 = {
      EntryPoint:"System",
      SerialNumber: 211409000190,
      SerialNumber_Status: "Valid",
      SerialNumber_Message: "User Has Access to Serial Number",
      ASUP_Status: "ON",
      Last_Asup_Date: "5/5/2017", 
    }
      callback(null,obj1);
  }

  var functionTwo = function(callback){
    //Query 2
    let res2 = {}
    let obj2 = {
      Family: "FAS",
      Model: 8040,
      Controller_Count: 2,
      IOXM: 1
    }
    res2.System = obj2;
    callback(null,res2);
  }

  var functionThree = function(callback){
     //Query 3
    let res3 = {Storage:[]}; 
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
        res3.Storage.push(obj3);        


    }
    callback(null,res3);
  }
  var functionFour = function(callback){
    //Query 5
    let res5 = {Softwares:[]};
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
        res5.Softwares.push(obj5);        


    }
    callback(null,res5);
  }
  var functionFive = function(callback){
    // Query 7
    let res7 = {};
    let obj7 = {
      "Existing_Response_Time": "NBD PREMIUM ONSITE",
      "Existing_Service_End_Date": "12/12/2018",
      "Existing_Warranty_End_Date": "12/12/2018"
   }
   res7.Existing_Services = obj7;
    callback(null,res7);
  }

  // for(let i=0;i<10;i++){
  //   stack.push(functionOne);
  // }
  stack.push(functionOne);
  stack.push(functionTwo);
  stack.push(functionThree);
  stack.push(functionFour);
  stack.push(functionFive);
  

  async.parallel(stack, function(err, result){
    let merged = {...result[0], ...result[1], ...result[2], ...result[3], ...result[4]};
    console.timeEnd("Time this");
    res.send(merged);
  })

  
});

module.exports = router;
