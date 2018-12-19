const express = require("express");
// create the express app
const app = express();
// create middleware to handle the serving the app
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, (req, res) => {
  res.sendfile(__dirname + "/dist/index.html");
});
// Create default port to serve the app on
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Starting at port : ${port}`); // eslint-disable-line no-console
});
