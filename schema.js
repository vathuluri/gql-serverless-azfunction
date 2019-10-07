const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: ID,
    name: String
  } 

  input ProductInput {
    name: String
  }

  type Mutation {
    createProduct(product: ProductInput): Product
  }

  type Query {
    hello: String,
    products: [Product],
    product(id: ID!): Product
  }
`

module.exports = typeDefs;