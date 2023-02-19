// this is folder to manage the enverenement of express 
require("dotenv").config();
const express = require("express");

const app = express();
//  this  is to accept  data in json format 
app.use(express.json());
// this is basically to decode the data 
app.use(express.urlencoded());
// this is express routes   
require("./routes/test.routes")(app);
// this is to serve our publc folder as a static folder 
app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});
