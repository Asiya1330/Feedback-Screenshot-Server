require("dotenv").config();
const express = require("express");
require("./associations");
const routes = require("./routes.js");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3001;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
