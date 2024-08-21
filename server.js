const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path');

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));


//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});