import { gql } from "apollo-server-express";
const userSchema = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    password: String!
    isVerified: Boolean!
  }
  extend type Query {
    users: [User]
    user(id: ID!): User
  }
  extend type Mutation {
    addUser(email: String!, name: String!, password: String!): User
    verifyUser(id: ID!): User
    deleteUser(id: ID!): User
  }
`;
export default userSchema;
