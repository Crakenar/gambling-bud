const GamblerMutations = require('../../gamblers/GamblerMutations');
const ProjectMutations = require('../../projects/ProjectMutations');
const GamblerQueries = require('../../gamblers/GamblerQueries');
const ProjectQueries = require('../../projects/ProjectQueries');

const { GraphQLObjectType, GraphQLSchema} = require('graphql');

const Query = new GraphQLObjectType({
   name: 'Query',
   fields: {
        ...GamblerQueries,
       ...ProjectQueries
   }
});

//Mutations => POST
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...GamblerMutations,
        ...ProjectMutations
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});
