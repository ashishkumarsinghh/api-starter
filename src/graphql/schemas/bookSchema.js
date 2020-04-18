import { gql } from "apollo-server-express";
const bookSchema = gql`
  type Book {
    title: String
    author: String
  }
  extend type Query {
    books: [Book]
  }
`;
export default bookSchema;
