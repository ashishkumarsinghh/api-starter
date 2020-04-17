const gql = require("graphql-tag");
const { buildASTSchema } = require("graphql");
const schema = buildASTSchema(gql`
  type Query {
    hello: String
  }
`);
module.exports = schema;
