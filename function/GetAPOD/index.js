const axios = require("axios");

module.exports = async function (context, req) {
  let url = "https://api.nasa.gov/planetary/apod";
  var secretKey = process.env["NasaAPIKeyFromKeyVault"];

  url += `?api_key=${secretKey}`;
  if (req.query.date) url += `&date=${req.query.date}`;

  const response = await axios.get(url).then((x) => x.data);

  context.res = {
    body: response,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

// let url = "https://api.nasa.gov/planetary/apod";
// module.exports = async function (context, req) {
//   var secretKey = process.env["NasaAPIKeyFromKeyVault"];
//   url += `?api_key=${secretKey}`;

//   if (req.query.date) url += `&date=${req.query.date}`;
//   const response = await axios.get(url).then((x) => x.data);

//   context.res = {
//     body: response,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
// };
