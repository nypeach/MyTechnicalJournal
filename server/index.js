// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from mytj server!" });
});

app.listen(PORT, () => {
  PORT === 3001 ?
  console.log(`Server listening on https://localhost/${PORT}`):
  console.log(`Server listening on ${PORT}`)
  ;
});