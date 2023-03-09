const ClientMutations = require('../../clients/ClientMutations');
const ProjectMutations = require('../../projects/ProjectMutations');
const ClientQueries = require('../../clients/ClientQueries');
const ProjectQueries = require('../../projects/ProjectQueries');

const { GraphQLObjectType, GraphQLSchema} = require('graphql');

const Query = new GraphQLObjectType({
   name: 'Query',
   fields: {
        ...ClientQueries,
       ...ProjectQueries
   }
});

//Mutations => POST
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...ClientMutations,
        ...ProjectMutations
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});
