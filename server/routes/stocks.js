const express = require('express');
const router = express.Router();
const jsonp = require('jsonp');

// const request = require('request');

router.route('/:symbol')
 .get((req, res) =>{
  jsonp(`http://dev.markitondemand.com/MODApis/Api/Lookup/jsonp?input=${req.params.symbol}`,
    function(err, data) {
     if(err){
       console.error(err.message);
     }else{
       console.log(data);
     }
   });
});




module.exports = router;
