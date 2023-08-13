import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    address: String
    city: String
    stateProvince: String
    country: String
    postalCode: String
    phoneNumber: String
    verified: Boolean
  }

  input SignupInput {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    address: String
    city: String
    stateProvince: String
    country: String
    postalCode: String
    phoneNumber: String
  }

  type VerificationResponse {
    success: Boolean!
    message: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type AuthResponse {
    token: String!
    user: User!
  }

  type SwitchModel {
    _id: ID
    category: String
    brand: String
    product: String
    switchType: String
    quantity: Int
    price: Int
    imageURL: String
  }

  type Keyboard {
    _id: ID
    brand: String
    model: String
    color: String
    keycaps: String
    plate: String
    case: String
    switches: String
    hotswap: Boolean
    price: Int
    quantity: Int
    imageURL: String
  }

  type Keycap {
    _id: ID
    category: String
    brand: String
    model: String
    price: Int
    quantity: Int
    imageURL: String
  }

  type Deskmat {
    _id: ID
    category: String
    brand: String
    model: String
    price: Int
    quantity: Int
    imageURL: String
  }

  type Accessory {
    _id: ID
    category: String
    brand: String
    model: String
    price: Int
    quantity: Int
    imageURL: String
  }

  type PaymentIntentResponse {
    success: Boolean!
    clientSecret: String
    error: String
  }

  type Order {
    _id: ID!
    orderTotal: Float!
    orderItems: [OrderItem!]!
  }

  type OrderItem {
    productId: ID!
    quantity: Int!
    price: Float!
    brand: String!
    model: String
    image: String
  }

  input CreateOrderInput {
    user: ID!
    firstName: String
    lastName: String
    email: String
    shippingAddress: ShippingAddressInput
    total: Float
    subTotal: Float
    tax: Float
    items: [OrderItemInput!]
  }

  input ShippingAddressInput {
    street: String
    city: String
    province: String
    postalCode: String
    country: String
  }

  input OrderItemInput {
    productId: ID!
    quantity: Int!
    price: Float!
    brand: String!
    model: String
    image: String
  }

  type Query {
    user(_id: ID!): User
    verifyToken(token: String!): User!
    switches: [SwitchModel]
    keyboards: [Keyboard]
    keycaps: [Keycap]
    deskmats: [Deskmat]
    accessories: [Accessory]
  }

  type Mutation {
    signup(input: SignupInput!): User!
    login(email: String!, password: String!): AuthResponse
    createPaymentIntent(amount: Int!): PaymentIntentResponse!
    createOrder(input: CreateOrderInput!): Order!
    verifyEmail(uniqueString: String!): VerificationResponse!
    resendVerificationEmail(email: String!): VerificationResponse!
  }
`;

export default typeDefs;
