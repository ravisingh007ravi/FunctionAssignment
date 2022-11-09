const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController.js");
const wheatherController=require('../controllers/wheatherControlller.js');
const memeController=require('../controllers/memeController');

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/allVaccination",CowinController.allVaccination);
//Sort whearther data
router.get("/wheatherReport",wheatherController.wheather);
//create joke
router.get("/createjoke",memeController.memeslists);
//Create Memes
router.get("/creatememe",memeController.memecreate);


module.exports = router;