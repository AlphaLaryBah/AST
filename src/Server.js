// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require("path");
// const https = require("https");


// // const url ="mogodb://localhost:27017";



// const app = express();
// // app.use(express.static("public"));

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());

// https.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=MIEQEUMMRJ3IRC6P', (resp) => {
//   let data = '';

//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });
// // app.use(
// //   "/css",
// //   express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
// // )
// // app.use(
// //   "/js",
// //   express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
// // )
// // app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))

// // let apiKey ="MIEQEUMMRJ3IRC6P"
// // let query =""
// // app.get("/", function(req, res) {
// // const url="https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=MIEQEUMMRJ3IRC6P"
// //   https.get(url, function(response){
// //     console.log(response.statusCode);
// //     response.on("data", function(data){
// //       const financeData =JSON.parse(JSON.stringify(data));
// //      console.log(financeData);


// //     });
// //   });
// //    res.send('hello world')

// // });
// app.listen(3001, function () {
//   console.log("server startted on port 3000");
// });