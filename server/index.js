const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Post {
        id: Int!
        title: String
        description: String
        author: String
        image: String
        like: Int
        createAt: String
    }

    type Query {
        posts: [Post]
    }
`;

const posts = [
    {
        id: 1,
        title: 'The Awakening',
        description: 'this is a post',
        author: 'Kate Chopin',
        image: 'https://i.pinimg.com/originals/47/72/57/477257967192f3c7f94c8f3131a68fc9.jpg',
        likes: 0,
        createAt: '2020-06-01T00:00:00.000Z'
    },
    {
        id: 2,
        title: 'test',
        description: 'this is a post 2',
        author: 'Pargorn Ru',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg',
        likes: 10,
        createAt: '2022-08-16T00:00:00.000Z'
    },
]

const resolvers = {
    Query: {
        posts: () => posts,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});