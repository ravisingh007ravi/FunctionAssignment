 const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

// Q1.
// // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
// : 4 is missing
// // Your route code will look like this

router.get("/sol1", function (req, res) {

//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of
//numbers till last digit in the array

let arr= [1,2,3,5,6,7];
let n=arr.length+1;
let expected_sum=((n*(n+1))/2);

const sum = arr.reduce((a, b) => {  
      return a +b;
    });

    let missingNumber=expected_sum-sum;
console.log(missingNumber);
res.send( { data: missingNumber } );
});


// Q2.
// // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33,
// 34, 35, 37, 38]: 36 is missing
// Your route code will look like this

router.get("/sol2", function (req, res) {

//logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all
//numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing

let arr= [33, 34, 35, 37, 38]
let n=arr.length+1;

let expected_sum=((n*(arr[0]+arr[arr.length-1]))/2);

const sum = arr.reduce((a, b) => {  
      return a +b;
    });

    let missingNumber=expected_sum-sum;
console.log(missingNumber);
res.send( { data: missingNumber } );
});
 module.exports = router;
