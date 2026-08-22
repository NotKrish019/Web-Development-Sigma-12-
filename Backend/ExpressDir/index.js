const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log("App is listening on port ", port);
});

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome To Home Page ! <p>Type /USERNAME to go to @USERNAME page :) </p>",
  );
});
app.get("/search", (req,res) => {
    console.log(req.query);
    res.send("No results! Sowy :(");
});
app.get("/:username", (req, res) => {
  let { username} = req.params;
  res.send(`Welcome To Home Page of @${username} !`);
});