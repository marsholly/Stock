const express = require('express');
const router = express.Router();
const request = require('request');

router.route('/:symbol')
 .get((req, res) =>{
  request(`http://dev.markitondemand.com/MODApis/Api/Lookup/json?input=${req.params.symbol}`,
    function(err, response, body) {
      if(err) console.log('err:', err);
      if(!err && response.statusCode == 200){
        let stockData = JSON.parse(body)
        console.log('stockData:', stockData);
      }
      res.send(JSON.parse(body));
   });
});

module.exports = router;
