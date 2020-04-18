// Setup environment Variables
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./graphql/resolvers/bookResolver");
const typeDefs = require("./graphql/schemas/booksSchema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to api-starter.");
});

server.applyMiddleware({ app });
app.listen(process.env.PORT, (err) => {
  if (err) console.error(err);
  else console.log("Server runing.");
});
