const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const GamblerType = new GraphQLObjectType({
    name: 'Gambler',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

module.exports = GamblerType;
