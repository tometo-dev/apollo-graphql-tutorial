const { gql } = require("apollo-server")

const typeDefs = gql`

enum PatchSize {
    SMALL
    LARGE
}

type Rocket {
    id: ID!
    name: String
    type: String
}

type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
}

type Mission {
    name: String
    missionPatch(mission:String, size: PatchSize): String
}

type User {
    id: ID!
    email: String!
    trips: [Launch]!
}

type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
}

type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String
}

type Query {
    launches(
        pageSize: Int
        after: String
    ): LaunchConnection!
    launch(id: ID!): Launch
    me: User
}

type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch]!
}

`

module.exports = typeDefs