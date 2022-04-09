const express = require("express");
const products = require("./data/products");

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

app.listen(5000, console.log("Server started on port 5000"));
