const axios=require('axios');

let memeslists= async (req,res)=>{

    try{
      let options={
        method:"get",
        url:"https://api.imgflip.com/get_memes"
      }
        let memes = await axios(options)
        res.status(200).send({msg:memes.data})
      }catch(err){
        res.status(500).send(err)
      }
    }
    
   const memecreate = async function (req, res) {
        try {
          let template = req.query.imag_id;
          let text = req.query.upText;
          let text1 = req.query.downText;
          let options={
            method:"get",
            url:`https://api.imgflip.com/caption_image?template_id=${template}&text0=${text}&text1=${text1}&username=prakashku5566&password=9570938768`
          }
          let meme = await axios(options)
            
          res.status(200).send(meme.data)
        } catch (err) {
          res.status(500).send(err);
        }
}

module.exports.memeslists=memeslists;
module.exports.memecreate=memecreate;