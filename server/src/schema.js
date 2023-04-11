const gql = require("graphql-tag")

const typeDefs = gql`
type Query {
     "Query to get the tracks to the homepage"
     tracksForHome: [Track!]!
}

" a track is a group of modules that teaches about a specific topic"
type Track {
    id: ID!
    "the tracks title"
    title: String!
    "the tracks main author"
    author: Author!
    "the main illustration on the track card"
    thumbnail: String
    "the tracks approximate length in minutes"
    length: Int
    "the total number of modules this track contains"
    modulesCount: Int
}

"Author of the complete track"
type Author {
    id: ID!
    "the full name of the author"
    name: String!
    "Authors profile picture as a URL"
    photo: String
}
`;

module.exports = typeDefs;