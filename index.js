const simpleFetch = require("simple-fetch");

console.log(process.env);

exports.rainCheck = (req, res) => {
  const location = req.query.location || "01864";
  const accuWeatherUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${location}?apikey=${process.env.ACCUWEATHER_API_KEY}`;
  simpleFetch.getJson(accuWeatherUrl).then(
    (response) => {
      console.log(response);
      res.send(200);
    },
    (err) => {
      console.error(err);
      res.send(500);
    }
  );
};
