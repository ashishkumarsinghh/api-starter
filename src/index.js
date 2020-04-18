// Setup environment Variables
import { config } from "dotenv";
config();

import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import rootValue from "./graphql/resolvers/";
import typeDefs from "./graphql/schemas/";

const server = new ApolloServer({
  typeDefs,
  rootValue,
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
