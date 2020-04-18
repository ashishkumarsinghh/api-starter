const books = require("./bookStore");
const resolvers = {
  Query: {
    books: () => books,
  },
};
module.exports = resolvers;
