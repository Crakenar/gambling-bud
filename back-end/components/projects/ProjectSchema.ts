export {}
const {GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql");

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        // client: {
        //     type: GamblerType,
        //     resolve(parent, args){
        //         return Gambler.findById(parent.clientId)
        //     }
        // }
    })
});

module.exports = ProjectType
