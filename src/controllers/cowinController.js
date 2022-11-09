let axios = require("axios");





// Problem 1
//  WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date. This is a very basic assignment and totally along the lines of what we covered in the session

let allVaccination= async (req,res)=>{

    try{
        let district= req.query.district;
        let date= req.query.date;

        var options={
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
       
        let result = await axios(options)
        res.status(200).send({ msg: result.data })

    }
    catch(err){
        res.status(500).send({error:err})
    }
}


module.exports.allVaccination=allVaccination