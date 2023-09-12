export {}
const ProjectMutations = require('../../projects/ProjectMutations');
const ProjectQueries = require('../../projects/ProjectQueries');

const { GraphQLObjectType, GraphQLSchema} = require('graphql');

const Query = new GraphQLObjectType({
   name: 'Query',
   fields: {
       ...ProjectQueries
   }
});

//Mutations => POST
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...ProjectMutations
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});
