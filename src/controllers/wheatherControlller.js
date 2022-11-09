const { default: axios } = require("axios");

let wheather = async (req, res) => {

    

    try {

        let cityobj = [];
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        for (let i = 0; i <=cities.length-1; i++) {
            const element = cities[i];
            let obj = { city: cities[i] };
            let result = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=693beff72440e899f9376ddb138c96c3`
            );
            obj.temp = result.data.main.temp;
            cityobj.push(obj);
        }
        let sorted = cityobj.sort((a, b) => a.temp - b.temp);
    
        res.status(200).send({ data: sorted });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.wheather = wheather;