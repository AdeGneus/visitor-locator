const axios = require("axios");

const getIPv4 = (ip) => {
  if (ip.startsWith("::ffff:")) {
    return ip.split(":").pop();
  }
  return ip;
};

exports.greet = async (req, res) => {
  const visitor = req.query["visitor_name"];
  const visitorIp = getIPv4(req.headers["x-forwarded-for"] || req.ip);

  if (!visitor) {
    return res.status(400).json({
      status: "fail",
      message:
        "Let's get to know you visitor. Kindly enter your name as a query",
    });
  }
  console.log(visitorIp);

  try {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json",
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: visitorIp,
        },
      }
    );

    const weatherData = response.data;
    const location = weatherData.location.region;
    const temperature = weatherData.current.temp_c;
    const greeting = `Hello, ${visitor}!, the temperature is ${temperature} degrees Celsius in ${location}`;

    return res.status(200).json({
      client_ip: visitorIp,
      location,
      greeting,
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Error fetching data",
    });
  }
};
