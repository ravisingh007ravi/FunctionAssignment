const express = require('express');
const router = express.Router();
const xyz = require('../logger')
const a = require('../util/helper')
const b = require('../validator/formatter')
const c = require('../lodash/lodash')
const underscore = require('underscore')
const trim =require('trim')
const lodash =require('lodash')

router.get('/test-me', function (req, res) {
    //problem 1.
    console.log("\n");
    console.log("Problem 1.\n");
    console.log("Calling my function ",xyz.myFunction())
    console.log("\n");
    //problem 2.
    console.log("Problem 2.\n");
    console.log("Calling my function ",a.getBatchInfo())
    console.log("\n");
    //problem 3.
    console.log("Problem 3.\n");
    console.log("Calling my function ",b.infotrim())
    console.log("\n");
    //problem 4.
    console.log("Problem 4.\n");
    console.log("Calling my function ",c.lodash());
    console.log("\n");
    //problem 5.
    console.log("Problem 5.\n");
    let myArray = ["Rupam Gupta", "Dev Gupta", "Uttam", "Shriksnt"];
    let result = underscore.first(myArray);
    console.log("The result of underscores examples api is : ", result);
    
     res.send('My first ever api!')

    
});

module.exports = router;

