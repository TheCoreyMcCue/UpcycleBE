import { connectDB } from "./config/db.js";
import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import { products } from "./data/products.js";

dotenv.config();

connectDB();

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
  console.log(
    `Server running in ${process.env.NODE_ENV} enviornment on port ${port}`
      .yellow.bold
  )
);
