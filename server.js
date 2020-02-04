const express = require("express");

const userRoute = require("./routes/indexRoutes");

require("dotenv").config();
const app = express();
const port = process.env.port;

app.use(
  express.urlencoded({
    extends: false
  })
);
app.use("/private/api/", userRoute);

console.log(` live on port ${port}  ************'''`);

app.listen(port);
