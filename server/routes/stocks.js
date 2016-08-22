const express = require('express');
const router = express.Router();
// const jsonp = require('jsonp');
// const fetchJsonp = require('fetch-jsonp');
const request = require('request');

router.route('/:symbol')
 .get((req, res) =>{
   console.log('hit route');
  request(`http://dev.markitondemand.com/MODApis/Api/Lookup/jsonp?input=${req.params.symbol}`,
   function(err, response, body) {
     if(!err && response.statusCode == 200 ) {
       let newObj = JSON.parse(body)
       console.log('newObj', newObj);
     }
     res.send(body);
      })
});



 //     if(err) cb(err);
 //     if(!err){
 //       let companyData = JSON.parse(data)
 //       cb(null, companyData)
 //     }
 //   })
 // })

module.exports = router;
