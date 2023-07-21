const mongoose = require("mongoose");
require("dotenv").config();
const connectionParams = {
  useNewUrlParser: true,
};
const url =
`mongodb+srv://mustafa-attaye:mustafa-attaye@clester0.963nech.mongodb.net/homes?retryWrites=true&w=majority`;
//we need to name the dB in connection uri after net/


const connection = mongoose
  .connect(url, connectionParams)
  .then(() => console.log("Connected to database"))
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
module.exports = connection;
