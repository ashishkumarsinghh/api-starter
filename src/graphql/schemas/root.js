import { gql } from "apollo-server-express";

const root = gql`
  enum Role {
    ADMIN
    USER
  }

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    _: String
  }
`;
export default root;
