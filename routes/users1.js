console.time("Time this");
var express = require('express');
var router = express.Router();
// var async = require("async");

/* GET users listing. */
router.get('/', function(req, res, next) {

  let serial_number = req.query.serial_number?req.query.serial_number.trim():undefined; // Splitting query string variable 
		

    //Query 1

    let obj = {
      EntryPoint:serial_number,
      Primary_Serial_Number: 941517000062,
      Partner_Serial_Number: 211409000190,
      Primary_Serial_Number_Status: "Valid",
      Primary_Serial_Number_Error: "User Has Access to Serial Number",
      ASUP_STATUS: "ON",
      Last_Asup_Date: "5/5/2017"
    }
  
    let check = obj.EntryPoint.toLowerCase().trim();
    if(check === 'altavault'){   //Altavault Condition
      // let binds = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result2 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds, options);
      //   console.log(result2);
        let obj2 = {
          "AVA_Hardware_Parts": "AVA400-144TB-4TBX36-R6",
          "AVA_Storage_Parts": "AVA10S-4TBX12-QS-R6",
          "AVA_SW_Cap_Parts": "AVA-SW-400-0P-C"
        }
        obj.AV_System = obj2;
    }
    else if(check === 'cluster software only'){    //Cluster Software Only Condition
      // let binds = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result2 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds, options);
      // console.log(result2);
      
       obj.Software = [];
       
       let result2 = [1,2];
       for(let i=0;i<result2.length;i++){
      let obj2 = {		
        "Type": "Premium Bndl",
        "Protocol": "CIFS",
        "Model": "2040",
        "Qty" : "10"			
        }
      
      obj.Software.push(obj2);
       }
       

    }
    else if(check === 'bridges'){    //Bridges Condition
      // let binds = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result2 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds, options);
      // console.log(result2);
      
       obj.Bridges = [];
       
       let result2 = [1,2];
       for(let i=0;i<result2.length;i++){
      let obj2 = {
        "name": "X1613A" ,
        "qty": "10"
        }
      
      obj.Bridges.push(obj2);
       }
       

    }
    else if(check === 'pamii-flashcache'){    //PAMII-FLASHCACHE Condition
      // let binds = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result2 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds, options);
      // console.log(result2);
      
      let obj2 = {
        "Product_Type": "Flash Cache",
        "Part_Number": "FLASHCACHE2-1TB-R6"
      }
      obj.System = obj2;
       

    }
    else if(check === 'hci-renewals'){    //Hci-renewals Condition
      // let binds = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result2 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds, options);
      // console.log(result2);
      
      let obj2 = {
        "HCI_System": "H300",
        "Model": "H30CE",
        "Qty": "10"
      }
      obj.System = obj2;

         // let binds3 = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result3 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds3, options);
      // console.log(result2);

       obj.Software = [];
       
       let result3 = [1,2];
       for(let i=0;i<result3.length;i++){
      let obj3 = {
        "Software_Type": "ABC",
        "Software_Sub_Category": "XYZ"
        }
      
      obj.Software.push(obj3);
       }

       // let binds4 = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result4 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds4, options);
      // console.log(result4);

      obj.Storage = [];
       
      let result4 = [1,2];
      for(let i=0;i<result4.length;i++){
       let obj4 = {
        "Storage_Type": "ABC",
        "Storage_Sub_Category": "XYZ"			
         }
       
       obj.Storage.push(obj4);
      }
       

    }
    else if(check === 'rfscl'){    //Rfscl Condition
      // let binds = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result2 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds, options);
      // console.log(result2);
      
      let obj2 = {
        "System": "SF3010"
      }
      obj.SF_System = obj2;


      // let binds3 = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result3 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds3, options);
      // console.log(result2);

      obj.Software_Pack = [];
       
      let result3 = [1,2];
      for(let i=0;i<result3.length;i++){
       let obj3 = {
        "name": "25TB Software Pack" ,
        "qty": "10"
         }
       
       obj.Software_Pack.push(obj3);
      }
       

    }
    else if(check === 'eseries'){    //Eseries Condition
      // let binds = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result2 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds, options);
      // console.log(result2);
      
      //Query 2

      let obj2 = {
        Family: "E-SERIES",
        System: "2610",
        "Internal Storage": "E2600 2GB CNTL NO HIC",
        Type: "High Availability (Duplex)"
    
      }
    
      obj.ESeries_System = obj2;


      


      //Query 3
      let result3 = [3,4];
    
      for(let i=0;i<result3.length;i++){
    
        let obj3 = {
                    Base_Enclosure: "DE5600 DISKLESS CM",
                    Expansion_Enclosure: [],
                    Storage: [],
                  }

          //Query 5
          let result5 = [1,2];
        
          for(let i=0;i<result5.length;i++){
            let obj5 = { 
                  "name": "DE6600 DISKLESS DM" ,
                  "qty": "10"
                  }
        
                obj3.Expansion_Enclosure.push(obj5);  
          }
    
          //Query 6
                  
          let result6 = [5,6];
          for(let j=0;j<result6.length;j++){
            let obj6 = {
              "Storage Type": "DE6600 NLSAS 3TB",
              "Storage-Quantity": "10"
              }
    
            obj3.Storage.push(obj6);   
          }  
          
          
          obj.ESeries_Storage = obj3;        
    
    
      }

      //Query 4
      obj.Software = [];
      let result4 = [1,2];
      for(let i=0;i<result4.length;i++){
        let obj4 = { 
          "name": "FDE_SKM-2600"  ,
          "qty": "1"
        }

        obj.Software.push(obj4);  
      }
       

    }
    else if(check === 'efseries'){    //Efseries Condition
      // let binds = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result2 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds, options);
      // console.log(result2);
      
      //Query 2

      let obj2 = {
        "System": "EF540"
      }
    
      obj.EFSeries_System = obj2;


      


      //Query 3
      let result3 = [3,4];
    
      for(let i=0;i<result3.length;i++){
    
        let obj3 = {
                    Base_Enclosure: "DE5600 EF DISKLESS DM",
                    Expansion_Enclosure: [],
                    Storage: [],
                  }

          //Query 5
          let result5 = [1,2];
        
          for(let i=0;i<result5.length;i++){
            let obj5 = { 
                  "name": "DE5600 EF DISKLESS DM" ,
                  "qty": "10"
                  }
        
                obj3.Expansion_Enclosure.push(obj5);  
          }
    
          //Query 6
                  
          let result6 = [5,6];
          for(let j=0;j<result6.length;j++){
            let obj6 = {
              "Storage Type": "DE5600 EF SSD 800GB",
              "Storage-Quantity": "10"
              }
    
            obj3.Storage.push(obj6);   
          }  
          
          
          obj.EFSeries_Storage = obj3;        
    
    
      }

      //Query 4
      obj.Software = [];
      let result4 = [1,2];
      for(let i=0;i<result4.length;i++){
        let obj4 = { 
          "name": "FDE_SKM-2600"  ,
          "qty": "1"
        }

        obj.Software.push(obj4);   
      }
       

    }
    else if(check === 'system'){    //System Condition
      // let binds = {Part_number : result.rows[0][1]};  // var to bind with second query
      // let result2 = await connection1.execute("select PART_NUMBER, DRIVE_CAPACITY||'-'||NUMBER_OF_DRIVES||'-'||STORAGE_CAPACITY_NUMBER||'-'||SHELF_TYPE||'-'||CONTROLLER_COUNT as AHP,ph6,ph5 from EIM_DRM_PRODUCT_DETAILS where PART_NUMBER=:Part_number", binds, options);
      // console.log(result2);
      
      let obj2 = {
        "Family": "FAS",
        "Model": "8040",
        "Controller_Count": "2",
        "Is_IOXM": "Y"
      }
      obj.System = obj2;

        //Query 3

      obj.Storage = [];
      

      let result3 = [1,2];

      for(let i=0;i<result3.length;i++){
        let obj3 = { 
            Shelf_Type: "DS224C",
            Shelf_Quantity: "10",
            Encryption: "NSE",
            Drives:[]
            }

        //Query 4        

        let result4 = [4,5];
        for(let j=0;j<result4.length;j++){
          let obj4 = {		
            Drive_Interface: "SAS",
            Drive_Category: "SSD",
            Drive_Capacity: "3800",
            Drive_Quantity: "24"
          }

          obj3.Drives.push(obj4);

        }
        obj.Storage.push(obj3);        


      }

      //Query 5
      obj.Software = [];
      let result5 = [3,4];

      for(let i=0;i<result5.length;i++){

        let obj5 = {
              software: [],
              Existing_Software_End_Date: "12/12/2018"
            }

        //Query 6
            
        let result6 = [5,6];
        for(let j=0;j<result6.length;j++){
          let obj6 = {
            Bundle: "Base Bundle",
            Protocol: "SNAPLOCK"
          }

          obj5.software.push(obj6);   
        }         
        obj.Software.push(obj5);        


      }
       

    }
    else{
      let obj2 = {
        "message": 'else part - nothing to add here'
      }
      obj.AV_System = obj2;
    }

    //Query 3
  
    let obj3 = {
      "Existing_Response_Time": "NBD PREMIUM ONSITE",
      "Existing_Service_End_Date": "12/12/2018",
      "Existing_Warranty_End_Date": "12/12/2018"
   }
    
    obj.Existing_Service = obj3;
  
    if(obj){
      console.timeEnd("Time this");
      res.status(200).json(obj);
    }
    else{
      res.status(400).json({message:'Data Not Found'});
    }

  
});

module.exports = router;
