const { gql } = require('apollo-server')

module.export = gql`
    type User {
        _id: ID
        name: String
        email: String
        picture: String
    }

    type Query {
        me: User
    }
`;