// Setup environment Variables
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");

const rootValue = require("./graphql/resolvers/index");
const schema = require("./graphql/schema/index");

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to api-starter.");
});

app.use("/graphql", graphqlHTTP({ schema, rootValue }));

app.listen(process.env.PORT, (err) => {
  if (err) console.error(err);
  else console.log("Server runing.");
});
