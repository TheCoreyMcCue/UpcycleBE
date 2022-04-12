const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/listings", (req, res) => {
  res.json(products);
});
app.get("/api/listings/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  res.json(product);
});

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(`Server running in ${process.env.PORT} enviornment on port ${port}`)
);
